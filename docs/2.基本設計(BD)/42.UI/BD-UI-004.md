---
id: BD-UI-004
title: アクセシビリティ方針
doc_type: UI（概要設計）
phase: BD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-UX-001]]'
down:
- '[[DD-UI-006]]'
related:
- '[[DD-ALG-001]]'
tags:
- CornellNoteWeb
- BD
- UI
- A11y
---
# BD-UI-004 アクセシビリティ方針

## 方針
- キーボード操作で主要機能が完結する（Tab順、Escでモーダル閉じる）。
- モーダルはフォーカストラップを実装し、ARIA属性を付与する。
- `aria-live` を用いて保存状態やエラーを読み上げ可能にする。
- コントラストやフォントサイズはCSSトークンで管理する。

## 実装ヒント（現行）
- `app.js` の `openModal/closeModal` はフォーカストラップとEsc閉じを実装している。

## 変更履歴
- 2026-01-31: 初版