---
id: UT-MET-001
title: 品質メトリクス（Mutation/複雑度）
doc_type: 品質メトリクス
phase: UT
version: 1.0.0
status: 下書き
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-DEV-001]]'
down: []
related:
- '[[BD-ADR-006]]'
tags:
- CornellNoteWeb
- UT
- MET
---
# UT-MET-001 品質メトリクス（Mutation/複雑度）

## メトリクス（例）
- Mutation score（PIT）: 70%以上
- 循環的複雑度: 閾値超過はリファクタ
- 重複: 低減（共通ヘルパ導入）

## 目的
- カバレッジだけでは見逃す「弱いテスト」を検知する。

## 変更履歴
- 2026-01-31: 初版