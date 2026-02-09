# obsidian-doc-check TEMPLATE

## 概要
- 対象スキル: `obsidian-doc-check`
- 目的: ドキュメント規約のチェックを行い、問題点をレポートします。

## 入力テンプレート
- 対象ドキュメントID:
- 変更種別: 新規作成 / 更新 / 廃止
- 変更の目的:
- 変更内容（要約）:
- 影響範囲（up/related/Backlink）:
- 決定記録: RDR / ADR（必要時）:

## Frontmatter確認
- `id/title/doc_type/phase/version/status/owner/created/updated/up/related/tags` を確認
- `version` は Semantic Versioning（通常はPATCH更新）
- `owner` は `RQ-SH-*` で定義済み責務ロール

## 本文更新ポイント
- 要求・設計・テストの意図が変わる箇所のみ最小差分で更新
- 必要なリンク（up/related）と変更履歴を追記

## 完了チェック
- `updated` と `## 変更履歴` を更新
- 影響範囲の確認/更新を実施
- 必要に応じて `$obsidian-doc-check` を実行
