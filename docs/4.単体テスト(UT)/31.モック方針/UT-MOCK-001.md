---
id: UT-MOCK-001
title: モック方針（外部I/F）
doc_type: モック方針
phase: UT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[UT-PLAN-001]]'
down: []
related:
- '[[BD-ADR-002]]'
tags:
- CornellNoteWeb
- UT
- MOCK
---
# UT-MOCK-001 モック方針（外部I/F）

## 方針
- Controllerの単体テストでは外部I/F（S3/SQS/メール）はモックする。
- Repositoryが絡む場合はH2 + DBRiderでテストデータを投入する。

## 対象例
- ExportService: 現行はスタブ（モック不要）
- 将来のS3/SQS連携: インターフェースを切ってサービス層で差し替える

## 変更履歴
- 2026-01-31: 初版