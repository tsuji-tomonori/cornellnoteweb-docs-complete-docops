---
id: RQ-DEV-001
title: DevOps要求（CI/CD・品質ゲート）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[BD-QUAL-001]]'
- '[[BD-SEC-001]]'
- '[[DD-PERF-001]]'
- '[[BD-BUILD-001]]'
- '[[BD-TST-001]]'
- '[[UT-COV-001]]'
- '[[UT-STAT-001]]'
- '[[UT-MET-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---
# RQ-DEV-001 DevOps要求（CI/CD・品質ゲート）

## 要求
- CIでビルド/テスト/静的解析が自動実行される
- カバレッジ閾値（例: 95%）を品質ゲートにする
- デプロイはIaCで再現可能である

## 受入基準
- Gradle check で品質ゲートを満たす（[[UT-COV-001]]）
- リリースチェックリストがある（[[AT-REL-001]]）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版