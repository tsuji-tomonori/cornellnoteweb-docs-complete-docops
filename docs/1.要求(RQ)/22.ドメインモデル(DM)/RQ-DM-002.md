---
id: RQ-DM-002
title: UserAccount（ユーザー）
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
# RQ-DM-002 UserAccount（ユーザー）

## 説明
学習メモを所有する主体。MVPではメールアドレスを識別子として扱う（認証は将来拡張）。

## 属性
- id(UUID)
- email
- auth_provider
- status
- created_at/updated_at/deleted_at

## 関連（主な関係）
- Notebook
- Tag

## 状態/ライフサイクル
- `deleted_at` が入っている場合はUI/API上で非表示（論理削除）

## 変更履歴
- 2026-01-31: 初版