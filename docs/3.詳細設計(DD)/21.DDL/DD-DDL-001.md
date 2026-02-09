---
id: DD-DDL-001
title: DDL一覧（マイグレーション）
doc_type: DDL
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-ERD-001]]'
- '[[RQ-DM-002]]'
- '[[RQ-DM-003]]'
- '[[RQ-DM-004]]'
- '[[RQ-DM-005]]'
- '[[RQ-DM-006]]'
- '[[RQ-DM-007]]'
- '[[BD-DATA-001]]'
- '[[DD-COMP-001]]'
- '[[DD-MIG-001]]'
down:
- '[[DD-DDL-002]]'
- '[[DD-DDL-003]]'
- '[[DD-DDL-004]]'
- '[[DD-DDL-005]]'
- '[[DD-DDL-006]]'
- '[[DD-DDL-007]]'
- '[[DD-DDL-008]]'
related:
- '[[DD-MIG-001]]'
tags:
- CornellNoteWeb
- DD
- DDL
---
# DD-DDL-001 DDL一覧（マイグレーション）

## 方針
- `migrations/*.sql` が一次情報。
- ローカルは docker-compose の `migrate` サービスで順番に適用する。

## 一覧
- [[DD-DDL-002]] users
- [[DD-DDL-003]] notebooks
- [[DD-DDL-004]] notes
- [[DD-DDL-005]] tags
- [[DD-DDL-006]] note_tags
- [[DD-DDL-007]] share_tokens
- [[DD-DDL-008]] export_jobs

## 変更履歴
- 2026-01-31: 初版