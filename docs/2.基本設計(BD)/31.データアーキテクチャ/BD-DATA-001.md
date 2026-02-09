---
id: BD-DATA-001
title: データ設計方針（RDB中心）
doc_type: データアーキテクチャ（方針）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-DM-001]]'
down:
- '[[DD-DDL-001]]'
related:
- '[[BD-ERD-001]]'
- '[[BD-ADR-003]]'
tags:
- CornellNoteWeb
- BD
- DATA
---
# BD-DATA-001 データ設計方針（RDB中心）

## 方針
- 参照整合性は外部キーで担保する。
- 検索/一覧の性能はインデックスで担保し、必要に応じて全文検索（将来）を検討する。
- 本文の保管先は段階的に拡張できるよう、`*_ref` を設計上の抽象として残す（[[BD-ADR-003]]）。

## 既知ギャップ
- migrations では Note.status の値制約が `draft/active/archived` だが、現行API実装は `deleted` を使用している箇所がある。修正方針は [[DD-ERR-001]] で管理する。

## 変更履歴
- 2026-01-31: 初版