---
id: RQ-DEV-007
title: 環境分離（Dev/Staging/Prod）と昇格
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
- '[[RQ-PRC-002]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- DEV
---

## SnowCard（日本語）
- **要求ID**: RQ-DEV-007
- **種別**: 非機能要求（Non-functional（Operability/Process））
- **優先度**: MUST
- **要求**: 本システムは、開発・検証・本番の環境を分離し、成果物が同一パイプラインで段階的に昇格する運用を提供しなければならない。
- **根拠**: 設定差異による事故を低減し、品質を担保するため。
- **受入基準**:
  - Dev/Staging/Prodが別環境として構成管理され、同一ビルド成果物がStagingを経てProdへ昇格していることを確認する（検査＋分析）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-PRC-002]]
- **起案者**: 開発リード／SRE
- **参考資料**: 環境構成図、パイプライン定義

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
