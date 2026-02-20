---
id: DD-REV-001
title: レビュー規約（PR/Docs）
doc_type: レビュー規約
phase: DD
version: 1.0.1
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-DG-001]]'
- '[[BD-CM-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- DD
- REVIEW
---

## PRレビュー観点（コード）
- 仕様との整合: 関連ドキュメント（FR/UC/API/DDL）リンクがある
- テスト: 追加/更新がある（UT/IT/E2E）
- セキュリティ: Secretsをコミットしていない、入力検証がある
- 可読性: レイヤ責務が守られている

## Docsレビュー観点
- ファイル名=ID、Frontmatter（up/related）がある
- `up` と Backlink で要求-設計-テストの経路が辿れる
- Mermaidがレンダリング可能
- 1ファイル1トピック（粒度）
- 既知ギャップは [[DD-ERR-001]] にリンク

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: ドキュメントレビュー基準を up/related 前提へ更新
