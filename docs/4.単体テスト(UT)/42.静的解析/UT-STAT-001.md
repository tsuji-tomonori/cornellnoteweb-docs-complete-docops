---
id: UT-STAT-001
title: 静的解析方針（SpotBugs/PMD/フォーマット）
doc_type: 静的解析
phase: UT
version: 1.0.0
status: 承認
owner: QAリード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-DEV-001]]'
- '[[BD-BUILD-001]]'
- '[[DD-CODE-001]]'
related:
- '[[BD-BUILD-001]]'
tags:
- CornellNoteWeb
- UT
- STAT
---

## ツール
- Spotless（フォーマット）
- SpotBugs（バグパターン）
- PMD（コード規約）
- （将来）依存スキャン

## 合格基準
- CIで `./gradlew check` が成功すること
- High/Medium のSpotBugsが0（例）

## 変更履歴
- 2026-01-31: 初版
