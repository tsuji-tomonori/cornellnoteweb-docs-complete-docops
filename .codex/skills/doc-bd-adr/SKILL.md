---
name: doc-bd-adr
description: BD-ADR（ADR）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: BD-ADR を規約どおりに新規作成/更新
---

## 目的
アーキテクチャ上の意思決定を記録し、後続設計の一貫性を保つ。

## 何を書くべきか
- 課題/背景
- 意思決定
- 代替案
- 理由/トレードオフ
- 影響範囲（リンク）
- 起点となるRDR（`RQ-RDR-*`）へのリンク

## 何を書かないべきか
- 単なる議事録
- 根拠のない断定
- 要求や設計本文の重複

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `BD`, `ADR`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-RDR / RQ-SC
- 下位（Backlink）: BD-ARCH / BD-API / BD-UI / DD-COMP
- 関連（related）: RQ-SEC / RQ-PS

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 設計の新規追加/意味変更時は ADR が同一PRにある
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
