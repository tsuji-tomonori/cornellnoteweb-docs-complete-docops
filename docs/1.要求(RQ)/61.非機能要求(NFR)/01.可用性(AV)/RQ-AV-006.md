---
id: RQ-AV-006
title: 災害復旧（RTO/RPO）
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
- '[[RQ-PRC-005]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- AV
---

## SnowCard（日本語）
- **要求ID**: RQ-AV-006
- **種別**: 非機能要求（Non-functional（Disaster Recovery））
- **優先度**: MUST
- **要求**: 本システムは、災害または広域障害時に、RTO 4時間以内およびRPO 15分以内でサービスを復旧しなければならない。
- **根拠**: 重大障害時でも事業継続を可能にするため。
- **受入基準**:
  - 年2回以上のDRテストを実施し、実測でRTO/RPOを満たすことをテストレポートとして保管する（テスト＋分析）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-PRC-005]]
- **起案者**: 事業部門／BCP担当／SRE
- **参考資料**: BCP、DR設計、テスト計画

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
