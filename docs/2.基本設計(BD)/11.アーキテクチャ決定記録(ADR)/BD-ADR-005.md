---
id: BD-ADR-005
title: PDF生成方式（非同期ワーカー）
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PC-001]]'
- '[[RQ-RDR-001]]'
down:
- '[[BD-ARCH-001]]'
related:
- '[[RQ-RDR-002]]'
- '[[DD-API-008]]'
tags:
- CornellNoteWeb
- BD
- ADR
---
# BD-ADR-005 PDF生成方式（非同期ワーカー）

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
PDF生成は外部ライブラリやレンダリングに時間がかかる。同期処理ではAPI応答性能を満たしづらい。

## Decision
- ジョブキュー + ワーカーで非同期生成
- APIはジョブ登録と結果取得を分離
- 完了後にObject Storageから取得可能にする

## Consequences
- API応答性能を維持しやすい
- ジョブ管理/再実行/失敗通知の運用が必要

## Alternatives
- 同期で即時生成
- クライアント側でPDF生成

## References
- [[RQ-RDR-002]]
- [[DD-API-008]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）