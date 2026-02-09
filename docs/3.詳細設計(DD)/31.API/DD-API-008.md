---
id: DD-API-008
title: エクスポートAPI（PDF）
doc_type: API詳細
phase: DD
version: 1.0.0
status: 下書き
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-017]]'
related:
- '[[DD-DDL-008]]'
tags:
- CornellNoteWeb
- DD
- API
- EXPORT
---

## POST /api/notes/{noteId}/export/pdf
### レスポンス（202 Accepted）
```json
{
  "exportId": "${json-unit.ignore}",
  "noteId": "11111111-2222-3333-4444-555555555555",
  "status": "pending",
  "downloadUrl": null,
  "createdAt": "${json-unit.ignore}",
  "updatedAt": "${json-unit.ignore}"
}
```

---

## GET /api/exports/{exportId}
### レスポンス（200）
```json
{
  "exportId": "${json-unit.ignore}",
  "noteId": "${json-unit.ignore}",
  "status": "completed",
  "downloadUrl": "http://localhost:3000/mock/export/sample.pdf",
  "createdAt": "${json-unit.ignore}",
  "updatedAt": "${json-unit.ignore}"
}
```

## 現行挙動（既知ギャップ）
- 現行はモックURLを返すスタブ実装。非同期処理の実体（SQS + Worker + S3）は infra と ADR に準拠して実装予定。

## 変更履歴
- 2026-01-31: 初版
