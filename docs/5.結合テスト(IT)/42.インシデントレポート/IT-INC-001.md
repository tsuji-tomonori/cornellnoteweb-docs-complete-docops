---
id: IT-INC-001
title: インシデントレポート（サンプル）
doc_type: インシデントレポート
phase: IT
version: 1.0.0
status: 下書き
owner: 運用担当（SRE/運用）
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-MON-002]]'
related:
- '[[DD-LOG-001]]'
tags:
- CornellNoteWeb
- IT
- INCIDENT
---

## 概要
- 発生日時: 2026-01-31 10:00 JST
- 影響: /api/notes が5xxを返し、一覧が表示できない
- 重大度: SEV2

## タイムライン（例）
- 10:00 アラート検知（5xx率上昇）
- 10:05 ロールバック実施
- 10:20 復旧確認

## 原因（例）
- DBマイグレーションの制約変更とアプリのstatus値が不一致（`deleted`）で保存失敗

## 再発防止（例）
- status値の統一（[[DD-DBCON-002]] / [[DD-ERR-001]]）
- CIでマイグレーション整合チェックを追加

## 変更履歴
- 2026-01-31: 初版
