---
id: RQ-FR-014
title: 共有リンクを作成できる
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
- '[[RQ-UC-007]]'
- '[[DD-API-007]]'
- '[[RQ-DM-006]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-014
- **種別**: 機能要求
- **優先度**: Could
- **要求**: 本システムは、/api/notes/{noteId}/share POST で共有リンク（ShareToken）を発行できる（ノート単位）。
- **根拠**: 外部閲覧共有。
- **受入基準**:
  - URLとshareTokenが返る
  - 作成日時が記録される
- **例外/エラー**:
  - 存在しないnoteId→404
- **関連**:
  - [[RQ-UC-007]]
  - [[DD-API-007]]
  - [[RQ-DM-006]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
