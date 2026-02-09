---
name: doc-bd-cm
description: BD-CM（構成管理）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-CM を規約どおりに新規作成/更新
---

## 目的
構成管理（設定、秘密情報、バージョン管理）の方針を定義する。

## 何を書くべきか
- 設定の分類（環境変数/設定ファイル）
- 秘密情報管理
- ブランチ/リリース管理（必要最小）
- 変更手順（簡潔）

## 何を書かないべきか
- 秘密値の実データ
- 運用細部の網羅
- ツールの決め打ち（必要ならADRへ）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `CM`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: BD-ENV / RQ-SEC
- 下位（down）: BD-DEP / BD-BUILD
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
