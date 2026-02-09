---
id: DD-DDL-004
title: notes テーブル
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
# DD-DDL-004 notes テーブル

## DDL（migrations/003_create_notes.sql）
```sql
CREATE TABLE notes (
  id uuid PRIMARY KEY,
  notebook_id uuid NOT NULL REFERENCES notebooks(id),
  title text NOT NULL,
  content_ref text NOT NULL,
  summary_ref text,
  cue_ref text,
  status text NOT NULL CHECK (status IN ('draft', 'active', 'archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE INDEX notes_notebook_id_idx ON notes(notebook_id);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）