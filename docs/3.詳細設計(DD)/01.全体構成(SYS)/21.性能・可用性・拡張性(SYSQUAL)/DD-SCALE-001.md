---
id: DD-SCALE-001
title: 拡張性設計（機能/データ/運用）
doc_type: 拡張性
phase: DD
version: 1.0.0
status: 下書き
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- DD
- SCALE
---

## 方向性
- 検索: クライアント絞り込み → サーバ検索 → 外部検索（段階導入）
- 本文保管: RDB直格納 → S3参照（段階導入）
- PDF: スタブ → SQS+Worker+S3（段階導入）

## スケールポイント
- API: Lambdaの同時実行数/スロットリング
- DB: 接続プール、リードレプリカ（将来）
- キュー: 失敗時のDLQ、リトライ戦略

## 変更履歴
- 2026-01-31: 初版
