---
id: BD-ADR-008
title: CloudFrontオリジンとしてLambda Function URL（OAC）を採用
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: RQ-SH-005
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-PC-003]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-DEP-001]]'
- '[[DD-DEP-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---

## ステータス
- Accepted
- 日付: 2026-02-09

## Context
CloudFront は Lambda を直接（Lambda@Edge のように）Java/Spring 実行基盤として呼び出す用途には適さない。SSR を Lambda で運用するには、HTTP オリジンとして Lambda Function URL を使う構成が現実的である。

## Decision
- CloudFront のオリジンは Lambda Function URL を採用する。
- Function URL は `AWS_IAM`、CloudFront は OAC で SigV4 署名を付与する。
- SSR 実行基盤は Spring Boot + AWS Lambda Web Adapter（LWA）を採用する。
- POST/PUT は JavaScript `fetch` で `x-amz-content-sha256` を付与して送信する（ブラウザ標準 form POST は採用しない）。

## Consequences
- CloudFront 経由のみを許可し、Function URL の直接アクセス経路を抑制できる。
- Spring Boot SSR を Lambda 上へ移行しやすい。
- フォーム送信実装に SHA256 付与処理が必要になり、フロントエンド実装が増える。

## Alternatives
- CloudFront + API Gateway + Lambda（既存パターン）
- CloudFront + ALB + ECS/Fargate
- Function URL を `NONE` にして WAF で保護

## References
- [[BD-ARCH-003]]
- [[BD-DEP-001]]
- [[DD-DEP-001]]

## 変更履歴
- 2026-02-09: 初版
