---
name: doc-bd-data
description: BD-DATA（データアーキテクチャ（方針））ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-DATA を規約どおりに新規作成/更新
---

## 目的
データアーキテクチャ（論理モデル、整合性、保持方針）を定義する。

## 何を書くべきか
- データモデル（Mermaid ER）
- 主要エンティティ/関連
- 整合性/保持/削除方針
- アクセスパターン（概略）

## 何を書かないべきか
- DDLの全文（DD-DDLへ）
- 画面仕様の説明
- 個人情報の実データ

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `DATA`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-DM / RQ-DATA
- 下位（Backlink）: DD-DDL / DD-DBCON / DD-MIG
- 関連（related）: RQ-PRC

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
