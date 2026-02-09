---
id: RQ-PC-004
title: ドキュメントは Markdown + Mermaid
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
related:
- '[[RQ-SEC-001]]'
- '[[RQ-PRC-001]]'
tags:
- CornellNoteWeb
- RQ
- PC
---
# RQ-PC-004 ドキュメントは Markdown + Mermaid

## 制約内容
- 図（ER/アーキテクチャ/フロー/シーケンス）は Mermaid で表現する。
- Word/PowerPointなどバイナリ依存の仕様書は作らない。

## 根拠
- 差分管理とレビュー容易性のため。

## 影響
- 技術/運用の自由度が制限されるため、例外が必要な場合は [[RQ-RDR-001]]（要求決定記録）として残す。

## 変更履歴
- 2026-01-31: 初版