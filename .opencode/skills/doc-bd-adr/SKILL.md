---
name: doc-bd-adr
description: BD-ADR（ADR）ドキュメントを、規約どおりに新規作成/更新する。使う場面: BD-ADR の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: BD-ADR を規約どおりに新規作成/更新
---

## 目的
アーキテクチャ上の意思決定を記録し、後続設計の一貫性を保つ。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- 課題/背景
- 意思決定
- 代替案
- 理由/トレードオフ
- 影響範囲（リンク）
- 起点となるRDR（`RQ-RDR-*`）へのリンク

## 何を書かないべきか
- 単なる議事録
- 根拠のない断定
- 要求や設計本文の重複

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `ADR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-RDR / RQ-SC
- 下位（Backlink）: BD-ARCH / BD-API / BD-UI / DD-COMP
- 関連（related）: RQ-SEC / RQ-PS

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 設計の新規追加/意味変更時は ADR が同一PRにある
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存

## Workflow
1. 対象IDと依頼内容を確認する
2. 規約と本スキルの観点に沿って必要箇所を更新する
3. `updated` と `変更履歴` を更新し、`$obsidian-doc-check` で検証する

## Output contract
- 更新された `docs/**` のMarkdownファイル（必要最小限）
- 必要時の `reports/doc_check.md` と影響確認レポート
- 最終報告: 変更点、前提、未解決事項（あれば）
