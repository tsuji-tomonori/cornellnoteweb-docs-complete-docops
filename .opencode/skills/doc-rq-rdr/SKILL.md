---
name: doc-rq-rdr
description: RQ-RDR（要求決定記録）ドキュメントを、規約どおりに新規作成/更新する。使う場面: RQ-RDR の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: RQ-RDR を規約どおりに新規作成/更新
---

## 目的
要求の決定（変更/却下/採用）の記録を残し、後戻りのコストを下げる。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- 決定事項
- 背景/課題
- 選択肢
- 決定理由
- 影響範囲（リンク）
- 未決事項（TBD）
- 要求本文（FR/NFR/UC等）へのリンクを必須化
- 設計を伴う場合は対応ADR（`BD-ADR-*`）へのリンク

## 何を書かないべきか
- 議事録全文の貼り付け
- 要求本文の重複（FR/NFR/UCへ）
- 個人批評

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `RDR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SH / RQ-SC
- 下位（Backlink）: RQ-FR / BD-ADR / RQ-DG
- 関連（related）: RQ-RTM

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存

## Workflow
1. 対象IDと依頼内容を確認する
2. 規約と本スキルの観点に沿って必要箇所を更新する
3. `updated` と `変更履歴` を更新し、`$obsidian-doc-check` で検証する

## Output contract
- 更新された `docs/**` のMarkdownファイル（必要最小限）
- 必要時の `reports/doc_check.md` と影響確認レポート
- 最終報告: 変更点、前提、未解決事項（あれば）
