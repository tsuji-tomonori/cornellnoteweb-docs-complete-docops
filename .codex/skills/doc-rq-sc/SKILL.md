---
name: doc-rq-sc
description: RQ-SC（プロジェクトのスコープ）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-SC を規約どおりに新規作成/更新
---

## 目的
プロジェクトの範囲（In/Out）と境界条件を明確にし、要求の暴走を防ぐ。

## 何を書くべきか
- 対象ユーザー/ユースケースの範囲
- In Scope / Out of Scope
- 前提（Assumption）
- 依存（外部サービス/制約）
- スコープ変更の扱い（RDR/ADRへの記録方針）

## 何を書かないべきか
- 個別機能の仕様詳細（FRで扱う）
- 設計・実装の手段
- 組織内部の事情だけの説明（制約はPCへ）

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `SC`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-PP
- 下位（down）: RQ-UC / RQ-FR / BD-ARCH / AT-PLAN
- 関連（related）: RQ-PC / RQ-SH

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
