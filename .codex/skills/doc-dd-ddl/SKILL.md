---
name: doc-dd-ddl
description: DD-DDL（DDL）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-DDL を規約どおりに新規作成/更新
---

## 目的
DBスキーマのDDLを定義する（DDL1件=1ファイル）。

## 何を書くべきか
- テーブル/列/型
- 主キー/外部キー/ユニーク
- インデックス（必要なら）
- 根拠（性能/整合性）

## 何を書かないべきか
- 本番データ
- 説明のないDDL
- 要件本文の再掲

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `DDL`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-DATA / RQ-DM
- 下位（Backlink）: DD-DBCON / DD-MIG / UT-TDAT
- 関連（related）: DD-PERF

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
