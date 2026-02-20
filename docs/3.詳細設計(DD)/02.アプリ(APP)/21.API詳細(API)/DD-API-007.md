---
id: DD-API-007
title: 共有API
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-014]]'
- '[[BD-ARCH-004]]'
related:
- '[[DD-DDL-007]]'
tags:
- CornellNoteWeb
- DD
- API
- SHARE
---

## POST /api/notes/{noteId}/share
### レスポンス（201）
```json
{
  "shareToken": "${json-unit.ignore}",
  "url": "${json-unit.ignore}",
  "noteId": "11111111-2222-3333-4444-555555555555",
  "createdAt": "${json-unit.ignore}"
}
```

---

## GET /api/share/{shareToken}
### レスポンス（200）
```json
{
  "noteId": "${json-unit.ignore}",
  "title": "JavaScriptの非同期処理",
  "cue": "# キーポイント",
  "notes": "Promise、async/await、コールバック関数について学習。非同期処理の基本概念を整理...",
  "summary": "JavaScriptの非同期処理は、シングルスレッドの制約を克服するための重要な概念。Promiseは非同期操作を表現するオブジェクトで、async/awaitはPromiseをより直感的に扱える構文。エラーハンドリングはtry-catchで行い、複数の非同期処理を並列実行したい場合はPromise.allを使用する。",
  "createdAt": "2025-01-15T01:00:00Z"
}
```

---

## DELETE /api/share/{shareToken}
### レスポンス（204）
- 取り消し後は GET が 404 相当になる

## 変更履歴
- 2026-01-31: 初版
