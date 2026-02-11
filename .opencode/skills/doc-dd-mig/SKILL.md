---
name: doc-dd-mig
description: DD-MIG（DB移行）ドキュメントを、規約どおりに新規作成/更新する。使う場面: DD-MIG の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: DD-MIG を規約どおりに新規作成/更新
---

## 目的
DB移行（スキーマ変更、データ移行、ロールバック）を定義する。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- 移行手順（概略）
- 後方互換方針
- データ変換
- ロールバック/検証

## 何を書かないべきか
- DB製品依存の操作手順の網羅
- 危険な破壊操作の無根拠
- 秘密情報

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `MIG`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: DD-DDL / BD-DEP
- 下位（Backlink）: AT-REL / AT-RCHK
- 関連（related）: IT-ENV

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
