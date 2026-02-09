---
name: doc-it-env
description: IT-ENV（結合テスト環境）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: IT-ENV を規約どおりに新規作成/更新
---

## 目的
テストデータ/環境を定義し、再現性を担保する。

## 何を書くべきか
- データ設計（境界/異常）
- マスキング方針
- 作成/投入方法（必要最小）
- クリーンアップ

## 何を書かないべきか
- 本番データ
- 秘密情報
- 長すぎる操作手順

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `IT`, `ENV`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（down）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
