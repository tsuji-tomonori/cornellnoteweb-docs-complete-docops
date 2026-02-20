---
id: BD-ADR-007
title: ドキュメントデプロイをQuartz build + CDK deployで統一
doc_type: ADR
phase: BD
version: 1.0.1
status: 承認
owner: アーキテクト
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-PC-003]]'
- '[[RQ-RDR-009]]'
related:
- '[[BD-DEP-001]]'
- '[[AT-REL-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---

## ステータス
- Accepted
- 日付: 2026-02-09

## Context
CloudFrontデプロイに必要な静的アセットは `quartz/public` に生成される。生成手順とCDKデプロイ手順が分離すると、デプロイ漏れや古いアセットの公開が発生しやすい。

## Decision
- ドキュメントデプロイは `Taskfile.yml` の `docs:deploy` を標準手順とする。
- `docs:deploy` は Quartz build（`quartz/public` 生成）と CDK deploy（CloudFront/S3更新）を連続実行する。
- CDKには `siteAssetPath` contextで `quartz/public` を明示してデプロイする。

## Consequences
- 配信手順が一本化され、ローカル/CIで同一オペレーションを再現しやすくなる。
- Task実行環境（Node.js / npm / AWS認証）の前提管理が必要になる。

## Alternatives
- Quartz buildとCDK deployを手動で都度実行する。
- CI専用手順に限定し、ローカル配信手順を用意しない。

## References
- [[BD-DEP-001]]
- [[AT-REL-001]]

## 変更履歴
- 2026-02-09: 初版
- 2026-02-09: ドキュメントデプロイ用語へ統一
