---
name: doc-rq-pc
description: RQ-PC（プロジェクトの制約）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-PC を規約どおりに新規作成/更新
---

## 目的
技術・運用・法務・納期などの制約を明示し、設計と要求の現実性を担保する。

## 何を書くべきか
- 制約内容（何ができない/しない）
- 根拠（契約/規制/リソース等）
- 影響（どの要求/設計に効くか）
- 回避策や緩和策（ある場合）

## 何を書かないべきか
- 制約を『要望』として混ぜる
- 根拠のない禁止事項
- 設計詳細の羅列

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `PC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（down）: BD-ADR / BD-SEC / BD-ENV
- 関連（related）: RQ-PRC / RQ-SEC

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
