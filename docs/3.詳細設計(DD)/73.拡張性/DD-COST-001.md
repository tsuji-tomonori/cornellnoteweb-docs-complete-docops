---
id: DD-COST-001
title: FinOps（コスト運用）詳細
doc_type: 拡張性
phase: DD
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-COST-001]]'
- '[[BD-DEP-002]]'
down: []
related:
- '[[BD-DEP-002]]'
tags:
- CornellNoteWeb
- DD
- COST
---
# DD-COST-001 FinOps（コスト運用）詳細

## 方針
- 日次/週次で主要コスト（DB、S3、CloudWatch、データ転送）をモニタする。
- リソースタグで環境/コストセンタを分離（infra/stack.ts参照）。

## 運用（案）
- 週次: stg/prod のコスト差分を確認
- 月次: 予算上限を超過しそうならスケールダウン/保持期間短縮を検討
- PDF保持: ライフサイクルで自動削除（例: 7日）

## 変更履歴
- 2026-01-31: 初版