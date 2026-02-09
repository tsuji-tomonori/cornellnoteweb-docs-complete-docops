---
id: DD-UI-001
title: UI詳細（総論）
doc_type: UI詳細
phase: DD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-UI-001]]'
down:
- '[[DD-UI-002]]'
- '[[DD-UI-003]]'
related:
- '[[BD-UI-004]]'
tags:
- CornellNoteWeb
- DD
- UI
---
# DD-UI-001 UI詳細（総論）

## 実装方針
- Thymeleafテンプレート（`src/main/resources/templates`） + static JS/CSS（`static/`）
- UIロジックは `static/js/app.js` と各ページ内スクリプトで構成
- 主要なUI状態は `localStorage`（ログイン）やメモリ上で管理（MVP）

## 既知ギャップ
- エディタの自動保存・共有・PDF出力はUI側でスタブ挙動になっている箇所がある。API統合の計画は [[DD-ERR-001]] で管理。

## 変更履歴
- 2026-01-31: 初版