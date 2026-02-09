---
id: RQ-DM-004
title: Note（ノート）
doc_type: ドメインモデル（エンティティ）
phase: RQ
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-DM-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- DM
- Entity
---

## 説明
Cornellノート本体。Cue/Notes/Summary とメタ情報を保持する。

## 属性
- id(UUID)
- notebook_id(FK)
- title
- cue_ref
- content_ref
- summary_ref
- status
- created_at/updated_at/deleted_at

## 関連（主な関係）
- Notebook
- Tag
- ShareToken
- ExportJob

## 状態/ライフサイクル
- `deleted_at` が入っている場合はUI/API上で非表示（論理削除）

## 変更履歴
- 2026-01-31: 初版
