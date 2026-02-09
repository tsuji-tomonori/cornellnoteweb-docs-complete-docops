---
id: UT-CASE-002
title: 'NoteController: CRUD の正常系'
doc_type: 単体テストケース
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[UT-PLAN-001]]'
- '[[DD-API-003]]'
down: []
related:
- '[[DD-API-001]]'
tags:
- CornellNoteWeb
- UT
- CASE
---
# UT-CASE-002 NoteController: CRUD の正常系

## 対象
- NoteControllerTest を対象に、作成→取得→更新→削除の一連を検証する。

## 前提
- Spring Boot Test 実行可能
- 必要ならDBRiderでデータセット投入（[[UT-TDAT-001]]）

## 手順（概略）
1. APIを呼び出す（MockMvc）
2. ステータスとレスポンスJSONを検証する
3. DB状態（必要なら）を検証する

## 受入基準
- 作成で201とnoteIdが返る
- 取得で200
- 更新でupdatedAtが変わる

## 変更履歴
- 2026-01-31: 初版