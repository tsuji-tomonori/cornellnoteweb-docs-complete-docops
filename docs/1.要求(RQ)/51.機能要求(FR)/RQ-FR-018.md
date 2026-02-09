---
id: RQ-FR-018
title: エクスポート状態を取得しダウンロードできる
doc_type: 機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-UC-006]]'
- '[[DD-API-008]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-018
- **種別**: 機能要求
- **優先度**: Could
- **要求**: 本システムは、/api/exports/{exportId} GET で状態とダウンロードURLを取得できる。
- **根拠**: 非同期出力の完了確認。
- **受入基準**:
  - completed時にoutputUrlが返る
- **例外/エラー**:
  - 処理中はpending/runningが返る
- **関連**:
  - [[RQ-UC-006]]
  - [[DD-API-008]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
