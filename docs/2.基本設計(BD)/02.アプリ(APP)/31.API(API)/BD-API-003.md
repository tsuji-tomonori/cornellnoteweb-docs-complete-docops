---
id: BD-API-003
title: エラーモデル（統一フォーマット）
doc_type: API（エラー）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-001]]'
related:
- '[[DD-API-001]]'
tags:
- CornellNoteWeb
- BD
- API
- ERR
---

## 方針
- APIエラーは JSON で統一し、フロント側で一貫して扱えるようにする。

## 例（ErrorResponse）
```json
{
  "code": "BAD_REQUEST",
  "message": "noteIdが不正です",
  "details": [
    {"field": "noteId", "reason": "UUID形式である必要があります"}
  ]
}
```

## マッピング（概略）
- 400: 入力不正、UUID不正、バリデーションエラー
- 401: 未認証
- 403: 権限なし（将来）
- 404: 参照対象なし（ノート/共有）
- 409: 競合（将来：同一メールなど）
- 500: 想定外

## 変更履歴
- 2026-01-31: 初版
