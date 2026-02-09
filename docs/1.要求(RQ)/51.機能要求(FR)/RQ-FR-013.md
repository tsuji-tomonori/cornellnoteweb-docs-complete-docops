---
id: RQ-FR-013
title: 検索API（q/tag/notebook）で絞り込める
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
- '[[RQ-UC-005]]'
- '[[DD-API-006]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-013
- **種別**: 機能要求
- **優先度**: Could
- **要求**: 本システムは、/api/search で q, tagId, notebookId による絞り込みができる（将来）。
- **根拠**: サーバ側検索への拡張。
- **受入基準**:
  - qでタイトル/本文が検索できる
  - tagId/notebookIdでAND絞り込みできる
- **例外/エラー**:
  - 未実装は既知ギャップとして管理（[[DD-ERR-001]]）
- **関連**:
  - [[RQ-UC-005]]
  - [[DD-API-006]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
