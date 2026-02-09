---
id: BD-ARCH-001
title: システムコンテキスト
doc_type: アーキテクチャ概要（コンテキスト）
phase: BD
version: 1.0.1
status: 承認
owner: RQ-SH-005
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
- '[[BD-ADR-001]]'
- '[[BD-ADR-002]]'
- '[[BD-ADR-003]]'
- '[[BD-ADR-004]]'
- '[[BD-ADR-005]]'
- '[[BD-ADR-006]]'
related:
- '[[BD-ADR-002]]'
- '[[BD-ADR-008]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---

## 目的
- 外部アクターとシステム境界を明確にする。

## コンテキスト図
```mermaid
flowchart LR
  User[利用者（ブラウザ）] -->|HTTPS| Web[CornellNoteWeb]
  Third[第三者（共有リンク閲覧）] -->|HTTPS| Web
  Web --> DB[(PostgreSQL)]
  Web --> OBJ[(Object Storage / S3)]
  Web --> Q[(Queue / SQS)]
  Web --> Obs[(Observability)]
  Web --> SM[(Secrets Manager)]
  Web --> Mail[(Email/SES)]

  subgraph CornellNoteWeb
    FE[UI（Thymeleaf/Static JS）]
    API[REST API]
    Worker[非同期ワーカー]
    FE --> API
    API --> Worker
  end
```

## 補足
- ローカル環境は `docker-compose.yml` により `db`/`migrate`/`app` を起動する（[[BD-ENV-001]]）。
- AWS環境では CloudFront + Lambda Function URL（OAC/AWS_IAM）+ Lambda（Spring Boot SSR/LWA）+ Aurora + S3 + SQS を想定（infra/ 参照）。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: AWS想定の入口構成を CloudFront + Function URL に更新
