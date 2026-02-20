---
id: DD-DBCON-002
title: 一意制約・チェック制約
doc_type: DB制約
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[DD-DBCON-001]]'
related:
- '[[DD-DDL-004]]'
- '[[DD-DDL-005]]'
tags:
- CornellNoteWeb
- DD
- DB
---

## 一意制約
- tags: `UNIQUE(user_id, name)`（同一ユーザー内でタグ名重複禁止）
- note_tags: 複合PK（note_id, tag_id）により重複禁止

## チェック制約（状態）
- notes.status: `draft | active | archived`
- share_tokens.status: `active | revoked | expired`
- export_jobs.status: `queued | running | succeeded | failed`

## 既知ギャップ
- API実装で `notes.status` に `deleted` を使用している箇所がある（制約違反）。方針は [[DD-ERR-001]] で管理。

## 変更履歴
- 2026-01-31: 初版
