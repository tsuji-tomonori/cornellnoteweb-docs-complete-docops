---
id: BD-API-002
title: 認証/セッション方針
doc_type: API（認証）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-ADR-004]]'
- '[[RQ-SEC-001]]'
related:
- '[[BD-UI-003]]'
tags:
- CornellNoteWeb
- BD
- API
- SEC
---

## 方針（MVP）
- 認証状態はサーバセッション（HttpSession）で保持する。
- フロント（JS）はログイン情報を `localStorage` に保持しているが、**最終的な権限判定はサーバ**で行う（`SessionUserIdResolver`）。
- セッションが無い場合は `401 Unauthorized` を返す（Notebook/Tag APIはすでに実装済み）。

## 将来強化
- CSRFトークンの導入（フォーム/JSの送信に組み込む）
- OAuth/OIDC連携（Googleなど）
- パスワードリセットの実装（メール送信）

## 変更履歴
- 2026-01-31: 初版
