---
id: BD-DEP-001
title: デプロイ方式（ローカル/クラウド）
doc_type: デプロイ
phase: BD
version: 1.0.0
status: 承認
owner: SRE
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-PC-003]]'
- '[[BD-ARCH-003]]'
related:
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- BD
- DEP
---

## ローカル（開発）
- Docker Compose で起動（[[BD-ENV-001]]）

## クラウド（想定）
- AWS CDK によりスタックを構築（infra/）
- API Gateway + Lambda（API/Worker）
- Aurora(PostgreSQL) + S3 + SQS + CloudWatch + Secrets Manager

## ロールバック
- アプリ: Lambdaのバージョン/エイリアスで戻す（将来）
- DB: マイグレーションは原則 forward-only（戻しが必要な場合は手順書化）

## 変更履歴
- 2026-01-31: 初版
