---
name: doc-rq-rtm
description: RQ-RTM（トレーサビリティ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-RTM を規約どおりに新規作成/更新
---

## 目的
ObsidianリンクとDataviewを前提に、トレーサビリティの方針と可視化方法を定義する。

## 何を書くべきか
- リンク規約（up/down/related）
- Dataviewクエリ例
- レビュー時の点検観点
- レポート出力方針（reports/）

## 何を書かないべきか
- 手更新の巨大表
- 一覧の固定化
- リンクのないドキュメント増殖

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `RTM`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-DG / RQ-SC
- 下位（down）: obsidian-trace（スキル）
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
