---
name: doc-bd-build
description: BD-BUILD（ビルド）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-BUILD を規約どおりに新規作成/更新
---

## 目的
ビルド/CI の方針（成果物、品質ゲート）を定義する。

## 何を書くべきか
- ビルド成果物
- CIステップ（静的解析/テスト）
- 失敗時の扱い
- バージョニング

## 何を書かないべきか
- 特定CI製品の操作マニュアル
- 無関係なチュートリアル
- 秘密情報

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `BUILD`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-CM / BD-TST
- 下位（Backlink）: UT-PLAN / UT-STAT / UT-COV
- 関連（related）: BD-DEP

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
