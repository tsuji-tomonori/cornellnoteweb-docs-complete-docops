---
id: RQ-PC-008
title: Frontmatter主要項目の値運用ルール
doc_type: プロジェクトの制約
phase: RQ
version: 1.0.2
status: 承認
owner: プロダクトオーナー
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-DG-001]]'
- '[[RQ-RDR-008]]'
- '[[RQ-SH-002]]'
tags:
- CornellNoteWeb
- RQ
- PC
---

## 制約内容
- `doc_type`: ドキュメントの役割名を記載し、同種別で表記ゆれを作らない。
- `phase`: `RQ/BD/DD/UT/IT/AT` のいずれかを使用し、ID prefix と一致させる。
- `version`: Semantic Versioning（`MAJOR.MINOR.PATCH`）で管理し、意味変更時は `PATCH` を更新する。
- `status`: `下書き` または `承認` を使用し、無効化時のみ `廃止` を使用する。
- `owner`: `RQ-SH-*` で定義された責務ロールのみを記載する（未定義ロールは先にSHへ追加）。

## 根拠
- Frontmatterの値運用を固定することで、レビュー/検索/Dataview集計の一貫性を保つため。

## 影響
- 新規作成時だけでなく更新時にもFrontmatter値の妥当性確認が必要になる。
- 例外が必要な場合は [[RQ-RDR-008]] に決定記録を残す。

## 変更履歴
- 2026-02-09: 初版
- 2026-02-09: ownerをSH定義ロール限定へ更新
- 2026-02-09: version運用をSemantic Versioning準拠と明記
