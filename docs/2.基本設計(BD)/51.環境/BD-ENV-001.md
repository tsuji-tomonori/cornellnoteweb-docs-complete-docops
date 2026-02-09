---
id: BD-ENV-001
title: ローカル開発環境（Docker Compose）
doc_type: 環境
phase: BD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PC-002]]'
- '[[RQ-PC-001]]'
- '[[RQ-PC-003]]'
- '[[RQ-PC-004]]'
- '[[RQ-PC-005]]'
- '[[RQ-PC-006]]'
down:
- '[[IT-ENV-001]]'
related:
- '[[BD-DEP-001]]'
tags:
- CornellNoteWeb
- BD
- ENV
---
# BD-ENV-001 ローカル開発環境（Docker Compose）

## 概要
- `docker-compose.yml` で DB → マイグレーション → アプリの順に起動する。
- アプリはコンテナ内 `:3000`、ホスト側 `http://localhost:13000` でアクセス。

## 起動手順
```bash
docker compose build
docker compose up -d
```

## 構成
- db: `postgres:16`（ポート `15432`）
- migrate: `psql` で `migrations/*.sql` を順に適用
- app: Spring Boot アプリ（`SPRING_PROFILES_ACTIVE=local`）

## 設定値（例）
- `DATABASE_URL=jdbc:postgresql://db:5432/cornell_note`
- `DB_USER=postgres`
- `DB_PASSWORD=postgres`

## ポート競合時
- `docker-compose.yml` の `13000:3000` を変更する（例: `13001:3000`）。

## 変更履歴
- 2026-01-31: 初版