---
id: DD-DBCON-001
title: DB制約（全体）
doc_type: DB制約
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-ERD-001]]'
down:
- '[[DD-DBCON-002]]'
related:
- '[[DD-DDL-001]]'
tags:
- CornellNoteWeb
- DD
- DB
---
# DD-DBCON-001 DB制約（全体）

## 外部キー（FK）
- notebooks.user_id → users.id
- notes.notebook_id → notebooks.id
- tags.user_id → users.id
- note_tags.note_id → notes.id
- note_tags.tag_id → tags.id
- share_tokens.note_id → notes.id
- export_jobs.note_id → notes.id

## インデックス（主要）
- notes.notebook_id
- tags.user_id
- share_tokens.note_id
- export_jobs.note_id

## 論理削除
- users/notebooks/notes は `deleted_at` を持つ。
- 論理削除の検索条件をアプリ層で統一する（将来: リポジトリで共通化）。

## 変更履歴
- 2026-01-31: 初版