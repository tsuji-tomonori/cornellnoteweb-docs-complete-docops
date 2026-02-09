---
id: BD-API-001
title: API概要（エンドポイント一覧）
doc_type: API（概要設計）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-FR-001]]'
- '[[BD-ARCH-001]]'
related:
- '[[BD-ARCH-002]]'
tags:
- CornellNoteWeb
- BD
- API
---

## 原則
- ベースパス: `/api`
- 形式: JSON
- 認証: サーバサイドセッション（MVP）。将来CSRF対策と合わせて強化（[[BD-ADR-004]]）。
- エラー: 統一フォーマット（[[BD-API-003]]）

## エンドポイント一覧（MVP）
### 認証
- `POST /api/auth/signup`（サインアップ）
- `POST /api/auth/login`（ログイン）
- `POST /api/auth/logout`（ログアウト）
- `POST /api/auth/password/reset`（パスワードリセット要求：将来）

### ノート
- `GET /api/notes`（一覧）
- `POST /api/notes`（作成）
- `GET /api/notes/{noteId}`（取得）
- `PUT /api/notes/{noteId}`（更新）
- `DELETE /api/notes/{noteId}`（削除）
- `GET /api/notes/{noteId}/content`（本文のみ）

### ノートブック/タグ
- `GET /api/notebooks`（一覧）
- `GET /api/tags`（一覧）

### 検索
- `GET /api/search?q=&tagId=&notebookId=`（※MVPはスタブ）

### 共有
- `POST /api/notes/{noteId}/share`（共有リンク作成）
- `GET /api/share/{shareToken}`（共有ノート取得）
- `DELETE /api/share/{shareToken}`（共有リンク取り消し）

### エクスポート
- `POST /api/notes/{noteId}/export/pdf`（PDF出力要求）
- `GET /api/exports/{exportId}`（状態取得）

### E2E補助（開発用）
- `POST /api/e2e/seed`（テストデータ投入）

## 変更履歴
- 2026-01-31: 初版
