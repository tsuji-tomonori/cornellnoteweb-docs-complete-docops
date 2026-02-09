---
name: doc-rq-dg
description: RQ-DG（ドキュメントガバナンス）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-DG を規約どおりに新規作成/更新
---

## 目的
ドキュメント更新フロー、レビュー、受入基準を定義し、運用品質を担保する。

## 何を書くべきか
- 変更提案→レビュー→承認の流れ
- Doneの定義（リンク整備含む）
- チェック項目（本文/Frontmatter/リンク）
- Dataview運用ルール

## 何を書かないべきか
- 個別要求の詳細（FRへ）
- ツールインストール手順の長文（必要最小）
- 静的RTMの手更新ルール

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `DG`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SH / RQ-SC
- 下位（down）: BD-ADR / BD-TST / AT-PLAN
- 関連（related）: RQ-RTM

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
