---
id: RQ-RTM-001
title: Obsidianリンクでのトレーサビリティ運用
doc_type: トレーサビリティ
phase: RQ
version: 1.0.1
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-DG-001]]'
tags:
- Obsidian
- RQ
- RTM
---

## 結論（確認）
- **要求トレーサビリティマトリックス（静的RTM）は必須ではありません。**
- 本リポジトリでは、各ドキュメントが `up/related` を持つことで、Obsidianの **Backlink** と **検索** によりトレーサビリティを担保します。

## 運用ルール（必須）
1. **ファイル名＝ID**（例: `RQ-FR-004.md`）
2. Frontmatter の `up/related` を必ず記載
3. 一覧は作らない（READMEでリンクを集約するのはOK）

## たどり方（実例）
- 例: 新規ノート作成
  - 目的: [[RQ-PP-001]]
  - スコープ: [[RQ-SC-001]]
  - UC: [[RQ-UC-002]]
  - FR: [[RQ-FR-004]]
  - 設計: [[DD-API-003]] / [[BD-UI-002]] / [[DD-DDL-003]]
  - テスト: [[UT-CASE-002]] / [[IT-CASE-001]] / [[AT-SCN-002]]

## 「マトリックスが欲しい」場合（任意）
- Obsidian Dataview を使うと **自動生成**できます（手更新の静的RTMは避ける）。
- 例（Dataviewの擬似例）:

```dataview
TABLE file.name as "ID", up as "上位", related as "関連"
FROM "docs"
WHERE contains(phase, "RQ")
SORT file.name ASC
```

## 点検（レビュー時）
- レビューでは、対象ドキュメントのBacklink数が不自然に少ない/多い場合にリンク漏れを疑う。
- Doneの定義に「リンク整備」を含める（[[RQ-DG-001]]）。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: トレーサビリティ規約を up/related 前提に更新
