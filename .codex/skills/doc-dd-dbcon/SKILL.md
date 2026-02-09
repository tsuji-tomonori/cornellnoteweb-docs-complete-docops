---
name: doc-dd-dbcon
description: DD-DBCON（DB制約）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-DBCON を規約どおりに新規作成/更新
---

## 目的
DB制約（整合性ルール）を整理し、データ品質を担保する。

## 何を書くべきか
- 制約一覧（ただし最小単位で分割）
- 制約の理由
- アプリ側検証との分担
- 違反時の扱い

## 何を書かないべきか
- 重複定義
- ビジネスルールの曖昧化
- 説明のない制約

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `DBCON`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: DD-DDL / RQ-DM
- 下位（down）: UT-CASE / IT-CASE
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
