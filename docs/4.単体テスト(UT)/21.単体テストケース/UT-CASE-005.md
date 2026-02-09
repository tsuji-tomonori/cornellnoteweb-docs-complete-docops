---
id: UT-CASE-005
title: 'ShareController: 共有リンクの生成/取得/取り消し'
doc_type: 単体テストケース
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-02-09
up:
- '[[UT-PLAN-001]]'
- '[[DD-API-007]]'
related:
- '[[DD-API-001]]'
tags:
- CornellNoteWeb
- UT
- CASE
---

## 対象
- ShareControllerTest を対象に、共有リンク生成（201）→取得（200）→取り消し（204）を検証する。

## 前提
- Spring Boot Test 実行可能
- 必要ならDBRiderでデータセット投入（[[UT-TDAT-001]]）

## 手順（概略）
1. APIを呼び出す（MockMvc）
2. ステータスとレスポンスJSONを検証する
3. DB状態（必要なら）を検証する

## 受入基準
- 共有リンク生成でURLが返る
- 取得で公開ノートが返る
- 取り消し後は404相当（将来）

## 変更履歴
- 2026-01-31: 初版
