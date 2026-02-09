---
name: doc-bd-tst
description: BD-TST（テスト戦略）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-TST を規約どおりに新規作成/更新
---

## 目的
テスト戦略（何をどこまでどう検証するか）を定義する。

## 何を書くべきか
- テストレベル分担（UT/IT/AT）
- 観点/範囲
- 環境/データ方針
- 自動化方針
- 完了条件

## 何を書かないべきか
- ケースの羅列（ケースは別）
- ツール操作手順
- 要求と無関係なテスト

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `TST`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-DG / RQ-FR
- 下位（down）: UT-PLAN / IT-PLAN / AT-PLAN
- 関連（related）: BD-BUILD

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
