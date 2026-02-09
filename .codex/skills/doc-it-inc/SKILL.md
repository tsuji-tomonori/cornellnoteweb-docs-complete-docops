---
name: doc-it-inc
description: IT-INC（インシデントレポート）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: IT-INC を規約どおりに新規作成/更新
---

## 目的
インシデントの記録を残し、再発防止と運用改善に繋げる。

## 何を書くべきか
- 事象
- 影響
- 検知
- 原因（暫定/確定）
- 対応
- 再発防止
- 関連リンク

## 何を書かないべきか
- 個人攻撃
- 秘密情報の露出
- 推測だけの断定

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `IT`, `INC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（Backlink）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
