---
id: RQ-UC-006
title: PDF出力
doc_type: ユースケース
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[RQ-FR-001]]'
- '[[DD-API-001]]'
related:
- '[[BD-UI-001]]'
tags:
- CornellNoteWeb
- RQ
- UC
---
# RQ-UC-006 PDF出力

## 概要
利用者がノートをPDFとして出力する。

## 前提条件
- ログイン済み
- 対象ノートが存在

## 基本フロー
1. ユーザーが『PDF出力』を押す
2. システムはエクスポートジョブを作成する
3. 完了後にダウンロードURLが提示される

## 代替/例外フロー
- 生成失敗→エラーメッセージと再試行
- 処理中→進捗/状態確認

## 事後条件
- ['Cue/Notes/Summary が区画化されたPDFが入手できる']

## 関連要求
- 機能要求: （例）[[RQ-FR-001]] ほか
- 非機能要求: [[RQ-SEC-001]] / [[RQ-UX-001]]

## 変更履歴
- 2026-01-31: 初版