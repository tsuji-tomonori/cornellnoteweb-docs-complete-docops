---
id: BD-MON-001
title: 監視設計（メトリクス/アラート）
doc_type: 監視
phase: BD
version: 1.0.0
status: 承認
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-OBY-001]]'
- '[[RQ-AV-001]]'
down:
- '[[DD-LOG-001]]'
related:
- '[[BD-ARCH-003]]'
tags:
- CornellNoteWeb
- BD
- MON
---
# BD-MON-001 監視設計（メトリクス/アラート）

## 主要SLI候補
- API成功率（2xx/3xx）
- APIレイテンシ（P50/P95/P99）
- DB接続エラー数
- SQSキュー滞留（メッセージ数/最古経過時間）
- PDFエクスポート失敗率

## アラート例
- 5分間の5xx率が閾値超過
- DB接続失敗が連続発生
- キュー滞留が一定時間を超過
- 共有リンク生成数の急増（漏えい疑い）

## ダッシュボード
- 環境別（stg/prod）
- API / DB / Worker を分けて可視化

## 変更履歴
- 2026-01-31: 初版