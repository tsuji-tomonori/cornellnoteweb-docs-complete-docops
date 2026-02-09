---
id: DD-API-006
title: 検索API
doc_type: API詳細
phase: DD
version: 1.0.0
status: 下書き
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-013]]'
related:
- '[[DD-ALG-001]]'
tags:
- CornellNoteWeb
- DD
- API
- SEARCH
---

## GET /api/search
### クエリ
- `q`: キーワード（将来）
- `tagId`: タグ（将来）
- `notebookId`: ノートブック（将来）
- `limit/offset`

### 現行挙動（既知ギャップ）
- 現行は `NoteService.listNotes(limit, offset)` を返すのみで、`q/tagId/notebookId` を使用していない。
- 実装計画は [[DD-ERR-001]] で管理。

## 変更履歴
- 2026-01-31: 初版
