---
id: AT-REL-001
title: ドキュメントデプロイ手順書（リリース手順）
doc_type: 配信手順書
phase: AT
version: 1.0.4
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[BD-DEP-001]]'
- '[[DD-REV-001]]'
related:
- '[[DD-DEP-001]]'
- '[[BD-ADR-007]]'
- '[[BD-DEP-003]]'
tags:
- CornellNoteWeb
- AT
- REL
---

## 手順（概要）
1. mainの状態をタグ付け（例: v0.1.0）
2. CIで `check` と主要E2Eを確認
3. `task report:allure:publish` を実行して品質レポートを `quartz/public/reports/allure/latest` へ配置
4. `task docs:deploy` を実行して `quartz/public` 生成 + CDK deploy
5. 受入シナリオ実施（[[AT-SCN-001]]〜）
6. prodへデプロイ
7. リリース判定（[[AT-GO-001]]）

## 実行コマンド（標準）
- 依存インストール込みで実行:
  - `task report:allure:publish`
  - `task docs:deploy`
- 個別実行:
  - `task report:allure:collect`
  - `task report:allure:generate`
  - `task quartz:build`
  - `task infra:build`
  - `task infra:deploy`

## ドキュメントのデプロイ補足
- CloudFront配信に必要な静的アセットは `quartz/public`。
- CDKは `--context siteAssetPath=<repo>/quartz/public` で配信元を参照する。
- 配信方式の設計判断は [[BD-ADR-007]] を参照する。

## ロールバック（概要）
- 前バージョンへ戻す（Lambda alias/イメージの巻き戻し）
- DBはforward-onlyのため、戻しが必要な場合は手順化済みの逆マイグレーションを実施（将来）

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: Taskfile前提の配信手順を追記
- 2026-02-09: ドキュメントのデプロイ手順として表現を統一
- 2026-02-11: ownerをSHロールIDへ正規化し、公開フロー設計文書 [[BD-DEP-003]] を関連追加
- 2026-02-11: Allureレポート公開手順（publish/collect/generate）を追加
