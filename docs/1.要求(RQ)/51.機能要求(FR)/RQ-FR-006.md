---
id: RQ-FR-006
title: ノートを更新できる
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
- '[[RQ-UC-003]]'
- '[[DD-API-003]]'
- '[[DD-ALG-001]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-006
- **種別**: 機能要求
- **優先度**: Must
- **要求**: 本システムは、/api/notes/{noteId} PUT でノートを更新できる。
- **根拠**: 自動保存/編集。
- **受入基準**:
  - 部分更新（nullは維持）ができる
  - updatedAt が更新される
- **例外/エラー**:
  - 存在しないID→404
  - UUID不正→400
- **関連**:
  - [[RQ-UC-003]]
  - [[DD-API-003]]
  - [[DD-ALG-001]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
