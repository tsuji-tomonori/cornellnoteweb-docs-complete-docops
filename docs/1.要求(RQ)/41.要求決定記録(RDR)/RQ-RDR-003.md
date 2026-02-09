---
id: RQ-RDR-003
title: ノートの本文は3フィールド（Cue/Notes/Summary）で保持する
doc_type: 要求決定記録
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- Cornell形式を崩さずUI/検索/出力ができる
- リッチテキストは将来拡張とする

## 選択肢
- A: 1本文にMarkdownで格納
- B: 3フィールド（Cornell固定）
- C: ブロック構造（Notion風）

## 決定
- B を採用。

## 決定理由
- MVPの価値（Cornell体験）を最短で実現でき、データモデルも単純。

## 影響/フォローアップ
- 将来Cへ移行する場合はマイグレーションが必要（[[DD-MIG-001]]）。
- ERD/DDLに反映（[[BD-ERD-001]] / [[DD-DDL-003]]）。

## 変更履歴
- 2026-01-31: 初版
