---
id: BD-ADR-002
title: アプリケーション構成（MVC + API + Worker）
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-PC-001]]'
- '[[RQ-RDR-001]]'
related:
- '[[RQ-RDR-002]]'
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- BD
- ADR
---

## ステータス
- Accepted
- 日付: 2026-01-17

## Context
UI、API、非同期ワーカーに責務を分割し、PDF生成やメール送信などの重い処理でAPI応答性能を落とさない必要がある。

## Decision
- Web Frontend: ThymeleafによるUIレンダリング
- API Service: 認証/CRUD/検索/共有/エクスポート
- Job Worker: PDF生成やメール送信など非同期処理

## Consequences
- 責務分割しつつ単一コードベースを維持できる
- 非同期化によりレイテンシ要件を満たしやすい
- キュー/ワーカー監視が追加で必要

## Alternatives
- 同期処理のみで完結
- SPA+APIに一本化

## References
- [[RQ-RDR-002]]
- [[BD-ARCH-003]]

## 変更履歴
- 2026-01-31: 初版（既存ADRを本ドキュメント体系へ移植）
