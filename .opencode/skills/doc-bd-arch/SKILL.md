---
name: doc-bd-arch
description: BD-ARCH（アーキテクチャ概要（コンテキスト））ドキュメントを、規約どおりに新規作成/更新する。使う場面: BD-ARCH の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: BD-ARCH を規約どおりに新規作成/更新
---

## 目的
システム構造（コンテキスト/コンポーネント/主要フロー）を俯瞰し、詳細設計の土台を作る。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- コンテキスト図
- コンポーネント分割と責務
- 主要UCのフロー/シーケンス
- 外部依存/境界
- NFRとの関連

## 何を書かないべきか
- クラス/関数レベルの詳細
- 実装手順書
- 単一ベンダーの運用細部

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `ARCH`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-ADR / RQ-UC
- 下位（Backlink）: DD-COMP / DD-API / DD-UI / BD-DATA
- 関連（related）: BD-SEC / BD-QUAL

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
