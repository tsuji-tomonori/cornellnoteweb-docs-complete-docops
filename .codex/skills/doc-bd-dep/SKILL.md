---
name: doc-bd-dep
description: BD-DEP（デプロイ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-DEP を規約どおりに新規作成/更新
---

## 目的
デプロイの方針（手順、ロールバック、環境差分）を定義する。

## 何を書くべきか
- 配信方式（手動/自動の方針）
- ロールバック/カナリア等の考え
- 権限/監査
- リリース判定との接続

## 何を書かないべきか
- ツール操作の逐語手順（配信手順書へ）
- 秘密値
- 無関係なCI詳細

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `DEP`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-ENV / BD-BUILD
- 下位（Backlink）: AT-REL / AT-RCHK / AT-GO
- 関連（related）: AT-PLAN

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
