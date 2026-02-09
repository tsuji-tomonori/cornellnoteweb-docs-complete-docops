---
name: doc-bd-mon
description: BD-MON（監視）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-MON を規約どおりに新規作成/更新
---

## 目的
監視・可観測性の基本設計（何を測るか、どう検知するか）を定義する。

## 何を書くべきか
- 監視対象（指標/ログ）
- アラート方針
- ダッシュボード観点
- インシデント連携

## 何を書かないべきか
- 運用当番表
- 具体ツール手順の網羅
- 測定不能な目標

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `MON`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-OBY / RQ-AV / RQ-PS
- 下位（down）: AT-OPS / IT-INC / AT-RUN
- 関連（related）: DD-LOG

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
