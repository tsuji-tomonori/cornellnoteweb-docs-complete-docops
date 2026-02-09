---
id: DD-PERF-001
title: 性能設計・性能試験計画
doc_type: 性能
phase: DD
version: 1.0.0
status: 下書き
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PS-001]]'
- '[[RQ-AV-001]]'
- '[[RQ-SEC-001]]'
- '[[RQ-PRC-001]]'
- '[[RQ-OBY-001]]'
- '[[RQ-DEV-001]]'
- '[[RQ-INT-001]]'
- '[[RQ-COST-001]]'
- '[[RQ-UX-001]]'
- '[[RQ-DATA-001]]'
down:
- '[[IT-CASE-003]]'
related:
- '[[DD-API-003]]'
tags:
- CornellNoteWeb
- DD
- PERF
---
# DD-PERF-001 性能設計・性能試験計画

## 対象API（MVP）
- GET /api/notes（一覧）
- GET /api/notes/{id}（取得）
- PUT /api/notes/{id}（更新）

## 想定負荷
- 同時利用: 50（stg）
- ノート件数: 1ユーザーあたり 1,000件（将来）
- 1ノートの本文: 2KB〜20KB

## ボトルネック仮説
- 一覧取得のN+1（タグJOIN）
- DBインデックス不足
- 大きい本文の返却（一覧はプレビューのみ推奨）

## 試験方法（案）
- k6/JMeter等でAPI負荷
- DBメトリクス（CPU/IO/接続数）を同時観測
- P95の計測と閾値比較

## 改善施策（例）
- 一覧はプレビューのみ返す（本文は詳細取得）
- インデックス追加、ページング必須化
- 将来: 本文をS3へ、検索は外部検索へ（[[BD-ADR-003]]）

## 変更履歴
- 2026-01-31: 初版