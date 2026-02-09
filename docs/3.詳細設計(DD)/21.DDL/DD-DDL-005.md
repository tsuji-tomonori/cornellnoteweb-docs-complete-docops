---
id: DD-DDL-005
title: tags テーブル
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
# DD-DDL-005 tags テーブル

## DDL（migrations/004_create_tags.sql）
```sql
CREATE TABLE tags (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, name)
);

CREATE INDEX tags_user_id_idx ON tags(user_id);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）