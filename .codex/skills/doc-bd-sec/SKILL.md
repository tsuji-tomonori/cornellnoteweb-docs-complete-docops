---
name: doc-bd-sec
description: BD-SEC（セキュリティ（設計））ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-SEC を規約どおりに新規作成/更新
---

## 目的
セキュリティの基本設計（境界、認証認可、脅威対策）を定義する。

## 何を書くべきか
- 脅威/資産/境界
- 認証/認可の方針
- 監査ログ/鍵管理
- セキュリティテスト観点

## 何を書かないべきか
- 鍵/トークンの実値
- 過度な一般論だけ
- 実装コード

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `SEC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SEC / RQ-PRC
- 下位（Backlink）: DD-LOG / DD-ERR / AT-RUN
- 関連（related）: BD-ARCH / BD-API

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
