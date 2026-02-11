---
id: BD-DEP-002
title: コスト最適化の考え方（MVP）
doc_type: デプロイ
phase: BD
version: 1.0.1
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-COST-001]]'
- '[[RQ-COST-007]]'
related:
- '[[BD-ARCH-003]]'
- '[[BD-ADR-009]]'
- '[[BD-CM-002]]'
tags:
- CornellNoteWeb
- BD
- DEP
- COST
---

## 方針
- まずは可用性/性能の最低要件を満たす構成で立ち上げ、利用量に応じて最適化する。
- 主要コストドライバ（DB、S3、データ転送、CloudWatch）を把握し、タグで可視化する。
- 必須タグ（`CostCenter` `Environment` `Owner` `Project` `ManagedBy`）をデプロイ時に付与し、タグ欠落リソースの作成を防止する。

## 施策例
- stgは最小構成（小さなDB、短いログ保持）
- PDFの保持期間を短く（例: 7日）
- 監視メトリクスの粒度を必要最小限に

## コスト配分タグ運用
- コスト配分に使うタグキーは管理アカウントで有効化し、反映遅延（最大48時間）を考慮して検証計画を組む。
- Organizations配下では、アカウント移動時に有効化状態が失われるため再アクティブ化手順を運用Runbookへ定義する。
- Tag Policyの `report_required_tag_for` と月次配賦レポートを突合し、配賦率95%未満を是正対象とする。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: 必須タグ付与とコスト配分タグ運用手順を追記
