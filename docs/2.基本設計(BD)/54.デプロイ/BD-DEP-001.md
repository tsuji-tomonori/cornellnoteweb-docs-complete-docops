---
id: BD-DEP-001
title: デプロイ方式（ローカル/クラウド）
doc_type: デプロイ
phase: BD
version: 1.0.2
status: 承認
owner: 運用担当（SRE/運用）
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-PC-003]]'
- '[[BD-ARCH-003]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-ADR-007]]'
tags:
- CornellNoteWeb
- BD
- DEP
---

## ローカル（開発）
- Docker Compose で起動（[[BD-ENV-001]]）

## クラウド（想定）
- AWS CDK によりスタックを構築（infra/）
- API Gateway + Lambda（API/Worker）
- Aurora(PostgreSQL) + S3 + SQS + CloudWatch + Secrets Manager
- ドキュメントは Quartzで `quartz/public` を生成し、CDKの `siteAssetPath` としてCloudFront配信へ反映する

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
- アプリ: Lambdaのバージョン/エイリアスで戻す（将来）
- DB: マイグレーションは原則 forward-only（戻しが必要な場合は手順書化）

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: Quartz public生成とCDK deploy連携手順を追加
- 2026-02-09: ドキュメントのデプロイ表現へ統一
