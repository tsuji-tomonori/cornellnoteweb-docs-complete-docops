---
id: IT-CASE-001
title: ノート作成→取得→更新→削除（API+DB）
doc_type: 結合テストケース
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[IT-PLAN-001]]'
- '[[DD-API-003]]'
down: []
related:
- '[[DD-API-003]]'
tags:
- CornellNoteWeb
- IT
- CASE
---
# IT-CASE-001 ノート作成→取得→更新→削除（API+DB）

## 前提
- docker compose up でapp/dbが起動している

## 手順（概略）
1.1 POST /api/notes
1.2 GET /api/notes/{id}
1.3 PUT /api/notes/{id}
1.4 DELETE /api/notes/{id}

## 受入基準
- 各APIが期待ステータスを返す
- DBのレコードが正しく増減する

## 変更履歴
- 2026-01-31: 初版