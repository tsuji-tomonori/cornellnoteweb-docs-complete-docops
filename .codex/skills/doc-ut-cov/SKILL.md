---
name: doc-ut-cov
description: UT-COV（カバレッジ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: UT-COV を規約どおりに新規作成/更新
---

## 目的
品質測定（カバレッジ/静的解析/メトリクス）の基準と報告を定義する。

## 何を書くべきか
- 測定指標と閾値
- 計測方法（概要）
- 例外扱い
- 結果の保存先

## 何を書かないべきか
- ツール依存の細かい操作
- 根拠のない目標

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `UT`, `COV`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（down）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
