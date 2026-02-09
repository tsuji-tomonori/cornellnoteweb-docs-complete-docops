---
id: DD-UI-002
title: ノート一覧画面（/notes）
doc_type: UI詳細
phase: DD
version: 1.0.0
status: 承認
owner: UX担当
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-UI-003]]'
- '[[DD-UI-001]]'
- '[[DD-ALG-001]]'
related:
- '[[DD-API-003]]'
- '[[DD-ALG-001]]'
tags:
- CornellNoteWeb
- DD
- UI
---

## 関連
- API: [[DD-API-003]]（GET /api/notes）
- アルゴリズム: [[DD-ALG-001]]（検索フィルタ）

## 主な要素
- 検索バー（タイトル/プレビューをクライアント側で絞り込み）
- ノートカード（タイトル、更新日、プレビュー、タグ）
- 新規ノートボタン（/editor?id=new）

## 例: 一覧カードの状態遷移
```mermaid
stateDiagram-v2
  [*] --> Loading
  Loading --> Loaded: API成功
  Loading --> Error: API失敗
  Loaded --> Empty: items=0
  Loaded --> Filtered: 検索入力
```

## 変更履歴
- 2026-01-31: 初版
