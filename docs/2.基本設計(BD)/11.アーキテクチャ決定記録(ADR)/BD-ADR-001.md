---
id: BD-ADR-001
title: 技術スタック採用
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
- '[[RQ-PC-002]]'
- '[[RQ-PC-003]]'
- '[[RQ-PC-004]]'
- '[[RQ-PC-005]]'
- '[[RQ-PC-006]]'
- '[[RQ-RDR-002]]'
- '[[RQ-RDR-003]]'
- '[[RQ-RDR-004]]'
- '[[RQ-RDR-005]]'
- '[[RQ-RDR-006]]'
down:
- '[[BD-ARCH-001]]'
related:
- '[[RQ-PC-001]]'
- '[[BD-ARCH-002]]'
- '[[BD-API-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---
# BD-ADR-001 技術スタック採用

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
Cornellノート形式の作成/検索/共有/PDF出力を提供するWebアプリとして、APIとUIの一体実装、セッションベース認証、RDB中心の整合性管理が前提となる。

## Decision
- Java 21
- Spring Boot
- Thymeleaf
- PostgreSQL

## Consequences
- LTSサポートにより長期運用とセキュリティ更新が容易
- Spring Bootの標準構成で開発速度が向上
- SSRにより認証/CSRFの整合を保ちやすい
- RDB制約で整合性と検索最適化が行いやすい

## Alternatives
- Node.js + Express + React
- 別言語/別RDB

## References
- [[RQ-PC-001]]
- [[BD-ARCH-002]]
- [[BD-API-001]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）