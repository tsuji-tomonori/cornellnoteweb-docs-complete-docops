---
name: doc-dd-cost
description: DD-COST（拡張性）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-COST を規約どおりに新規作成/更新
---

## 目的
詳細設計ドキュメントを定義する。

## 何を書くべきか
- 詳細仕様
- テストに落ちる基準

## 何を書かないべきか
- 要件再掲

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `COST`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: （なし）
- 下位（Backlink）: （なし）
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
