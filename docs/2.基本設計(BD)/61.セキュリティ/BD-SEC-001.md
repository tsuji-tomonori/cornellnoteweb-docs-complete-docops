---
id: BD-SEC-001
title: セキュリティ設計（境界/主要対策）
doc_type: セキュリティ（設計）
phase: BD
version: 1.0.0
status: 承認
owner: セキュリティ担当
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SEC-001]]'
- '[[RQ-AV-001]]'
- '[[RQ-PS-001]]'
- '[[RQ-PRC-001]]'
- '[[RQ-OBY-001]]'
- '[[RQ-DEV-001]]'
- '[[RQ-INT-001]]'
- '[[RQ-COST-001]]'
- '[[RQ-UX-001]]'
- '[[RQ-DATA-001]]'
related:
- '[[BD-ADR-004]]'
tags:
- CornellNoteWeb
- BD
- SEC
---

## 脅威（高位）
- 共有リンク漏えいによる情報漏えい
- セッションハイジャック/CSRF
- Secrets露出（DBパスワード等）
- 依存関係脆弱性

## 対策（高位）
- 共有リンク: 失効/取り消し、期限、監査ログ
- 認証/セッション: HttpOnly Cookie、CSRF、セッションタイムアウト
- Secrets: Secrets Manager、最小権限IAM
- 脆弱性: 依存スキャン、SAST、定期アップデート
- 監査: 重要操作ログ、アクセスログ

## 変更履歴
- 2026-01-31: 初版
