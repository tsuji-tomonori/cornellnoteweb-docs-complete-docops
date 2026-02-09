---
name: doc-rq-gl
description: RQ-GL（用語）ドキュメントを、規約どおりに新規作成/更新する
metadata:
  short-description: RQ-GL を規約どおりに新規作成/更新
---

## 目的
用語を一意に定義し、ドキュメント間の表現ゆれを排除する（用語1件=1ファイル）。

## 何を書くべきか
- 用語
- 定義（1〜3文で）
- 同義語/禁止語（任意）
- 利用例（短い例）
- 関連用語（リンク）

## 何を書かないべきか
- 仕様の議論本文（FR/UCへ）
- 複数用語のまとめ
- 実装クラス名の列挙

## Obsidian項目（本文ではなくFrontmatterで管理）
- `id/title/doc_type/phase/version/status/owner/created/updated`
- `up/down/related`（本文に「上位文書」「下位文書」セクションを作らない）
- `tags`（例: `RQ`, `GL`, `CornellNoteWeb`）

## 典型リンク（ドキュメント種別）
- 上位（up）: RQ-SC
- 下位（down）: RQ-DM / RQ-UC / RQ-FR / BD-API / BD-UI
- 関連（related）: （なし）

## 最低限の品質チェック
- 本文が「1トピック=1ファイル」になっている
- 図は Mermaid のみ
- `updated` と `## 変更履歴` を更新
- 最後に `$obsidian-doc-check` を実行して `reports/` に保存
