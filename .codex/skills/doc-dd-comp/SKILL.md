---
name: doc-dd-comp
description: DD-COMP（コンポーネント）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-COMP を規約どおりに新規作成/更新
---

## 目的
コンポーネント詳細（責務、インターフェース、依存）を定義する。

## 何を書くべきか
- コンポーネント責務
- 依存関係図
- 入出力/イベント
- 例外/失敗時の扱い

## 何を書かないべきか
- コード断片の貼付け（最小限に）
- ビジネス要求の再掲
- 巨大な一覧

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `COMP`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-ARCH / BD-ADR
- 下位（Backlink）: DD-API / DD-UI / UT-CASE
- 関連（related）: DD-LOG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
