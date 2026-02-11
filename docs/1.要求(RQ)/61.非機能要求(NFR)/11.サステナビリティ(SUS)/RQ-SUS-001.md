---
id: RQ-SUS-001
title: サステナビリティKPIの定義と計測
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-002
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-012]]'
related:
- '[[RQ-OBY-006]]'
- '[[RQ-COST-006]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- SUS
---

## SnowCard（日本語）
- **要求ID**: RQ-SUS-001
- **種別**: 非機能要求（Non-functional（Sustainability/Measurement））
- **優先度**: MUST
- **要求**: 本システムは、環境負荷を継続的に改善するために、単位トランザクションあたりの計算資源使用量およびデータ転送量をサステナビリティKPIとして定義し、月次で計測しなければならない。
- **根拠**: 改善対象を定量化しなければ、持続可能性の改善効果を評価できないため。
- **受入基準**:
  - KPI定義書に指標名、算出式、データソース、責任者、レビュー頻度が記載されていることを確認する（検査）。
  - 月次レポートでKPI実測値と前月差分が可視化され、改善アクションが記録されることを確認する（分析）。
- **例外/エラー**:
  - 計測に必要なデータが欠損した場合は、欠損期間・原因・補完手順を記録し、翌月までに是正する。
- **依存・関連**:
  - [[RQ-OBY-006]]
  - [[RQ-COST-006]]
- **起案者**: プロダクト／SRE／FinOps
- **参考資料**: AWS Well-Architected Framework（Sustainability）

## 変更履歴
- 2026-02-11: 初版
