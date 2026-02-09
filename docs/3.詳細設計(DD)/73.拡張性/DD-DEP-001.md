---
id: DD-DEP-001
title: デプロイ詳細（CDK構成要素）
doc_type: 拡張性
phase: DD
version: 1.0.1
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-DEP-001]]'
- '[[BD-ARCH-003]]'
- '[[BD-ENV-002]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-ADR-008]]'
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
- `AppComponent`: SSR Lambda（Spring Boot + LWA）/ Worker Lambda
- `EdgeComponent`: CloudFront + Function URL Origin（OAC）
- `ObservabilityComponent`: CloudWatch（ログ/アラート）

## 依存関係（概略）
```mermaid
flowchart TD
  Net[VPC] --> DB[Aurora]
  Edge[CloudFront + OAC] --> FURL[Function URL]
  FURL --> App[SSR Lambda (LWA)]
  Net --> App
  App --> S3[S3]
  App --> Q[SQS]
  Q --> Worker[Worker Lambda]
  User[Browser] --> Edge
```

## リクエスト制約
- CloudFront から Function URL へのオリジンアクセスは `FunctionUrlOrigin.withOriginAccessControl` を使用する。
- Function URL は `AWS_IAM` で作成し、CloudFront からの SigV4 署名付きアクセスのみを許可する。
- POST/PUT は `x-amz-content-sha256` が必須のため、UIは JavaScript `fetch` で SHA256 を付与して送信する。
- 将来 `/api/*` を別オリジン（API Gateway/ALB）に分離できるよう、CloudFront behavior 分割を可能な構成として扱う。

## デプロイコマンド（例）
- `cd infra && npm install`
- `npm run synth`
- `npm run deploy`

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: CloudFront + Function URL(OAC) 前提の詳細構成とPOST制約を追記
