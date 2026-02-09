---
id: RQ-RDR-009
title: コミットメッセージをConventional Commitsへ統一
doc_type: 要求決定記録
phase: RQ
version: 1.0.1
status: 承認
owner: 開発リード
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-PC-009]]'
- '[[RQ-DG-001]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- コミットメッセージの粒度と表現が揺れており、履歴追跡コストが高い。

## 選択肢
- A: 自由形式を継続する
- B: Conventional Commits を標準化する

## 決定
- B を採用。

## 決定理由
- 変更種別を履歴から即時把握でき、リリースノートや分析へ再利用しやすい。

## 影響/フォローアップ
- `/.gitmessage` と `git-commit` スキルをConventional Commits前提で更新する。
- 制約文書（[[RQ-PC-009]]）と運用フロー（[[RQ-DG-001]]）へ反映する。
- コミットメッセージの `subject` と本文は日本語で統一する。

## 変更履歴
- 2026-02-09: 初版
- 2026-02-09: コミットメッセージ本文言語を日本語へ追記
