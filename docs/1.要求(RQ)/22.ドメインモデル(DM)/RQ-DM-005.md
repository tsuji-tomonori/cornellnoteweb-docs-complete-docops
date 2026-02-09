---
id: RQ-DM-005
title: Tag（タグ）
doc_type: ドメインモデル（エンティティ）
phase: RQ
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-DM-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- DM
- Entity
---

## 説明
ユーザー内で一意な分類ラベル。ノートと多対多。

## 属性
- id(UUID)
- user_id(FK)
- name
- created_at/updated_at

## 関連（主な関係）
- UserAccount
- Note

## 状態/ライフサイクル
- `deleted_at` が入っている場合はUI/API上で非表示（論理削除）

## 変更履歴
- 2026-01-31: 初版
