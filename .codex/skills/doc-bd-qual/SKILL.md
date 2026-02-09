---
name: doc-bd-qual
description: BD-QUAL（品質特性）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-QUAL を規約どおりに新規作成/更新
---

## 目的
品質特性（性能/可用性/保守性等）の狙いと設計上の作戦を定義する。

## 何を書くべきか
- 品質特性ごとの目標/指標
- トレードオフ
- 設計施策（概略）
- テスト戦略との接続

## 何を書かないべきか
- 要求と無関係な最適化
- 根拠のない数値
- 実装の細部

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `QUAL`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-PS / RQ-AV / RQ-UX
- 下位（Backlink）: DD-PERF / DD-AV / BD-TST
- 関連（related）: BD-ARCH

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
