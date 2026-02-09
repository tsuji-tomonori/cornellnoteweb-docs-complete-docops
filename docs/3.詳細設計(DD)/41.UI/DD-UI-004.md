---
id: DD-UI-004
title: ログイン画面（/login, /signup）
doc_type: UI詳細
phase: DD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-UI-003]]'
related:
- '[[DD-API-002]]'
tags:
- CornellNoteWeb
- DD
- UI
---

## 関連
- API: [[DD-API-002]]

## 振る舞い（MVP）
- フォーム入力→API呼び出し→成功時 `localStorage` にセッション情報保存→/notesへ遷移
- 失敗時はトースト/エラー表示（将来改善）

## 変更履歴
- 2026-01-31: 初版
