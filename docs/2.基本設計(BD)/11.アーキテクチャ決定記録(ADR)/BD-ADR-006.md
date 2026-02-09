---
id: BD-ADR-006
title: 非機能運用方針（SLO/セキュリティ/CIゲート）
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
- '[[RQ-AV-001]]'
- '[[RQ-DEV-001]]'
- '[[UT-STAT-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---
# BD-ADR-006 非機能運用方針（SLO/セキュリティ/CIゲート）

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
可用性/性能/セキュリティ/監視/品質ゲートを継続的に維持するための運用方針が必要。

## Decision
- SLO/SLIを定義し監視とアラートを運用に組み込む
- セキュリティ統制（IAM/暗号/脆弱性管理）を標準化
- CIで静的解析/依存スキャン/主要テストを必須ゲート化

## Consequences
- 品質とセキュリティを継続的に担保できる
- 初期設定コストが増える

## Alternatives
- 手動レビュー中心
- 監視は最低限に抑える

## References
- [[RQ-AV-001]]
- [[RQ-DEV-001]]
- [[UT-STAT-001]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）