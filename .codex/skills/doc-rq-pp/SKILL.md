---
name: doc-rq-pp
description: RQ-PP（プロジェクトの目的）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-PP を規約どおりに新規作成/更新
---

## 目的
プロジェクトの目的（価値・成功条件）を、検証可能な形で定義する。

## 何を書くべきか
- 目的（何のために/誰に/何を提供するか）
- 成功条件（Fit Criterion：測定可能な条件）
- 主要な価値仮説と根拠
- スコープ（SC）との整合（境界の明確化）

## 何を書かないべきか
- 機能の詳細設計（API/DB/UIの具体）
- 実装方式の決め打ち
- 測定不能な表現のみ（例:『便利』）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `PP`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（down）: RQ-UC / RQ-FR / RQ-UX / AT-GUIDE
- 関連（related）: RQ-RDR

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
