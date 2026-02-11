---
name: doc-rq-gl
description: RQ-GL（用語）ドキュメントを、規約どおりに新規作成/更新する。使う場面: RQ-GL の新規作成、内容更新、リンク整合の修正依頼時。
metadata:
  short-description: RQ-GL を規約どおりに新規作成/更新
---

## 目的
用語を一意に定義し、ドキュメント間の表現ゆれを排除する（用語1件=1ファイル）。


## When to use me
- このスキルの対象ID種別（例: `RQ-FR-*`, `BD-API-*`）の新規作成・更新依頼がある
- 本文の記述観点、`up/related`、Frontmatter運用を規約どおりに整えたい

## When NOT to use me
- 対象種別が異なる（対応する `doc-*` スキルを使う）
- 実装コードの改修のみが目的で、ドキュメント更新が不要

## 何を書くべきか
- 用語
- 定義（1〜3文で）
- 同義語/禁止語（任意）
- 利用例（短い例）
- 関連用語（リンク）

## 何を書かないべきか
- 仕様の議論本文（FR/UCへ）
- 複数用語のまとめ
- 実装クラス名の列挙

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `GL`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（Backlink）: RQ-DM / RQ-UC / RQ-FR / BD-API / BD-UI
- 関連（related）: （なし）

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
