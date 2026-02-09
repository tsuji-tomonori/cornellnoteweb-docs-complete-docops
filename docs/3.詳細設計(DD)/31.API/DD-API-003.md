---
id: DD-API-003
title: ノートAPI
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-FR-003]]'
- '[[BD-ARCH-004]]'
- '[[DD-API-001]]'
down:
- '[[UT-CASE-002]]'
- '[[IT-CASE-001]]'
related:
- '[[DD-DDL-004]]'
tags:
- CornellNoteWeb
- DD
- API
- NOTE
---
# DD-API-003 ノートAPI

## GET /api/notes
### クエリ
- `limit`（default 20）
- `offset`（default 0）

### レスポンス（200）
```json
{
  "items": [
    {
      "noteId": "11111111-2222-3333-4444-555555555555",
      "title": "JavaScriptの非同期処理",
      "notebookId": "22222222-2222-2222-2222-222222222222",
      "tags": [
        {
          "tagId": "55555555-5555-5555-5555-555555555555",
          "name": "JavaScript",
          "createdAt": "2025-01-10T00:00:00Z",
          "updatedAt": "2025-01-10T00:00:00Z"
        },
        {
          "tagId": "88888888-8888-8888-8888-888888888888",
          "name": "重要",
          "createdAt": "2025-01-07T23:00:00Z",
          "updatedAt": "2025-01-07T23:00:00Z"
        }
      ],
      "preview": "Promise、async/await、コールバック関数について学習。非同期処理の基本概念を整理...",
      "createdAt": "2025-01-15T01:00:00Z",
      "updatedAt": "2025-01-16T05:30:00Z"
    },
    {
      "noteId": "44444444-5555-6666-7777-888888888888",
      "title": "プロジェクト計画会議",
      "notebookId": "44444444-4444-4444-4444-444444444444",
      "tags": [
        {
          "tagId": "99999999-9999-9999-9999-999999999999",
          "name": "復習",
          "createdAt": "2025-01-09T00:00:00Z",
          "updatedAt": "2025-01-09T00:00:00Z"
        }
      ],
      "preview": "Q1のマイルストーン確認、タスク割り当て、リスク分析について議論...",
      "createdAt": "2025-01-16T00:00:00Z",
      "updatedAt": "2025-01-16T01:30:00Z"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}
```

---

## POST /api/notes
### リクエスト（例）
```json
{
  "title": "新規ノート",
  "cue": "Cue",
  "notes": "Notes",
  "summary": "Summary",
  "notebookId": "22222222-2222-2222-2222-222222222222",
  "tagIds": []
}
```

### レスポンス（201）
```json
{
  "noteId": "${json-unit.ignore}",
  "title": "新規ノート",
  "cue": "Cue",
  "notes": "Notes",
  "summary": "Summary",
  "notebookId": "22222222-2222-2222-2222-222222222222",
  "tags": [],
  "createdAt": "${json-unit.ignore}",
  "updatedAt": "${json-unit.ignore}"
}
```

---

## GET /api/notes/{noteId}
### レスポンス（200）
```json
{
  "noteId": "11111111-2222-3333-4444-555555555555",
  "title": "JavaScriptの非同期処理",
  "cue": "# キーポイント",
  "notes": "Promise、async/await、コールバック関数について学習。非同期処理の基本概念を整理...",
  "summary": "JavaScriptの非同期処理は、シングルスレッドの制約を克服するための重要な概念。Promiseは非同期操作を表現するオブジェクトで、async/awaitはPromiseをより直感的に扱える構文。エラーハンドリングはtry-catchで行い、複数の非同期処理を並列実行したい場合はPromise.allを使用する。",
  "notebookId": "22222222-2222-2222-2222-222222222222",
  "tags": [
    {
      "tagId": "55555555-5555-5555-5555-555555555555",
      "name": "JavaScript",
      "createdAt": "2025-01-10T00:00:00Z",
      "updatedAt": "2025-01-10T00:00:00Z"
    },
    {
      "tagId": "88888888-8888-8888-8888-888888888888",
      "name": "重要",
      "createdAt": "2025-01-07T23:00:00Z",
      "updatedAt": "2025-01-07T23:00:00Z"
    }
  ],
  "createdAt": "2025-01-15T01:00:00Z",
  "updatedAt": "2025-01-16T05:30:00Z"
}
```

---

## PUT /api/notes/{noteId}
### リクエスト（例）
```json
{
  "title": "更新後タイトル",
  "cue": "更新Cue",
  "notes": "更新Notes",
  "summary": "更新Summary",
  "tagIds": []
}
```

### レスポンス（200）
```json
{
  "noteId": "33333333-3333-3333-3333-333333333333",
  "title": "更新タイトル",
  "cue": "更新Cue",
  "notes": "更新Notes",
  "summary": "更新Summary",
  "notebookId": "22222222-2222-2222-2222-222222222222",
  "tags": [
    {
      "tagId": "99999999-9999-9999-9999-999999999999",
      "name": "新タグ",
      "createdAt": "2025-01-01T15:00:00Z",
      "updatedAt": "2025-01-01T15:00:00Z"
    }
  ],
  "createdAt": "${json-unit.ignore}",
  "updatedAt": "${json-unit.ignore}"
}
```

---

## DELETE /api/notes/{noteId}
### レスポンス（204）
- 論理削除（`deleted_at` を設定する想定）

---

## GET /api/notes/{noteId}/content
### レスポンス（200）
```json
{
  "noteId": "11111111-2222-3333-4444-555555555555",
  "cue": "# キーポイント",
  "notes": "Promise、async/await、コールバック関数について学習。非同期処理の基本概念を整理...",
  "summary": "JavaScriptの非同期処理は、シングルスレッドの制約を克服するための重要な概念。Promiseは非同期操作を表現するオブジェクトで、async/awaitはPromiseをより直感的に扱える構文。エラーハンドリングはtry-catchで行い、複数の非同期処理を並列実行したい場合はPromise.allを使用する。"
}
```

## 変更履歴
- 2026-01-31: 初版