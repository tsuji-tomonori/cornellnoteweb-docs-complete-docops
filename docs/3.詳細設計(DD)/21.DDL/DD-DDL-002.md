---
id: DD-DDL-002
title: users テーブル
doc_type: DDL
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[DD-DDL-001]]'
down: []
related:
- '[[DD-DBCON-001]]'
tags:
- CornellNoteWeb
- DD
- DDL
---
# DD-DDL-002 users テーブル

## DDL（migrations/001_create_users.sql）
```sql
CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  auth_provider text NOT NULL,
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）