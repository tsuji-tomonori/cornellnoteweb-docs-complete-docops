---
id: RQ-DM-001
title: ドメインモデル概要（CornellNoteWeb）
doc_type: ドメインモデル
phase: RQ
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-GL-002]]'
tags:
- CornellNoteWeb
- RQ
- DM
---

## 目的
- 用語とデータ構造の境界を合意し、要求（FR/UC）と設計（ERD/DDL）をつなぐ。

## 概要（概念関係）
```mermaid
classDiagram
  class UserAccount
  class Notebook
  class Note
  class Tag
  class NoteTag
  class ShareToken
  class ExportJob

  UserAccount "1" --> "0..*" Notebook : 所有
  Notebook "1" --> "0..*" Note : 含む
  UserAccount "1" --> "0..*" Tag : 所有
  Note "0..*" --> "0..*" Tag : NoteTagで関連
  Note "1" --> "0..*" ShareToken : 共有
  Note "1" --> "0..*" ExportJob : 出力
```

## 状態（代表例）
- Note.status: `draft` / `active` / `archived`（削除は論理削除として `deleted_at` を利用）
- ShareToken.status: `active` / `revoked`（期限は `expires_at`）
- ExportJob.status: `queued` / `running` / `succeeded` / `failed`

## 不変条件（例）
- Tag はユーザー内で同名不可（`(user_id, name)` 一意）
- NoteTag は `(note_id, tag_id)` 一意
- ShareToken は失効/取り消し後に公開閲覧できない

## 参照
- 物理DB: [[DD-DDL-001]]
- API: [[DD-API-001]]

## 変更履歴
- 2026-01-31: 初版
