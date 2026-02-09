---
id: UT-PLAN-001
title: 単体テスト計画
doc_type: 単体テスト計画
phase: UT
version: 1.0.0
status: 承認
owner: QAリード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-TST-001]]'
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
related:
- '[[BD-BUILD-001]]'
tags:
- CornellNoteWeb
- UT
- PLAN
---

## 目的
- Controller/Serviceのロジックとエラー処理を高速に検証し、回帰を防ぐ。

## 対象
- `*ControllerTest.java`（MockMvc）
- Repository + H2（必要に応じて）
- バリデーション/例外ハンドリング

## ツール
- JUnit 5
- Spring Boot Test / MockMvc
- Database Rider（YAMLデータセット）
- JsonUnit（JSON比較）
- JaCoCo（カバレッジ）
- PIT（Mutation）

## 合格基準
- 主要Controllerの正常系/異常系が網羅される
- カバレッジ閾値を満たす（[[UT-COV-001]]）
- 静的解析で重大指摘がない（[[UT-STAT-001]]）

## 変更履歴
- 2026-01-31: 初版
