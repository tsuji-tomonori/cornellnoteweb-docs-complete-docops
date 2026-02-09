---
id: DD-UI-005
title: 共有閲覧画面（/share）
doc_type: UI詳細
phase: DD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-UC-007]]'
down: []
related:
- '[[DD-API-007]]'
tags:
- CornellNoteWeb
- DD
- UI
---
# DD-UI-005 共有閲覧画面（/share）

## 関連
- API: [[DD-API-007]]（GET /api/share/{token}）

## 振る舞い
- URLパラメータ `token` を読み取る
- APIから公開ノートを取得し、閲覧専用で表示する
- 編集操作は提供しない

## エラー
- token不正/失効/取り消し時は「見つかりません」を表示（404相当）

## 変更履歴
- 2026-01-31: 初版