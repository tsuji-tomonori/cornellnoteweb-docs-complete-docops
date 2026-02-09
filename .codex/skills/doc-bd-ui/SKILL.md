---
name: doc-bd-ui
description: BD-UI（UI（概要設計））ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-UI を規約どおりに新規作成/更新
---

## 目的
UIの基本設計（画面責務、遷移、共通コンポーネント）を定義する。

## 何を書くべきか
- 画面責務（1画面=1ファイル）
- 遷移/状態（Mermaid）
- 入力検証/エラー表示方針
- アクセシビリティ/UX基準

## 何を書かないべきか
- 画像貼付け
- CSS実装詳細
- APIの細部

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `UI`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-UC / RQ-UX
- 下位（Backlink）: DD-UI / AT-SCN
- 関連（related）: BD-API

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
