---
name: doc-at-scn
description: AT-SCN（受入テストシナリオ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: AT-SCN を規約どおりに新規作成/更新
---

## 目的
ATのテストケース/シナリオを、再現可能な手順と期待結果で定義する（1ケース=1ファイル）。

## 何を書くべきか
- 前提
- 手順
- 期待結果
- 判定基準
- 関連要求/設計へのリンク

## 何を書かないべきか
- 『確認する』だけ
- 複数ケースの抱き合わせ
- 機密データ

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `AT`, `SCN`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（Backlink）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
