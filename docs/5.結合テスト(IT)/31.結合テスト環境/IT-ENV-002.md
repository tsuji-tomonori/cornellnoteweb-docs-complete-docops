---
id: IT-ENV-002
title: E2E/結合向けSeed戦略（/api/e2e/seed）
doc_type: 結合テスト環境
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[DD-API-009]]'
down:
- '[[DD-API-009]]'
related:
- '[[IT-TDAT-001]]'
tags:
- CornellNoteWeb
- IT
- ENV
---
# IT-ENV-002 E2E/結合向けSeed戦略（/api/e2e/seed）

## 目的
- UI/E2Eや結合試験の前提データを安定化する。

## 方針
- Seed APIで固定IDを投入し、テストはそのIDを参照する。
- prod では無効化する（環境フラグ等）。

## 変更履歴
- 2026-01-31: 初版