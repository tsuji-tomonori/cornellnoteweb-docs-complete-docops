---
id: IT-TDAT-001
title: 結合テストデータ設計
doc_type: テストデータ設計
phase: IT
version: 1.0.0
status: 承認
owner: QAリード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[IT-PLAN-001]]'
related:
- '[[IT-ENV-002]]'
tags:
- CornellNoteWeb
- IT
- TDAT
---

## 方式
- 小規模: Seed APIで投入
- 大規模（性能）: SQLでバルク投入（将来）

## データ要件（例）
- ノートブック: 3件
- タグ: 10件
- ノート: 100件（プレビュー/タグ有無を混在）

## 変更履歴
- 2026-01-31: 初版
