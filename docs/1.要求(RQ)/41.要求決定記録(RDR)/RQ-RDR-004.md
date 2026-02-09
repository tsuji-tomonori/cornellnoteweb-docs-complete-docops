---
id: RQ-RDR-004
title: トレーサビリティマトリックス（RTM）は静的に作らない
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
- Obsidianのリンク/Backlinkで辿れる
- 静的RTMは更新コストが高い

## 選択肢
- A: ExcelでRTMを維持
- B: Obsidianリンクで運用
- C: 両方維持

## 決定
- B を採用。

## 決定理由
- リンクが一次情報となり、Backlinkで自動的に追跡できる。必要に応じて自動生成で補う。

## 影響/フォローアップ
- リンク規約をレビュー基準に含める（[[RQ-DG-001]]）。
- 必要時はDataview等でビューを生成（[[RQ-RTM-001]]）。

## 変更履歴
- 2026-01-31: 初版
