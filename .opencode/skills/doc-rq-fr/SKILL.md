---
name: doc-rq-fr
description: RQ-FR（機能要求）ドキュメントを、規約どおりに新規作成/更新する。使う場面: RQ-FR の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: RQ-FR を規約どおりに新規作成/更新
---

## 目的
機能要求を SnowCard で定義し、設計・テストへトレーサブルにする。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- SnowCard（要求/根拠/受入基準/例外）
- 優先度は RFC 2119（`MUST` / `SHOULD` / `MAY`）で記載
- 優先度/境界/前提
- 関連UCへのリンク
- 失敗時の挙動（エラー）
- 同一PRのRDR（`RQ-RDR-*`）へのリンク

## 何を書かないべきか
- 設計の実装詳細（APIパスやDBカラム断定）
- 複数要求の抱き合わせ（粒度を保つ）
- 受入基準の欠落

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `FR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-UC / RQ-SC
- 下位（Backlink）: BD-API / BD-UI / DD-API / DD-UI / UT-CASE / IT-CASE / AT-SCN
- 関連（related）: RQ-SEC / RQ-UX / RQ-PS

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 要求の新規追加/意味変更時は RDR が同一PRにある
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存

## Workflow
1. 対象IDと依頼内容を確認する
2. 規約と本スキルの観点に沿って必要箇所を更新する
3. `updated` と `変更履歴` を更新し、`$obsidian-doc-check` で検証する

## Output contract
- 更新された `docs/**` のMarkdownファイル（必要最小限）
- 必要時の `reports/doc_check.md` と影響確認レポート
- 最終報告: 変更点、前提、未解決事項（あれば）
