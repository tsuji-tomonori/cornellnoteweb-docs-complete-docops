---
id: BD-ADR-004
title: 認証方式（セッション + HttpOnly Cookie）
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-PC-001]]'
- '[[RQ-RDR-001]]'
down:
- '[[BD-ARCH-001]]'
- '[[BD-API-002]]'
related:
- '[[RQ-SEC-001]]'
- '[[DD-API-002]]'
tags:
- CornellNoteWeb
- BD
- ADR
---
# BD-ADR-004 認証方式（セッション + HttpOnly Cookie）

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
WebアプリとしてCSRF対策を前提とした認証方式が求められる。外部IdPは任意。

## Decision
- サーバサイドセッション + HttpOnly Cookie を基本とする
- APIはCSRF対策を実施する（MVPでは段階導入）
- OAuth/OIDCは将来拡張

## Consequences
- トークン漏えいリスクを抑えやすい
- CSRF対策の実装が必須
- モバイル/外部API用途では追加設計が必要

## Alternatives
- JWTステートレス認証
- OAuth/OIDC専用ログイン

## References
- [[RQ-SEC-001]]
- [[DD-API-002]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）