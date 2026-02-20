---
id: DD-AV-001
title: 可用性詳細（バックアップ/復旧/DR）
doc_type: 可用性
phase: DD
version: 1.0.0
status: 下書き
owner: 運用担当（SRE/運用）
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-AV-001]]'
related:
- '[[BD-RET-001]]'
tags:
- CornellNoteWeb
- DD
- AV
---

## バックアップ
- DB: Auroraの自動バックアップ（prod）
- S3: バージョニング/ライフサイクル（PDF保持期間）

## 復旧（案）
- RTO 60分、RPO 15分を目標（[[RQ-AV-001]]）
- インシデント時は手順書に沿って復旧（[[AT-RUN-001]]）

## DR（案）
- 重要度に応じてマルチAZ（Aurora）
- 復旧演習を四半期で実施（将来）

## 変更履歴
- 2026-01-31: 初版
