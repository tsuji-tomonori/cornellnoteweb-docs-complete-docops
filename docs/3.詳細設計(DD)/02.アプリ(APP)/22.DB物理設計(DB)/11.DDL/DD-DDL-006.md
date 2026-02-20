---
id: DD-DDL-006
title: note_tags テーブル
doc_type: DDL
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[DD-DDL-001]]'
related:
- '[[DD-DBCON-001]]'
tags:
- CornellNoteWeb
- DD
- DDL
---

## DDL（migrations/005_create_note_tags.sql）
```sql
CREATE TABLE note_tags (
  note_id uuid NOT NULL REFERENCES notes(id),
  tag_id uuid NOT NULL REFERENCES tags(id),
  PRIMARY KEY (note_id, tag_id)
);

CREATE INDEX note_tags_tag_id_idx ON note_tags(tag_id);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）
