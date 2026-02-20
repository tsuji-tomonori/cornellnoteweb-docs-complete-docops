---
id: BD-UI-003
title: 画面遷移
doc_type: UI（概要設計）
phase: BD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[BD-API-002]]'
tags:
- CornellNoteWeb
- BD
- UI
---

## 遷移図
```mermaid
stateDiagram-v2
  [*] --> Index
  Index --> Notes: ログイン済み
  Index --> Login: 未ログイン

  Login --> Notes: ログイン成功
  Signup --> Notes: 登録成功
  Login --> Signup: 新規登録へ

  Notes --> Editor: ノート選択/新規
  Editor --> Notes: 戻る
  Notes --> Settings: 設定
  Settings --> Login: 削除/ログアウト
  Share --> [*]
```

## 補足
- 共有画面（/share）は閲覧専用で、ログイン不要。
- ログイン状態判定はMVPでは `localStorage` とサーバセッションの両面で行う（将来整理）。

## 変更履歴
- 2026-01-31: 初版
