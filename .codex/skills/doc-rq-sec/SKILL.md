---
name: doc-rq-sec
description: RQ-SEC（非機能要求）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-SEC を規約どおりに新規作成/更新
---

## 目的
非機能要求（SEC）を SnowCard で定義し、設計と運用に落とす。

## 何を書くべきか
- SnowCard（要求/根拠/受入基準/例外）
- 測定指標（SLO/SLI相当や閾値）
- 設計・運用への影響（リンク）
- 監視/ログ/運用手順への要求（必要なら）

## 何を書かないべきか
- 『速い』『安全』だけの宣言
- 根拠のない数値
- 機密情報の記載（鍵/トークン等）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `SEC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（down）: BD-SEC / BD-MON / DD-PERF / AT-OPS / AT-RUN
- 関連（related）: BD-QUAL / BD-TST

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
