---
name: doc-at-run
description: AT-RUN（障害対応手順書）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: AT-RUN を規約どおりに新規作成/更新
---

## 目的
受入・運用の手順/チェック/判定/ガイドを定義する（利用者/運用者が迷わない）。

## 何を書くべきか
- 目的
- 手順（箇条書き）
- 判定基準
- 注意点/ロールバック
- 関連リンク

## 何を書かないべきか
- 実装詳細
- ツール依存の長文化
- 機密情報

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `AT`, `RUN`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（Backlink）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
