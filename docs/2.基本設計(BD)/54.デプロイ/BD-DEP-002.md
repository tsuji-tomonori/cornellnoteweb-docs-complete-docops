---
id: BD-DEP-002
title: コスト最適化の考え方（MVP）
doc_type: デプロイ
phase: BD
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-COST-001]]'
down:
- '[[DD-COST-001]]'
related:
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- BD
- DEP
- COST
---
# BD-DEP-002 コスト最適化の考え方（MVP）

## 方針
- まずは可用性/性能の最低要件を満たす構成で立ち上げ、利用量に応じて最適化する。
- 主要コストドライバ（DB、S3、データ転送、CloudWatch）を把握し、タグで可視化する。

## 施策例
- stgは最小構成（小さなDB、短いログ保持）
- PDFの保持期間を短く（例: 7日）
- 監視メトリクスの粒度を必要最小限に

## 変更履歴
- 2026-01-31: 初版