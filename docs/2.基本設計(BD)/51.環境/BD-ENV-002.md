---
id: BD-ENV-002
title: 環境区分と設定管理（stg/prod）
doc_type: 環境
phase: BD
version: 1.0.0
status: 承認
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PC-003]]'
down:
- '[[DD-DEP-001]]'
related:
- '[[BD-CM-001]]'
tags:
- CornellNoteWeb
- BD
- ENV
---
# BD-ENV-002 環境区分と設定管理（stg/prod）

## 環境
- `local`: Docker Compose
- `stg`: 本番相当（小規模）で機能検証
- `prod`: 本番

## 設定管理
- 非機密: 環境変数/設定ファイル（`application-*.yml`）
- 機密: AWS Secrets Manager（DB接続など）

## 監査・追跡
- CDKのパラメータ（envName）でリソースタグと名前を分離する（infra/stack.ts参照）。

## 変更履歴
- 2026-01-31: 初版