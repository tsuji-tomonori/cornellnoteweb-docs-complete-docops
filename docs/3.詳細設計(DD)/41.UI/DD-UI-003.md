---
id: DD-UI-003
title: ノート編集画面（/editor）
doc_type: UI詳細
phase: DD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-UI-002]]'
- '[[DD-UI-001]]'
- '[[DD-ALG-001]]'
down:
- '[[RQ-UC-003]]'
related:
- '[[DD-API-003]]'
- '[[DD-ALG-001]]'
tags:
- CornellNoteWeb
- DD
- UI
---
# DD-UI-003 ノート編集画面（/editor）

## 関連
- UC: [[RQ-UC-003]]
- API: [[DD-API-003]]（GET/PUT /api/notes/{id}）
- AutoSave: [[DD-ALG-001]]

## 主な要素
- タイトル入力（`#noteTitle`）
- ノートブック選択（`#notebookSelect`）
- Cornell入力欄
  - Cue（`#cueArea`）
  - Notes（`#notesArea`）
  - Summary（`#summaryArea`）
- アクション: 共有 / PDF出力 / 削除（モーダル）

## 自動保存（現行）
- `AutoSave`（debounce 1500ms）で「保存中→保存済み」を表示
- 現行は `console.log` のみでAPI呼び出しが未接続（既知ギャップ）

## モーダル（アクセシビリティ）
- `app.js` の `openModal` がフォーカストラップとEsc閉じを提供

## 変更履歴
- 2026-01-31: 初版