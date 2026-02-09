---
id: AT-SCN-003
title: '共有: 共有リンク発行→第三者閲覧→取り消し'
doc_type: 受入テストシナリオ
phase: AT
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[AT-PLAN-001]]'
- '[[DD-API-007]]'
down: []
related:
- '[[RQ-FR-001]]'
tags:
- CornellNoteWeb
- AT
- SCN
---
# AT-SCN-003 共有: 共有リンク発行→第三者閲覧→取り消し

## 手順
1. ノートから共有リンクを発行
2. 別ブラウザで /share?token=... を開く
3. 閲覧専用で表示される
4. リンクを取り消し、再度開くと閲覧できない

## 合格基準
- FR-014〜016が満たされる
- SEC/PRCの懸念が許容される

## 関連
- 要求: [[RQ-PP-001]] / [[RQ-FR-004]] / [[RQ-SEC-001]] など

## 変更履歴
- 2026-01-31: 初版