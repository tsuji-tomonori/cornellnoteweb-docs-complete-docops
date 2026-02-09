---
id: DD-COMP-002
title: APIエンドポイント ↔ Controller 対応
doc_type: コンポーネント
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-API-001]]'
down:
- '[[DD-API-002]]'
related: []
tags:
- CornellNoteWeb
- DD
- COMP
---
# DD-COMP-002 APIエンドポイント ↔ Controller 対応

## 対応表（抜粋）
- 認証: `AuthController`
  - `POST /api/auth/signup`
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `POST /api/auth/password/reset`
- ノート: `NoteController`
  - `GET/POST /api/notes`
  - `GET/PUT/DELETE /api/notes/{noteId}`
  - `GET /api/notes/{noteId}/content`
- ノートブック: `NotebookController`（`GET /api/notebooks`）
- タグ: `TagController`（`GET /api/tags`）
- 共有: `ShareController`
  - `POST /api/notes/{noteId}/share`
  - `GET/DELETE /api/share/{shareToken}`
- エクスポート: `ExportController`
  - `POST /api/notes/{noteId}/export/pdf`
  - `GET /api/exports/{exportId}`
- 検索: `SearchController`（`GET /api/search`）
- E2E: `E2eSeedController`（`POST /api/e2e/seed`）

## 変更履歴
- 2026-01-31: 初版