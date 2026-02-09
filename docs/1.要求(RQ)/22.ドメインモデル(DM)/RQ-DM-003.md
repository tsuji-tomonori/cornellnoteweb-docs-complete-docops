---
id: RQ-DM-003
title: Notebook（ノートブック）
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
# RQ-DM-003 Notebook（ノートブック）

## 説明
ノートの入れ物。表示順（sort_order）を持つ。

## 属性
- id(UUID)
- user_id(FK)
- name
- sort_order
- created_at/updated_at/deleted_at

## 関連（主な関係）
- UserAccount
- Note

## 状態/ライフサイクル
- `deleted_at` が入っている場合はUI/API上で非表示（論理削除）

## 変更履歴
- 2026-01-31: 初版