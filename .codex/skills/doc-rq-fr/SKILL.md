---
name: doc-rq-fr
description: RQ-FR（機能要求）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-FR を規約どおりに新規作成/更新
---

## 目的
機能要求を SnowCard で定義し、設計・テストへトレーサブルにする。

## 何を書くべきか
- SnowCard（要求/根拠/受入基準/例外）
- 優先度/境界/前提
- 関連UCへのリンク
- 失敗時の挙動（エラー）
- 同一PRのRDR（`RQ-RDR-*`）へのリンク

## 何を書かないべきか
- 設計の実装詳細（APIパスやDBカラム断定）
- 複数要求の抱き合わせ（粒度を保つ）
- 受入基準の欠落

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `FR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-UC / RQ-SC
- 下位（Backlink）: BD-API / BD-UI / DD-API / DD-UI / UT-CASE / IT-CASE / AT-SCN
- 関連（related）: RQ-SEC / RQ-UX / RQ-PS

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 要求の新規追加/意味変更時は RDR が同一PRにある
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
