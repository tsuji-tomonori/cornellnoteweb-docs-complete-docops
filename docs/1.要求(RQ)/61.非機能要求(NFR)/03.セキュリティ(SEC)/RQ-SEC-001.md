---
id: RQ-SEC-001
title: セキュリティ要求（MVP）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
- '[[BD-QUAL-001]]'
down:
- '[[BD-QUAL-001]]'
- '[[BD-SEC-001]]'
- '[[DD-PERF-001]]'
- '[[BD-API-002]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---
# RQ-SEC-001 セキュリティ要求（MVP）

## 要求
- 認証されたユーザーのみが自分のノートへアクセスできる（将来強化）
- 共有リンクは閲覧専用で失効/取り消し可能
- Secretsはコードに埋め込まずSecrets Manager等で管理
- 重要操作（削除/共有）を監査ログに残す

## 受入基準
- 脅威モデル（高位）が定義されている（[[BD-SEC-001]]）
- SAST/依存関係チェックをCIに含める（[[UT-STAT-001]]）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版