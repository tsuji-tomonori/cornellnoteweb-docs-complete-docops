---
id: AT-SCN-001
title: ログイン→ノート一覧→新規作成→再ログインで保持
doc_type: 受入テストシナリオ
phase: AT
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[AT-PLAN-001]]'
related:
- '[[RQ-FR-001]]'
tags:
- CornellNoteWeb
- AT
- SCN
---

## 手順
1. /signup で登録 or /login でログイン
2. /notes で一覧を確認
3. /editor で新規ノート作成（Cue/Notes/Summary入力）
4. ログアウト→再ログイン→ノートが保持されている

## 合格基準
- PP-001の成功条件を満たす
- FR-004が満たされる

## 関連
- 要求: [[RQ-PP-001]] / [[RQ-FR-004]] / [[RQ-SEC-001]] など

## 変更履歴
- 2026-01-31: 初版
