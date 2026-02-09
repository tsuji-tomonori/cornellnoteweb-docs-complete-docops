---
name: doc-dd-alg
description: DD-ALG（アルゴリズム）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-ALG を規約どおりに新規作成/更新
---

## 目的
アルゴリズムや計算ロジックを詳細化し、正しさと計算量を担保する。

## 何を書くべきか
- 入力/出力
- 手順（擬似コード）
- 計算量/制約
- エッジケース
- テスト観点

## 何を書かないべきか
- 実装言語特有の最適化
- 要件本文の再掲
- 説明のないコード

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `ALG`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-COMP
- 下位（Backlink）: UT-CASE
- 関連（related）: DD-PERF

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
