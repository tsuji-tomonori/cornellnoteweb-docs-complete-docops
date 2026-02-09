---
name: doc-at-plan
description: AT-PLAN（受入テスト計画）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: AT-PLAN を規約どおりに新規作成/更新
---

## 目的
ATの計画を定義し、範囲/観点/環境/完了条件を明確にする。

## 何を書くべきか
- 目的と範囲
- テスト観点
- 環境/データ方針
- 実施手順（概略）
- 完了条件/レポート

## 何を書かないべきか
- ケースの羅列（CASEへ）
- ツール操作マニュアル
- 要求と無関係なテスト

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `AT`, `PLAN`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / DD-API / BD-TST
- 下位（Backlink）: （なし）
- 関連（related）: RQ-DG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
