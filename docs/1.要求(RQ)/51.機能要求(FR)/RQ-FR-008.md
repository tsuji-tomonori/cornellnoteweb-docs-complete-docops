---
id: RQ-FR-008
title: ノート内容（Cue/Notes/Summary）を取得できる
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
- '[[DD-API-003]]'
tags:
- CornellNoteWeb
- RQ
- FR
---

## SnowCard（日本語）
- **要求ID**: RQ-FR-008
- **種別**: 機能要求
- **優先度**: SHOULD
- **要求**: 本システムは、/api/notes/{noteId}/content で本文3領域だけ取得できる。
- **根拠**: エクスポートや共有などで軽量に取りたい場合。
- **受入基準**:
  - cue/notes/summary の3つが返る
- **例外/エラー**:
  - 存在しないID→404
- **関連**:
  - [[DD-API-003]]

## テスト観点（抜粋）
- 正常系/異常系（パラメータ不正、存在しないID、未ログイン）
- 権限（将来）: 他ユーザーのノートにアクセスできない
- NFR: レイテンシ/監査ログ（[[RQ-PS-001]] / [[RQ-OBY-001]]）

## 変更履歴
- 2026-01-31: 初版
