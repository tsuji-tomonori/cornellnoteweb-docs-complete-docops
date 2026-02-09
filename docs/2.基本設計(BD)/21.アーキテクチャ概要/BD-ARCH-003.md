---
id: BD-ARCH-003
title: デプロイ構成（AWS想定）
doc_type: アーキテクチャ概要（デプロイ）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-ARCH-001]]'
related:
- '[[BD-ADR-002]]'
- '[[BD-ADR-005]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---

## デプロイ図（概略）
```mermaid
flowchart LR
  U[User Browser] -->|HTTPS| CF[CloudFront（任意）]
  CF --> APIGW[API Gateway]
  APIGW --> L1[Lambda: API]
  L1 --> RDS[(Aurora/PostgreSQL)]
  L1 --> S3[(S3 Bucket)]
  L1 --> SQS[(SQS Queue)]
  SQS --> L2[Lambda: Worker]
  L2 --> S3
  L1 --> SM[Secrets Manager]
  L1 --> CW[CloudWatch Logs/Metrics]
  L2 --> CW
```

## ポイント
- API と Worker を別Lambdaに分け、PDF生成など重い処理をWorker側へ寄せる。
- DB認証情報などは Secrets Manager で管理し、アプリ起動時に参照する（`SecretsManagerEnvironmentPostProcessor`）。
- 監視は CloudWatch を中心に構成（アラート/ダッシュボード）。

## 変更履歴
- 2026-01-31: 初版
