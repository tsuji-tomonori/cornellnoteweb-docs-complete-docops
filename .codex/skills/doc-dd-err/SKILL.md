---
name: doc-dd-err
description: DD-ERR（エラーコード）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-ERR を規約どおりに新規作成/更新
---

## 目的
エラーコード体系とハンドリング方針を定義し、API/UI/運用の整合を取る。

## 何を書くべきか
- 体系（分類）
- 各コードの条件/メッセージ
- 利用者向け対応
- ログ/監視との連携
- テスト観点

## 何を書かないべきか
- 曖昧な『エラー』だけ
- 実装例の羅列
- 運用手順の重複

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `ERR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: DD-API / BD-API
- 下位（down）: UT-CASE / IT-CASE / AT-RUN
- 関連（related）: DD-LOG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
