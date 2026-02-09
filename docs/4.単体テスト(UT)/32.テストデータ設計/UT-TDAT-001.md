---
id: UT-TDAT-001
title: 単体テストデータ設計（DBRider）
doc_type: テストデータ設計
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-02-09
up:
- '[[UT-PLAN-001]]'
related:
- '[[DD-DDL-001]]'
tags:
- CornellNoteWeb
- UT
- TDAT
---

## 方式
- `src/test/resources/datasets/*.yml` をDBRiderで投入する。
- 期待値は `src/test/resources/expected/*.json` に置き、JsonUnitで比較する。

## 例
- note-delete.yml: notes の論理削除の前提データ
- notes-list-order.json: 一覧順序の期待値

## 変更履歴
- 2026-01-31: 初版
