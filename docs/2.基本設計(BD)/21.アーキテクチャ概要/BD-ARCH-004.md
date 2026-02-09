---
id: BD-ARCH-004
title: 主要データフロー（ノート作成〜共有）
doc_type: アーキテクチャ概要（データフロー）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-ARCH-001]]'
related:
- '[[RQ-UC-002]]'
- '[[RQ-UC-007]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---

## データフロー（概略）
```mermaid
flowchart TD
  U[User] --> FE[UI]
  FE -->|POST /api/notes| API[API]
  API --> DB[(PostgreSQL)]
  API -->|（将来）本文をS3へ| S3[(S3)]
  FE -->|POST /api/share/{noteId}| API
  API --> DB
  T[Third party] -->|GET /share?token=...| FE2[Share View]
  FE2 -->|GET /api/share/{token}| API
  API --> DB
```

## 補足
- 現行実装では本文もDBへ格納しているが、将来S3へ移す場合は [[BD-ADR-003]] を参照。

## 変更履歴
- 2026-01-31: 初版
