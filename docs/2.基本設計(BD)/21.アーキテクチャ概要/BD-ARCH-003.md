---
id: BD-ARCH-003
title: デプロイ構成（AWS想定）
doc_type: アーキテクチャ概要（デプロイ）
phase: BD
version: 1.0.1
status: 承認
owner: RQ-SH-005
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-ARCH-001]]'
related:
- '[[BD-ADR-002]]'
- '[[BD-ADR-005]]'
- '[[BD-ADR-008]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---

## デプロイ図（概略）
```mermaid
flowchart LR
  U[User Browser] -->|HTTPS| CF[CloudFront]
  CF -->|SigV4(OAC)| FURL[Lambda Function URL\nAuthType: AWS_IAM]
  FURL --> SSR[Lambda: Spring Boot SSR\n(AWS Lambda Web Adapter)]
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
- CloudFront から Lambda を直接実行するのではなく、Function URL を HTTP オリジンとして利用する。
- Function URL は `AWS_IAM`、CloudFront は OAC を使って SigV4 署名を付与し、CloudFront 経由のみを許可する。
- SSR は Spring Boot を Lambda コンテナで実行し、AWS Lambda Web Adapter（LWA）で HTTP リクエストを受ける。
- POST/PUT は `x-amz-content-sha256` が必須なため、ブラウザ標準 form ではなく JavaScript `fetch` で送信する。
- DB認証情報は Secrets Manager で管理し、監視は CloudWatch（ログ/メトリクス）に集約する。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: CloudFront + Function URL(OAC) + Lambda Web Adapter 構成へ更新
