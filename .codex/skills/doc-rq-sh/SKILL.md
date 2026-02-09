---
name: doc-rq-sh
description: RQ-SH（ステークホルダー）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-SH を規約どおりに新規作成/更新
---

## 目的
ステークホルダーの期待・責務・影響を整理し、意思決定と合意形成を支える。

## 何を書くべきか
- 関係者（役割/関心/権限）
- 期待/懸念/成功条件
- 意思決定者と承認フロー
- コミュニケーションの頻度/手段（必要最小）

## 何を書かないべきか
- 個人情報の過剰記載
- 組織の内部評価・批評
- 要求本文の代替（要求はFR/NFRへ）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `SH`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（down）: RQ-RDR / RQ-FR / RQ-DG
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
