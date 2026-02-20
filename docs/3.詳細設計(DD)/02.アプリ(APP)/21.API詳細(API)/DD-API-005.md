---
id: DD-API-005
title: タグAPI
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-010]]'
related:
- '[[DD-DDL-005]]'
tags:
- CornellNoteWeb
- DD
- API
- TAG
---

## GET /api/tags
### 認証
- サーバセッション必須（未認証は401）

### レスポンス（200）
```json
[
  {
    "tagId": "55555555-5555-5555-5555-555555555555",
    "name": "JavaScript",
    "createdAt": "2025-01-10T00:00:00Z",
    "updatedAt": "2025-01-10T00:00:00Z"
  },
  {
    "tagId": "66666666-6666-6666-6666-666666666666",
    "name": "React",
    "createdAt": "2025-01-11T01:00:00Z",
    "updatedAt": "2025-01-11T01:00:00Z"
  },
  {
    "tagId": "77777777-7777-7777-7777-777777777777",
    "name": "TypeScript",
    "createdAt": "2025-01-12T02:00:00Z",
    "updatedAt": "2025-01-12T02:00:00Z"
  },
  {
    "tagId": "88888888-8888-8888-8888-888888888888",
    "name": "重要",
    "createdAt": "2025-01-07T23:00:00Z",
    "updatedAt": "2025-01-07T23:00:00Z"
  },
  {
    "tagId": "99999999-9999-9999-9999-999999999999",
    "name": "復習",
    "createdAt": "2025-01-09T00:00:00Z",
    "updatedAt": "2025-01-09T00:00:00Z"
  }
]
```

## 変更履歴
- 2026-01-31: 初版
