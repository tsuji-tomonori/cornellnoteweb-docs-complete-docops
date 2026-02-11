---
id: BD-ARCH-003
title: デプロイ構成（AWS想定）
doc_type: アーキテクチャ概要（デプロイ）
phase: BD
version: 1.0.2
status: 承認
owner: RQ-SH-005
created: 2026-01-31
updated: 2026-02-11
up:
- '[[BD-ARCH-001]]'
related:
- '[[BD-ADR-002]]'
- '[[BD-ADR-005]]'
- '[[BD-ADR-008]]'
- '[[BD-ADR-010]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---

## デプロイ図（概略）
```mermaid
flowchart LR
  U[User Browser] -->|HTTPS| APP[CloudFront (app.<domain>)]
  U -->|HTTPS| DOCS[CloudFront (docs.<domain>)]
  APP -->|SigV4(OAC)| FURL[Lambda Function URL\nAuthType: AWS_IAM]
  APP -->|/api/*| APIGW[API Gateway]
  DOCS -->|OAC| DOCS3[(S3: quartz/public)]
  FURL --> SSR[Lambda: Spring Boot SSR\n(AWS Lambda Web Adapter)]
  APIGW --> SSR
  SSR --> RDS[(Aurora/PostgreSQL)]
  SSR --> S3[(S3 Bucket)]
  SSR --> SQS[(SQS Queue)]
  SQS --> W[Lambda: Worker]
  SSR --> SM[Secrets Manager]
  SSR --> CW[CloudWatch Logs/Metrics]
  W --> S3
  W --> CW
```

## ポイント
- app配信とdocs配信はドメインを分離し、`app.<domain>` と `docs.<domain>` で責務を分離する。
- app配信では CloudFront から Lambda を直接実行するのではなく、Function URL を HTTP オリジンとして利用する。
- app配信の Function URL は `AWS_IAM`、CloudFront は OAC を使って SigV4 署名を付与し、CloudFront 経由のみを許可する。
- `/api/*` は API Gateway オリジンへ分岐し、更新系APIでの `x-amz-content-sha256` 制約を回避する。
- SSR は Spring Boot を Lambda コンテナで実行し、AWS Lambda Web Adapter（LWA）で HTTP リクエストを受ける。
- DB認証情報は Secrets Manager で管理し、監視は CloudWatch（ログ/メトリクス）に集約する。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: CloudFront + Function URL(OAC) + Lambda Web Adapter 構成へ更新
- 2026-02-11: `app` と `docs` のドメイン分離、および `/api/*` の API Gateway 分岐を追加
