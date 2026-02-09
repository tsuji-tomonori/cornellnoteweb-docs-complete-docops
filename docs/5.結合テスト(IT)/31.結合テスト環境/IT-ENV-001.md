---
id: IT-ENV-001
title: 結合テスト環境（Docker Compose）
doc_type: 結合テスト環境
phase: IT
version: 1.0.0
status: 承認
owner: QA
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-ENV-001]]'
down:
- '[[IT-PLAN-001]]'
related:
- '[[DD-MIG-001]]'
tags:
- CornellNoteWeb
- IT
- ENV
---
# IT-ENV-001 結合テスト環境（Docker Compose）

## 目的
- 本番相当の「アプリ + DB + マイグレーション」をローカルで再現する。

## 構成
- `db`（PostgreSQL）
- `migrate`（migrations適用）
- `app`（Spring Boot）

## 起動
```bash
docker compose up -d
```

## 疎通
- `GET http://localhost:13000/notes`（ページ）
- `GET http://localhost:13000/api/notes`（API）

## 変更履歴
- 2026-01-31: 初版