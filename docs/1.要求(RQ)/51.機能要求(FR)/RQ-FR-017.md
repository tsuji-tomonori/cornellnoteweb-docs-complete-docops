---
id: RQ-FR-017
title: PDFエクスポートを要求できる
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
- '[[RQ-DM-007]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-017
- **種別**: 機能要求
- **優先度**: MAY
- **要求**: 本システムは、/api/notes/{noteId}/export/pdf POST でPDFエクスポートジョブを作成できる。
- **根拠**: 配布/印刷。
- **受入基準**:
  - ジョブIDと状態が返る（pending等）
- **例外/エラー**:
  - 存在しないnoteId→404（将来）
- **関連**:
  - [[RQ-UC-006]]
  - [[DD-API-008]]
  - [[RQ-DM-007]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
