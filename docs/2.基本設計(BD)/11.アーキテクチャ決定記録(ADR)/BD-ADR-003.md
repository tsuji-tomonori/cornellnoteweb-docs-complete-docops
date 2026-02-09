---
id: BD-ADR-003
title: データ保管戦略（RDB + Object Storage）
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PC-001]]'
- '[[RQ-RDR-001]]'
down:
- '[[BD-ARCH-001]]'
related:
- '[[BD-DATA-001]]'
- '[[DD-MIG-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---
# BD-ADR-003 データ保管戦略（RDB + Object Storage）

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
ノート本文/キュー/サマリやPDFはサイズ増加が見込まれる。RDBに全格納すると性能・コスト面で不利になりうる。一方でメタデータ整合性は厳密に必要。

## Decision
- メタデータ（User/Note/Tag/ShareToken/ExportJob）はPostgreSQLに保持
- 本文/キュー/サマリ/PDFはObject Storage（例: S3）に保存し、RDBは参照（ref）を保持

## Consequences
- 大容量データをS3で安価に保管できる
- 参照不整合・削除連携の運用が必要
- ※現行実装は本文もRDBに格納しているため、将来移行の設計が必要

## Alternatives
- すべてRDBに格納
- すべてObject Storageに格納して検索は外部検索へ

## References
- [[BD-DATA-001]]
- [[DD-MIG-001]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）