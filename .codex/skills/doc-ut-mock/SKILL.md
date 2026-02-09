---
name: doc-ut-mock
description: UT-MOCK（モック方針）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: UT-MOCK を規約どおりに新規作成/更新
---

## 目的
モック/スタブ方針を定義し、単体テストの独立性を担保する。

## 何を書くべきか
- モック対象と理由
- インターフェース
- データパターン
- 注意点

## 何を書かないべきか
- 実装コードの貼付け
- 外部依存の増殖

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `UT`, `MOCK`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（down）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
