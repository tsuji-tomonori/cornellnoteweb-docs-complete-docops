---
id: RQ-AV-001
title: 可用性SLO（API成功率・稼働率）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
- '[[BD-QUAL-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---

## 要求
- 月間稼働率 99.9%（MVP目標）
- API成功率（2xx/3xx） 99.5% 以上
- 重大障害のRTO 60分、RPO 15分（目標）

## 受入基準
- CloudWatch等でSLIを観測できる
- 障害時の手順書がある（[[AT-RUN-001]]）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版
