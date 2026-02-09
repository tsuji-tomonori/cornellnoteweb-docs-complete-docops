---
id: RQ-INT-001
title: 相互運用性要求（API/エクスポート）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[BD-QUAL-001]]'
- '[[BD-SEC-001]]'
- '[[DD-PERF-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---
# RQ-INT-001 相互運用性要求（API/エクスポート）

## 要求
- APIはJSONで提供し、エラーは統一フォーマットとする
- PDF出力は一般的なPDFとして配布できる
- 将来の外部連携（メール送信等）に備え、境界を明確にする

## 受入基準
- APIエラーモデルが合意されている（[[BD-API-003]]）
- OpenAPI等で仕様化されている（[[DD-API-001]]）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版