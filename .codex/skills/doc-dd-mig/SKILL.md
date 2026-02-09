---
name: doc-dd-mig
description: DD-MIG（DB移行）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-MIG を規約どおりに新規作成/更新
---

## 目的
DB移行（スキーマ変更、データ移行、ロールバック）を定義する。

## 何を書くべきか
- 移行手順（概略）
- 後方互換方針
- データ変換
- ロールバック/検証

## 何を書かないべきか
- DB製品依存の操作手順の網羅
- 危険な破壊操作の無根拠
- 秘密情報

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `MIG`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: DD-DDL / BD-DEP
- 下位（Backlink）: AT-REL / AT-RCHK
- 関連（related）: IT-ENV

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
