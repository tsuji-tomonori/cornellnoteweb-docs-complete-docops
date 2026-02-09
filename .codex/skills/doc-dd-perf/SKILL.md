---
name: doc-dd-perf
description: DD-PERF（性能）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-PERF を規約どおりに新規作成/更新
---

## 目的
品質特性（PERF）を詳細設計に落とし込む。

## 何を書くべきか
- 設計施策（キャッシュ/リトライ/分割等）
- 前提と限界
- 監視指標
- テスト観点

## 何を書かないべきか
- 根拠のない数値
- 実装の細部だけ
- 要求（NFR）との断絶

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `PERF`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-QUAL / RQ-PS / RQ-AV
- 下位（down）: UT-PLAN / IT-PLAN / BD-MON
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
