---
id: BD-DEP-001
title: デプロイ方式（ローカル/クラウド）
doc_type: デプロイ
phase: BD
version: 1.0.6
status: 承認
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-PC-003]]'
- '[[BD-ARCH-003]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-ADR-007]]'
- '[[BD-ADR-008]]'
- '[[BD-ADR-010]]'
- '[[BD-DEP-003]]'
tags:
- CornellNoteWeb
- BD
- DEP
---

## ローカル（開発）
- Docker Compose で起動（[[BD-ENV-001]]）

## クラウド（想定）
- AWS CDK によりスタックを構築（infra/）
- app配信: CloudFront(`app.<domain>`) + Lambda Function URL（OAC/AWS_IAM）
- docs配信: CloudFront(`docs.<domain>`) + S3（Quartz生成物、OAC）
- app配信の `/api/*` は App配信スタック内で自動作成する API Gateway オリジンへ分岐
- Lambda（Spring Boot SSR + AWS Lambda Web Adapter）
- Aurora(PostgreSQL) + S3 + SQS + CloudWatch + Secrets Manager
- ドキュメントは Quartzで `quartz/public` を生成し、CDKの `siteAssetPath` としてCloudFront配信へ反映する

## 運用上の注意（Function URL + OAC）
- app配信のデフォルト挙動（`/*`）で Function URL へ到達するリクエストは、POST/PUT時に `x-amz-content-sha256` 要件の影響を受ける。
- 更新系APIは `/api/*` を API Gateway へ分岐し、ブラウザ標準フォーム送信の制約を回避する。

## ドキュメントのデプロイ手順
- 標準手順は `Taskfile.yml` の `docs:deploy` を使用する
- `docs:deploy` は以下を連続実行する
  - Quartz build: `npx quartz build -d ../docs`（`quartz/public` 生成）
  - CDK build/deploy: `infra` で `npm run build` と `npm run deploy -- --context siteAssetPath=<repo>/quartz/public`
- デプロイ方式の決定は [[BD-ADR-007]] を参照する

## ドキュメントのデプロイ
- ドキュメントのデプロイは `docs:deploy` を正式手順とする。
- CDK deploy は `quartz/public` を配信元アセットとしてCloudFrontへ反映する。

## ロールバック
- アプリ: `AppSiteStack` のCloudFront設定とLambdaバージョン/エイリアスで戻す（将来）
- DB: マイグレーションは原則 forward-only（戻しが必要な場合は手順書化）

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: Quartz public生成とCDK deploy連携手順を追加
- 2026-02-09: ドキュメントのデプロイ表現へ統一
- 2026-02-09: CloudFront + Function URL(OAC) のインフラ構成とPOST要件を追記
- 2026-02-11: 公開フロー詳細を [[BD-DEP-003]] へ分離し、関連リンクを追加
- 2026-02-11: app/docsドメイン分離と `/api/*` の API Gateway 分岐方針を追記
- 2026-02-11: `AppSiteStack` で API Gateway を自動生成し `/api/*` に接続する運用へ更新
