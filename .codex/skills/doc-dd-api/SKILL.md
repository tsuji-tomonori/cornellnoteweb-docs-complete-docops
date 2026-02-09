---
name: doc-dd-api
description: DD-API（API詳細）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-API を規約どおりに新規作成/更新
---

## 目的
API詳細設計（エンドポイント単位）を定義し、テストに落とす。

## 何を書くべきか
- 入出力（JSON例）
- バリデーション
- エラーコード
- 認証認可
- シーケンス
- 性能/タイムアウト

## 何を書かないべきか
- UI実装の記述
- 不明確なエラー
- 仕様と異なる例の混在

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `API`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-API / RQ-FR / RQ-SEC
- 下位（down）: UT-CASE / IT-CASE / DD-ERR
- 関連（related）: DD-LOG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
