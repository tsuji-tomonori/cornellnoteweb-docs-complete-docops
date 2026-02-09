---
name: doc-rq-dm
description: RQ-DM（ドメインモデル）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-DM を規約どおりに新規作成/更新
---

## 目的
ドメイン概念と関係をモデル化し、要求・設計・データ設計の共通言語にする。

## 何を書くべきか
- 主要概念（エンティティ/値オブジェクト）
- 関係（集約/関連/ライフサイクル）
- ビジネスルール（要約）
- 図（Mermaid：クラス図/ER図など）

## 何を書かないべきか
- DBテーブルの実装詳細（DDLへ）
- UI画面の都合による概念増殖
- システム構成の話（BDへ）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `DM`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-GL / RQ-SC
- 下位（down）: BD-DATA / DD-DDL / DD-DBCON
- 関連（related）: RQ-DATA

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
