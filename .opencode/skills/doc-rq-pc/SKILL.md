---
name: doc-rq-pc
description: RQ-PC（プロジェクトの制約）ドキュメントを、規約どおりに新規作成/更新する。使う場面: RQ-PC の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: RQ-PC を規約どおりに新規作成/更新
---

## 目的
技術・運用・法務・納期などの制約を明示し、設計と要求の現実性を担保する。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- 制約内容（何ができない/しない）
- 根拠（契約/規制/リソース等）
- 影響（どの要求/設計に効くか）
- 回避策や緩和策（ある場合）
- 要求記述ルールに関わる制約では、SnowCardの必須記載項目を明文化する
- Frontmatter値運用に関わる制約では、`doc_type/phase/version/status/owner` の値ルールを明文化する
- `owner` は `RQ-SH-*` で定義された責務ロール限定であることを明記する
- 優先度は RFC 2119（`MUST` / `SHOULD` / `MAY`）を使用することを明記する
- コミットメッセージは Conventional Commits を使用することを明記する

## 何を書かないべきか
- 制約を『要望』として混ぜる
- 根拠のない禁止事項
- 設計詳細の羅列

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `PC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（Backlink）: BD-ADR / BD-SEC / BD-ENV
- 関連（related）: RQ-PRC / RQ-SEC

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
