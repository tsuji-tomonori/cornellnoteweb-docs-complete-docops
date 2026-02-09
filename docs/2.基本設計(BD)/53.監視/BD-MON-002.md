---
id: BD-MON-002
title: SLO/エラーバジェット運用（案）
doc_type: 監視
phase: BD
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-AV-001]]'
down:
- '[[AT-OPS-001]]'
- '[[IT-INC-001]]'
related: []
tags:
- CornellNoteWeb
- BD
- MON
---
# BD-MON-002 SLO/エラーバジェット運用（案）

## 方針（案）
- 月次SLOを満たしている限り、デプロイ頻度を優先する。
- SLOを下回った場合は、機能開発よりも信頼性改善を優先する（エラーバジェット消費）。

## 週次レポート（案）
- 稼働率、5xx率、P95レイテンシ、インシデント件数
- 重大インシデントはポストモーテム（[[IT-INC-001]]）を作成

## 変更履歴
- 2026-01-31: 初版