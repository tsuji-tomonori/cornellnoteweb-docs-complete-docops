---
id: BD-ENV-002
title: 環境区分と設定管理（stg/prod）
doc_type: 環境
phase: BD
version: 1.0.1
status: 承認
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-PC-003]]'
- '[[RQ-DEV-011]]'
related:
- '[[BD-CM-001]]'
- '[[BD-CM-002]]'
tags:
- CornellNoteWeb
- BD
- ENV
---

## 環境
- `local`: Docker Compose
- `stg`: 本番相当（小規模）で機能検証
- `prod`: 本番

## 環境タグ標準
- `Environment` は `Production|Staging|Development|Test` の列挙値のみ許可する。
- `local` は `Environment=Development` とし、`ManagedBy=DockerCompose` を付与する。
- `stg` は `Environment=Staging`、`prod` は `Environment=Production` を強制する。

## 設定管理
- 非機密: 環境変数/設定ファイル（`application-*.yml`）
- 機密: AWS Secrets Manager（DB接続など）

## 監査・追跡
- CDKのパラメータ（envName）でリソースタグと名前を分離する（infra/stack.ts参照）。
- `Owner` は個人名ではなくチーム識別子を使用する。
- 環境作成時に必須タグ欠落があればデプロイを失敗させる。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: 環境タグ標準と必須タグ検証を追記
