---
id: DD-DEP-001
title: デプロイ詳細（CDK構成要素）
doc_type: 拡張性
phase: DD
version: 1.0.3
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[BD-DEP-001]]'
- '[[BD-ARCH-003]]'
- '[[BD-ENV-002]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-ADR-008]]'
- '[[BD-ADR-010]]'
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
- `AppEdgeComponent`: CloudFront(app) + Function URL Origin（OAC）
- `DocsEdgeComponent`: CloudFront(docs) + S3 Origin（OAC）
- `ApiIngressComponent`: API Gateway（`AppSiteStack` で自動生成し CloudFront app の `/api/*` オリジンへ接続）
- `ObservabilityComponent`: CloudWatch（ログ/アラート）

## 依存関係（概略）
```mermaid
flowchart TD
  Net[VPC] --> DB[Aurora]
  AppEdge[CloudFront app.<domain>] --> FURL[Function URL]
  AppEdge -->|/api/*| APIGW[API Gateway]
  DocsEdge[CloudFront docs.<domain>] --> DocsS3[S3 quartz/public]
  FURL --> App[SSR Lambda (LWA)]
  APIGW --> App
  Net --> App
  App --> S3[S3]
  App --> Q[SQS]
  Q --> Worker[Worker Lambda]
  User[Browser] --> AppEdge
  User --> DocsEdge
```

## リクエスト制約
- CloudFront から Function URL へのオリジンアクセスは `FunctionUrlOrigin.withOriginAccessControl` を使用する。
- Function URL は `AWS_IAM` で作成し、CloudFront からの SigV4 署名付きアクセスのみを許可する。
- app配信のデフォルトオリジン（Function URL）に到達する POST/PUT は `x-amz-content-sha256` 要件の影響を受ける。
- 更新系APIは `/api/*` を API Gateway オリジンへ分離し、ブラウザ標準フォーム送信の制約を回避する。

## デプロイコマンド（例）
- `cd infra && npm install`
- `npm run synth`
- `npm run deploy`

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: CloudFront + Function URL(OAC) 前提の詳細構成とPOST制約を追記
- 2026-02-11: app/docsドメイン分離と `/api/*` API Gateway 分岐を詳細化
- 2026-02-11: API Gateway を手動指定ではなく `AppSiteStack` 自動生成へ更新
