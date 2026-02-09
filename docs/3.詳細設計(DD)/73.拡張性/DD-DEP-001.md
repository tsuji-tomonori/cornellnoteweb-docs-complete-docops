---
id: DD-DEP-001
title: デプロイ詳細（CDK構成要素）
doc_type: 拡張性
phase: DD
version: 1.0.0
status: 下書き
owner: 運用担当（SRE/運用）
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-DEP-001]]'
- '[[BD-ARCH-003]]'
- '[[BD-ENV-002]]'
related:
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- DD
- DEP
---

## 概要（infra/）
- `NetworkComponent`: VPC/サブネット
- `DatabaseComponent`: Aurora(PostgreSQL) と Secrets
- `StorageComponent`: S3 Bucket
- `QueueComponent`: SQS Queue
- `AppComponent`: API Lambda / Worker Lambda
- `ApiComponent`: API Gateway
- `ObservabilityComponent`: CloudWatch（ログ/アラート）

## 依存関係（概略）
```mermaid
flowchart TD
  Net[VPC] --> DB[Aurora]
  Net --> App[Lambda]
  App --> S3[S3]
  App --> Q[SQS]
  Q --> Worker[Worker Lambda]
  App --> ApiGW[API Gateway]
  ApiGW --> User[Browser]
```

## デプロイコマンド（例）
- `cd infra && npm install`
- `npm run synth`
- `npm run deploy`

## 変更履歴
- 2026-01-31: 初版
