---
id: DD-API-009
title: E2E Seed API（開発用）
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[IT-ENV-002]]'
related:
- '[[IT-TDAT-001]]'
tags:
- CornellNoteWeb
- DD
- API
- E2E
---

## POST /api/e2e/seed
- E2Eテストのために固定IDのユーザー/ノートブック/タグ/ノートを投入する。
- 本番では無効化する（環境フラグ等）。

## レスポンス
- `userId/notebookId/seedNoteId/secondaryNoteId/tagId` を返す。

## 変更履歴
- 2026-01-31: 初版
