---
id: RQ-OBY-005
title: ヘルスチェック（Liveness/Readiness）
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
- '[[RQ-AV-003]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- OBY
---

## SnowCard（日本語）
- **要求ID**: RQ-OBY-005
- **種別**: 非機能要求（Non-functional（Reliability/Operability））
- **優先度**: MUST
- **要求**: 本システムは、稼働状態を判定するヘルスチェックを提供し、異常時に自動復旧または切離しが可能な状態を維持しなければならない。
- **根拠**: 自動回復とフェイルオーバ判断の精度を向上させるため。
- **受入基準**:
  - ヘルスチェックがLivenessとReadinessを区別して提供され、障害時に期待どおりの状態遷移となることを確認する（テスト）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-AV-003]]
- **起案者**: SRE／開発
- **参考資料**: ヘルスチェック仕様

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
