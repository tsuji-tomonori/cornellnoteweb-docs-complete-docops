---
id: IT-PLAN-001
title: 結合テスト計画（API + DB）
doc_type: 結合テスト計画
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-TST-001]]'
- '[[IT-ENV-001]]'
down:
- '[[IT-CASE-001]]'
- '[[IT-CASE-002]]'
- '[[IT-CASE-003]]'
- '[[IT-TDAT-001]]'
- '[[IT-RST-001]]'
related:
- '[[BD-ENV-001]]'
tags:
- CornellNoteWeb
- IT
- PLAN
---
# IT-PLAN-001 結合テスト計画（API + DB）

## 目的
- コンテナ環境でAPI〜DBまでの統合動作を確認し、デプロイ前の重大欠陥を防ぐ。

## 環境
- docker-compose（[[IT-ENV-001]]）

## 対象
- 主要API（ノートCRUD、共有、エクスポート）
- DBマイグレーション適用
- 認証（セッション）

## 合格基準
- 主要シナリオがPASS（[[IT-CASE-001]] 等）
- 重大なインシデントが残っていない（[[IT-INC-001]]）

## 変更履歴
- 2026-01-31: 初版