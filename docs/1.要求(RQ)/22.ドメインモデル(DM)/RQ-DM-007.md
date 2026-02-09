---
id: RQ-DM-007
title: ExportJob（エクスポート）
doc_type: ドメインモデル（エンティティ）
phase: RQ
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-DM-001]]'
down:
- '[[DD-DDL-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- DM
- Entity
---
# RQ-DM-007 ExportJob（エクスポート）

## 説明
PDF出力などの非同期処理を表すジョブ。

## 属性
- id(UUID)
- note_id(FK)
- status
- output_ref
- error_message
- created_at
- completed_at

## 関連（主な関係）
- Note

## 状態/ライフサイクル
- `deleted_at` が入っている場合はUI/API上で非表示（論理削除）

## 変更履歴
- 2026-01-31: 初版