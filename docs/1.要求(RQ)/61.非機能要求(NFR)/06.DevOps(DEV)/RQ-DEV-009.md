---
id: RQ-DEV-009
title: 設計決定の記録（ADR）
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
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
- DEV
---

## SnowCard（日本語）
- **要求ID**: RQ-DEV-009
- **種別**: 非機能要求（Non-functional（Maintainability/Architecture））
- **優先度**: MAY
- **要求**: 本システムは、重要な設計決定について、代替案、意思決定理由、影響範囲をArchitecture Decision Recordとして記録しなければならない。
- **根拠**: 属人化を避け、将来変更の判断材料を残すため。
- **受入基準**:
  - ADRがリポジトリに保管され、主要な設計変更ごとに更新されていることを確認する（検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: アーキテクト／開発リード
- **参考資料**: ADRテンプレート

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
