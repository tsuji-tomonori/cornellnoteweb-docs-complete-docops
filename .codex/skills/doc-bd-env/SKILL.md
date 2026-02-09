---
name: doc-bd-env
description: BD-ENV（環境）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-ENV を規約どおりに新規作成/更新
---

## 目的
環境（開発/検証/本番）と外部依存を定義する。

## 何を書くべきか
- 環境区分と目的
- 環境差分（設定/秘密情報）
- 依存サービス
- 最低限のセットアップ要件

## 何を書かないべきか
- 手順の長文化（必要最小）
- 秘密情報の記載
- 個別実装の説明

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `ENV`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-ARCH
- 下位（down）: BD-DEP / BD-MON
- 関連（related）: BD-CM / BD-BUILD

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
