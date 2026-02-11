---
id: RQ-COST-004
title: コスト異常検知（Anomaly Detection）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-002
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-010]]'
related:
- '[[RQ-COST-001]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- COST
---

## SnowCard（日本語）
- **要求ID**: RQ-COST-004
- **種別**: 非機能要求（Non-functional（Cost Monitoring））
- **優先度**: SHOULD
- **要求**: 本システムは、日次のクラウド利用費について、過去トレンドに対する異常増加を検知し、24時間以内に関係者へ通知しなければならない。
- **根拠**: 構成ミスや暴走ジョブによるコスト事故を早期に検知するため。
- **受入基準**:
  - 異常検知ルールが設定され、模擬的なコスト増加イベントで通知が24時間以内に到達することを確認する（テスト＋検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-COST-001]]
- **起案者**: FinOps／運用
- **参考資料**: コスト監視設計

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
