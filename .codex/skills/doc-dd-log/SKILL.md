---
name: doc-dd-log
description: DD-LOG（ログ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: DD-LOG を規約どおりに新規作成/更新
---

## 目的
ログの方針（構造、粒度、相関、PII）を定義する。

## 何を書くべきか
- ログ種別（監査/業務/障害）
- フィールド（相関ID等）
- PIIの扱い
- 保存/回転
- 利用例

## 何を書かないべきか
- 秘密値/個人情報の実値
- ログを万能化（不要な大量出力）
- 監視ツール依存の操作手順

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `DD`, `LOG`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-MON / BD-SEC
- 下位（Backlink）: AT-RUN / IT-INC
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
