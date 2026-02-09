---
name: doc-rq-rdr
description: RQ-RDR（要求決定記録）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-RDR を規約どおりに新規作成/更新
---

## 目的
要求の決定（変更/却下/採用）の記録を残し、後戻りのコストを下げる。

## 何を書くべきか
- 決定事項
- 背景/課題
- 選択肢
- 決定理由
- 影響範囲（リンク）
- 未決事項（TBD）

## 何を書かないべきか
- 議事録全文の貼り付け
- 要求本文の重複（FR/NFR/UCへ）
- 個人批評

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `RDR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SH / RQ-SC
- 下位（down）: RQ-FR / BD-ADR / RQ-DG
- 関連（related）: RQ-RTM

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
