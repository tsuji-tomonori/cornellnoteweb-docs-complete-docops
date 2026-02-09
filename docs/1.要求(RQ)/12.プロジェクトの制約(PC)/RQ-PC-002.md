---
id: RQ-PC-002
title: ローカル起動は Docker Compose で完結
doc_type: プロジェクトの制約
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-SEC-001]]'
- '[[RQ-PRC-001]]'
tags:
- CornellNoteWeb
- RQ
- PC
---

## 制約内容
- `docker compose up` でDB・マイグレーション・アプリが起動できること。
- ローカルポートは 13000 を使用する。

## 根拠
- 開発者の環境差分を減らすため。

## 影響
- 技術/運用の自由度が制限されるため、例外が必要な場合は [[RQ-RDR-001]]（要求決定記録）として残す。

## 変更履歴
- 2026-01-31: 初版
