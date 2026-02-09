---
id: BD-UI-001
title: 画面一覧
doc_type: UI（概要設計）
phase: BD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-UC-001]]'
- '[[BD-ARCH-001]]'
down:
- '[[DD-UI-001]]'
related:
- '[[BD-ARCH-001]]'
tags:
- CornellNoteWeb
- BD
- UI
---
# BD-UI-001 画面一覧

## 画面一覧（MVP）
- `/` : リダイレクト（ログイン状態で /notes へ）
- `/login` : ログイン
- `/signup` : サインアップ
- `/notes` : ノート一覧
- `/editor?id={noteId|new}` : ノート編集
- `/share?token=...` : 共有ノート閲覧
- `/settings` : 設定（アカウント削除など）

## 変更履歴
- 2026-01-31: 初版