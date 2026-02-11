---
id: RQ-OBY-002
title: SLI/SLOの監視と可視化
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
- '[[RQ-PS-001]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- OBY
---

## SnowCard（日本語）
- **要求ID**: RQ-OBY-002
- **種別**: 非機能要求（Non-functional（SRE/Monitoring））
- **優先度**: MUST
- **要求**: 本システムは、可用性・遅延・エラー率・スループットのSLIを計測し、SLOに対する達成状況を可視化しなければならない。
- **根拠**: 運用判断と改善をデータ駆動にするため。
- **受入基準**:
  - ダッシュボードでSLO達成が閲覧でき、指標の定義（計測対象・除外条件）が文書化されていることを確認する（検査＋分析）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-PS-001]]
- **起案者**: SRE
- **参考資料**: SLO定義書、監視設計

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
