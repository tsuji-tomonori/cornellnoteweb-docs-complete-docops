---
name: doc-it-rst
description: IT-RST（結合テスト結果）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: IT-RST を規約どおりに新規作成/更新
---

## 目的
テスト結果/レポートを記録し、逸脱と残課題を可視化する。

## 何を書くべきか
- 実施範囲
- 結果サマリ
- 失敗の詳細
- 修正/再試験の状況
- 残課題

## 何を書かないべきか
- ログの大量貼付け（要点に絞る）
- 個人批評
- 原因不明の放置

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `IT`, `RST`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（down）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
