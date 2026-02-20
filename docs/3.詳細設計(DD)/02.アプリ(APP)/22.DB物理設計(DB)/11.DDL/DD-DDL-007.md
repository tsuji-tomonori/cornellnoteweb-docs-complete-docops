---
id: DD-DDL-007
title: share_tokens テーブル
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

## DDL（migrations/006_create_share_tokens.sql）
```sql
CREATE TABLE share_tokens (
  id uuid PRIMARY KEY,
  note_id uuid NOT NULL REFERENCES notes(id),
  token_hash text NOT NULL,
  status text NOT NULL CHECK (status IN ('active', 'revoked', 'expired')),
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz
);

CREATE INDEX share_tokens_note_id_idx ON share_tokens(note_id);
```

## 補足
- 制約の意図は [[DD-DBCON-001]] を参照。

## 変更履歴
- 2026-01-31: 初版（migrationsから転記）
