---
name: doc-bd-arch
description: BD-ARCH（アーキテクチャ概要（コンテキスト））ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-ARCH を規約どおりに新規作成/更新
---

## 目的
システム構造（コンテキスト/コンポーネント/主要フロー）を俯瞰し、詳細設計の土台を作る。

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
