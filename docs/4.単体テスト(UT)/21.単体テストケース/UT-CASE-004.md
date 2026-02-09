---
id: UT-CASE-004
title: 'TagController: 未認証は401'
doc_type: 単体テストケース
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[UT-PLAN-001]]'
- '[[DD-API-005]]'
down: []
related:
- '[[DD-API-001]]'
tags:
- CornellNoteWeb
- UT
- CASE
---
# UT-CASE-004 TagController: 未認証は401

## 対象
- TagControllerTest を対象に、セッション無しでアクセスした場合に401になることを検証する。

## 前提
- Spring Boot Test 実行可能
- 必要ならDBRiderでデータセット投入（[[UT-TDAT-001]]）

## 手順（概略）
1. APIを呼び出す（MockMvc）
2. ステータスとレスポンスJSONを検証する
3. DB状態（必要なら）を検証する

## 受入基準
- 未認証で401
- 認証ありで200

## 変更履歴
- 2026-01-31: 初版