---
id: RQ-FR-004
title: ノートを新規作成できる
doc_type: 機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[DD-API-001]]'
- '[[UT-PLAN-001]]'
related:
- '[[RQ-UC-002]]'
- '[[DD-API-003]]'
- '[[RQ-DM-004]]'
tags:
- CornellNoteWeb
- RQ
- FR
---
# RQ-FR-004 ノートを新規作成できる

## SnowCard（日本語）
- **要求ID**: RQ-FR-004
- **種別**: 機能要求
- **優先度**: Must
- **要求**: 本システムは、/api/notes POST でノートを作成できる。
- **根拠**: コア価値の提供。
- **受入基準**:
  - noteId が払い出される
  - title/cue/notes/summary が保存される
  - notebookId が必須である
- **例外/エラー**:
  - notebookId 不正→400
  - 作成失敗→500
- **関連**:
  - [[RQ-UC-002]]
  - [[DD-API-003]]
  - [[RQ-DM-004]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版