---
id: DD-DDL-008
title: export_jobs テーブル
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
# DD-DDL-008 export_jobs テーブル

## DDL（migrations/007_create_export_jobs.sql）
```sql
CREATE TABLE export_jobs (
  id uuid PRIMARY KEY,
  note_id uuid NOT NULL REFERENCES notes(id),
  status text NOT NULL CHECK (status IN ('queued', 'running', 'succeeded', 'failed')),
  output_ref text,
  error_message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

CREATE INDEX export_jobs_note_id_idx ON export_jobs(note_id);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）