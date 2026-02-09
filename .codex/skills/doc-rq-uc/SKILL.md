---
name: doc-rq-uc
description: RQ-UC（ユースケース）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-UC を規約どおりに新規作成/更新
---

## 目的
利用者の目的達成手順をユースケースとして定義し、FR/NFRへ落とし込む。

## 何を書くべきか
- アクター
- 事前条件/事後条件
- 基本フロー
- 代替/例外フロー
- 関連するFR/NFRへのリンク

## 何を書かないべきか
- UI設計の詳細（BD/DD-UIへ）
- 実装/DBの詳細
- 技術的処理手順だけの記述（利用者価値に寄せる）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `UC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC / RQ-PP
- 下位（down）: RQ-FR / BD-UI / BD-API / DD-API / UT-CASE / IT-CASE / AT-SCN
- 関連（related）: RQ-UX / RQ-SEC

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
