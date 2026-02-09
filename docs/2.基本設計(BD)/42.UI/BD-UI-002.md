---
id: BD-UI-002
title: Cornell編集レイアウト
doc_type: UI（概要設計）
phase: BD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-GL-001]]'
- '[[RQ-UC-003]]'
down:
- '[[DD-UI-003]]'
related:
- '[[RQ-UX-001]]'
tags:
- CornellNoteWeb
- BD
- UI
---
# BD-UI-002 Cornell編集レイアウト

## レイアウト方針
- 画面は **Cue / Notes / Summary** の3領域を常に表示する。
- ノートのメタ情報（タイトル、ノートブック、タグ）はヘッダ/フッタ領域で操作する。
- 自動保存の状態を視覚的に表示する（保存中/保存済み/エラー）。

## ワイヤー（概略）
```mermaid
flowchart TB
  H[ヘッダ: 戻る / 保存状態 / 共有 / PDF / 削除] --> M
  M[メイン: Cornell Layout] --> F[フッタ: タグ編集]
  subgraph Cornell Layout
    C[Cue（キーワード/質問）]
    N[Notes（本文）]
    S[Summary（要約）]
    C --- N
    N --- S
  end
```

## 変更履歴
- 2026-01-31: 初版