---
id: RQ-COST-001
title: 運用コスト要求（上限と監視）
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
- '[[BD-DEP-002]]'
- '[[DD-COST-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---
# RQ-COST-001 運用コスト要求（上限と監視）

## 要求
- MVP環境の月額コスト上限（目安）を設定する
- 環境タグでコスト配賦できる
- コスト異常を検知できる

## 受入基準
- コスト運用手順がある（[[DD-COST-001]]）
- CDKでタグが付与される（infra）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版