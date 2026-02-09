---
id: AT-PLAN-001
title: 受入テスト計画
doc_type: 受入テスト計画
phase: AT
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
- '[[BD-TST-001]]'
related:
- '[[RQ-PP-001]]'
tags:
- CornellNoteWeb
- AT
- PLAN
---

## 目的
- 利用者価値（PP）とMust要求（FR/NFR）を満たしていることを最終確認する。

## 実施者
- プロダクトオーナー
- 代表ユーザー
- 運用/セキュリティ担当

## 対象
- 主要シナリオ（ログイン→作成→復習、共有、エクスポート）
- 非機能（最低限のSEC/UX/OBY）

## 合格基準
- Must要求が全て合格（例: [[RQ-FR-004]]、[[RQ-SEC-001]]）
- 既知ギャップは合意済みで、リリース判定（[[AT-GO-001]]）に反映されている

## 変更履歴
- 2026-01-31: 初版
