---
id: BD-ADR-010
title: app/docs ドメイン分離と API オリジン分割を採用
doc_type: ADR
phase: BD
version: 1.0.1
status: 承認
owner: RQ-SH-005
created: 2026-02-11
updated: 2026-02-11
up:
- '[[BD-ADR-008]]'
- '[[RQ-PC-003]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-DEP-001]]'
- '[[DD-DEP-001]]'
- '[[BD-API-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---

## ステータス
- Accepted
- 日付: 2026-02-11

## Context
CloudFront + Function URL(OAC/AWS_IAM) を単一入口で運用すると、POST/PUT 時の `x-amz-content-sha256` 制約が更新系APIとフォーム送信に波及する。加えて、ドキュメント配信（Quartz）とアプリ配信を同一ドメインで運用すると `/` ルーティングの責務が衝突しやすい。

## Decision
- 配信ドメインを `app.<domain>` と `docs.<domain>` に分離する。
- `app.<domain>` の CloudFront は `/*` を Function URL(OAC/AWS_IAM) へ、`/api/*` を API Gateway へ分岐する。
- `docs.<domain>` は既存の Quartz + S3 + CloudFront(OAC) を維持する。
- インフラ実装は `infra` で `QuartzSiteStack`（docs）と `AppSiteStack`（app）を分離して管理し、`AppSiteStack` が API Gateway を自動生成して CloudFront `/api/*` に接続する。

## Consequences
- docs 配信の Pretty URL rewrite と app 配信のルート制御が衝突しない。
- `/api/*` は Function URL 制約から分離され、ブラウザ標準フォーム送信を扱いやすい。
- CloudFront Distribution が2系統となり、運用監視・証明書・WAF設定の管理対象が増える。

## Alternatives
- 単一ドメインでパス分割（`/docs/*` と `/*`）
- app/docs を同一CloudFrontで運用し、POST/PUT を JavaScript `fetch` で統一

## References
- [[BD-ADR-008]]
- [[BD-ARCH-003]]
- [[BD-DEP-001]]
- [[DD-DEP-001]]
- [[BD-API-001]]

## 変更履歴
- 2026-02-11: 初版
- 2026-02-11: `AppSiteStack` による API Gateway 自動生成方針を追記
