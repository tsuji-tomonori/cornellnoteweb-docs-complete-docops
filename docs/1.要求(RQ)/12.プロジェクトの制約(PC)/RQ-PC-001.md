---
id: RQ-PC-001
title: 技術スタック制約（Java/Spring/PostgreSQL）
doc_type: プロジェクトの制約
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[BD-ADR-001]]'
- '[[BD-ENV-001]]'
- '[[BD-ADR-002]]'
- '[[BD-ADR-003]]'
- '[[BD-ADR-004]]'
- '[[BD-ADR-005]]'
- '[[BD-ADR-006]]'
related:
- '[[RQ-SEC-001]]'
- '[[RQ-PRC-001]]'
tags:
- CornellNoteWeb
- RQ
- PC
---
# RQ-PC-001 技術スタック制約（Java/Spring/PostgreSQL）

## 制約内容
- バックエンドは Java 21 + Spring Boot 3 系で実装する。
- DBは PostgreSQL を正とする。
- SQLマイグレーションは migrations/ を単一の真実とする（dbmate相当）。

## 根拠
- 既存資産（CornellNoteWeb）の前提に合わせ、学習コストと運用実績を活かすため。

## 影響
- 技術/運用の自由度が制限されるため、例外が必要な場合は [[RQ-RDR-001]]（要求決定記録）として残す。

## 変更履歴
- 2026-01-31: 初版