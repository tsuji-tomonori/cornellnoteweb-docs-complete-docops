---
id: IT-CASE-003
title: 性能サニティ（P95目標の確認）
doc_type: 結合テストケース
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[IT-PLAN-001]]'
- '[[DD-PERF-001]]'
down: []
related:
- '[[DD-API-003]]'
tags:
- CornellNoteWeb
- IT
- CASE
---
# IT-CASE-003 性能サニティ（P95目標の確認）

## 前提
- テストデータが100件程度ある

## 手順（概略）
1.1 GET /api/notes を一定回数呼ぶ

## 受入基準
- P95が目標を大きく超えない（[[RQ-PS-001]]）

## 変更履歴
- 2026-01-31: 初版