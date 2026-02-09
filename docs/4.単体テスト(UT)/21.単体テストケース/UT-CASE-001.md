---
id: UT-CASE-001
title: 'AuthController: signup/login/logout の正常系'
doc_type: 単体テストケース
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-02-09
up:
- '[[UT-PLAN-001]]'
- '[[DD-API-002]]'
related:
- '[[DD-API-001]]'
tags:
- CornellNoteWeb
- UT
- CASE
---

## 対象
- AuthControllerTest / AuthControllerSessionTest を対象に、サインアップ・ログイン・ログアウトのHTTPステータスとレスポンスを検証する。

## 前提
- Spring Boot Test 実行可能
- 必要ならDBRiderでデータセット投入（[[UT-TDAT-001]]）

## 手順（概略）
1. APIを呼び出す（MockMvc）
2. ステータスとレスポンスJSONを検証する
3. DB状態（必要なら）を検証する

## 受入基準
- サインアップで201が返る
- ログインで200が返る
- ログアウトで204が返る

## 変更履歴
- 2026-01-31: 初版
