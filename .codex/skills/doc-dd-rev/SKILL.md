---
name: doc-dd-rev
description: DD-REV（レビュー規約）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-REV を規約どおりに新規作成/更新
---

## 目的
開発規約（REV）を定義し、品質と一貫性を担保する。

## 何を書くべきか
- 適用範囲
- ルール（要点）
- 例外
- レビュー観点
- 自動化（静的解析等）

## 何を書かないべきか
- 環境依存の手順の網羅
- 個人批評
- プロジェクト外一般論の長文

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `REV`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-BUILD / BD-CM
- 下位（down）: UT-STAT / UT-MET
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
