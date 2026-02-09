---
id: DD-MIG-001
title: DBマイグレーション方針（migrations/）
doc_type: DB移行
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-DATA-001]]'
down:
- '[[DD-DDL-001]]'
related:
- '[[BD-ENV-001]]'
tags:
- CornellNoteWeb
- DD
- MIG
---
# DD-MIG-001 DBマイグレーション方針（migrations/）

## 方針
- `migrations/*.sql` を **連番**で管理し、前方互換（forward-only）を基本とする。
- ローカルは `docker-compose.yml` の `migrate` サービスが `psql` で順番に適用する。
- 本番相当は dbmate 等のツールで同様に順序適用する（Taskfileに雛形あり）。

## 追加時のルール
- 既存ファイルの編集は避け、新しい連番ファイルを追加する。
- 破壊的変更（カラム削除など）は2段階で行う（追加→移行→削除）。
- データ移行が必要な場合は **冪等性** を意識する（再実行しても壊れない）。

## 例: object storage移行（将来）
- `*_ref` を S3 キーとして扱うように移行する場合:
  1) 新カラム/状態追加
  2) バックフィル（RDB→S3コピー）
  3) アプリ切替
  4) 古いデータ削除（保守期間後）

## 変更履歴
- 2026-01-31: 初版