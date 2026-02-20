---
id: DD-API-004
title: ノートブックAPI
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-009]]'
related:
- '[[DD-DDL-003]]'
tags:
- CornellNoteWeb
- DD
- API
- NOTEBOOK
---

## GET /api/notebooks
### 認証
- サーバセッション必須（未認証は401）

### レスポンス（200）
```json
[
  {
    "notebookId": "22222222-2222-2222-2222-222222222222",
    "name": "プログラミング学習",
    "createdAt": "2025-01-10T00:00:00Z",
    "updatedAt": "2025-01-15T05:30:00Z"
  },
  {
    "notebookId": "33333333-3333-3333-3333-333333333333",
    "name": "読書メモ",
    "createdAt": "2025-01-05T01:00:00Z",
    "updatedAt": "2025-01-14T07:00:00Z"
  },
  {
    "notebookId": "44444444-4444-4444-4444-444444444444",
    "name": "会議メモ",
    "createdAt": "2025-01-08T02:00:00Z",
    "updatedAt": "2025-01-16T00:00:00Z"
  }
]
```

## 変更履歴
- 2026-01-31: 初版
