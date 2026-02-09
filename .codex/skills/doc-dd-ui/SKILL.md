---
name: doc-dd-ui
description: DD-UI（UI詳細）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-UI を規約どおりに新規作成/更新
---

## 目的
UI詳細設計（画面/コンポーネント単位）を定義する。

## 何を書くべきか
- 画面レイアウト（テキスト+Mermaid）
- 状態管理
- 入力検証/エラー表示
- アクセシビリティ
- イベントとAPI呼び出し

## 何を書かないべきか
- 画像貼付け
- CSSの細部
- APIの断定（APIはAPI設計と同期）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `UI`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-UI / RQ-UC / RQ-UX
- 下位（down）: UT-CASE / AT-SCN
- 関連（related）: DD-API

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
