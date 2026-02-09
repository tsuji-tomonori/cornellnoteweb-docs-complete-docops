---
id: RQ-PS-001
title: 性能目標（P95レイテンシ）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
- '[[BD-QUAL-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---

## 要求
- ノート一覧取得: P95 < 500ms（limit=20）
- ノート取得: P95 < 300ms
- ノート更新: P95 < 500ms

## 受入基準
- 負荷試験で目標を満たす（[[DD-PERF-001]]）
- ボトルネック時の対処方針がある

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版
