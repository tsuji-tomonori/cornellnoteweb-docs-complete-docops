---
id: DD-API-001
title: API詳細（総論）
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-API-001]]'
- '[[RQ-UC-001]]'
- '[[RQ-UC-002]]'
- '[[RQ-UC-003]]'
- '[[RQ-UC-004]]'
- '[[RQ-UC-005]]'
- '[[RQ-UC-006]]'
- '[[RQ-UC-007]]'
- '[[RQ-UC-008]]'
- '[[RQ-FR-001]]'
- '[[RQ-FR-002]]'
- '[[RQ-FR-003]]'
- '[[RQ-FR-004]]'
- '[[RQ-FR-005]]'
- '[[RQ-FR-006]]'
- '[[RQ-FR-007]]'
- '[[RQ-FR-008]]'
- '[[RQ-FR-009]]'
- '[[RQ-FR-010]]'
- '[[RQ-FR-011]]'
- '[[RQ-FR-012]]'
- '[[RQ-FR-013]]'
- '[[RQ-FR-014]]'
- '[[RQ-FR-015]]'
- '[[RQ-FR-016]]'
- '[[RQ-FR-017]]'
- '[[RQ-FR-018]]'
- '[[RQ-RTM-001]]'
- '[[DD-COMP-001]]'
down:
- '[[DD-API-002]]'
- '[[DD-API-003]]'
related:
- '[[BD-API-003]]'
tags:
- CornellNoteWeb
- DD
- API
---
# DD-API-001 API詳細（総論）

## 共通
- Content-Type: `application/json`
- 文字コード: UTF-8
- 時刻: ISO 8601（例: `2025-01-15T01:00:00Z`）
- ID: UUID

## エラー
- 統一フォーマットは [[BD-API-003]] を参照。
- 現行実装では一部が簡易（null返却）になっている箇所があるため、改善方針は [[DD-ERR-001]] で管理。

## 認証
- Notebook/Tag API は `SessionUserIdResolver` によりサーバセッション必須。
- Note API は現行MVPではサーバ側のユーザー分離が未実装（既知ギャップ）。将来はユーザーIDでフィルタする。

## 変更履歴
- 2026-01-31: 初版