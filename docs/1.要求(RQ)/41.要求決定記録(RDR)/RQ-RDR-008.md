---
id: RQ-RDR-008
title: Frontmatter主要項目の値運用を標準化
doc_type: 要求決定記録
phase: RQ
version: 1.0.2
status: 承認
owner: プロダクトオーナー
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-PC-008]]'
- '[[RQ-DG-001]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- `doc_type/phase/version/status/owner` の値運用が暗黙知になっており、執筆者間で揺れが出るリスクがある。

## 選択肢
- A: 必須キーのみ定義し、値運用は各執筆者に委ねる
- B: 値の運用ルールを要求・skillsに明文化する

## 決定
- B を採用。

## 決定理由
- ドキュメント品質と検索性を安定化できる。
- レビュー観点が明確になり、差し戻しを減らせる。

## 影響/フォローアップ
- ルールを要求資料（[[RQ-PC-008]] / [[RQ-DG-001]]）とskillsに反映する。
- `owner` は `RQ-SH-*` で定義された責務ロールに限定する。
- `version` は Semantic Versioning 準拠で更新する。

## 変更履歴
- 2026-02-09: 初版
- 2026-02-09: ownerのSHロール限定ルールを追記
- 2026-02-09: versionのSemVer運用ルールを追記
