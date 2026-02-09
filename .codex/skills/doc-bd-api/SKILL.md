---
name: doc-bd-api
description: BD-API（API（概要設計））ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-API を規約どおりに新規作成/更新
---

## 目的
APIの基本設計（境界、責務、共通ルール）を定義する。

## 何を書くべきか
- API一覧（ただし巨大一覧は避け、1API/1ファイル）
- 認証/認可の方針
- エラー/リトライ/冪等性の方針
- 主要シーケンス

## 何を書かないべきか
- OpenAPI全文の貼付け
- 実装フレームワーク依存の手順
- UIの詳細

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `API`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-FR / RQ-SEC
- 下位（down）: DD-API / UT-CASE / IT-CASE
- 関連（related）: BD-ARCH

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
