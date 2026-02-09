---
id: IT-RST-001
title: 結合テスト結果（サンプル）
doc_type: 結合テスト結果
phase: IT
version: 1.0.0
status: 下書き
owner: QAリード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[IT-PLAN-001]]'
- '[[DD-ERR-001]]'
related:
- '[[DD-ERR-001]]'
tags:
- CornellNoteWeb
- IT
- RESULT
---

## 実行結果（例）
- 実行日: 2026-01-31
- 環境: [[IT-ENV-001]]
- 結果: 一部NG（既知ギャップ）

## 主要結果
- IT-CASE-001: PASS
- IT-CASE-002: PASS（ただし404の扱いは要確認）
- IT-CASE-003: SKIP（負荷ツール未導入）

## 残課題
- エディタUIのAPI統合（[[DD-ERR-001]]）
- エクスポート実装（[[DD-API-008]]）

## 変更履歴
- 2026-01-31: 初版
