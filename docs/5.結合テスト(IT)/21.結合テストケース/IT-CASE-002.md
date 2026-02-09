---
id: IT-CASE-002
title: 共有リンク発行→第三者閲覧→取り消し
doc_type: 結合テストケース
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-02-09
up:
- '[[IT-PLAN-001]]'
related:
- '[[DD-API-003]]'
tags:
- CornellNoteWeb
- IT
- CASE
---

## 前提
- ノートが存在する

## 手順（概略）
1.1 POST /api/notes/{id}/share
1.2 GET /api/share/{token}
1.3 DELETE /api/share/{token}

## 受入基準
- 閲覧専用で取得できる
- 取り消し後は取得不可（404相当）

## 変更履歴
- 2026-01-31: 初版
