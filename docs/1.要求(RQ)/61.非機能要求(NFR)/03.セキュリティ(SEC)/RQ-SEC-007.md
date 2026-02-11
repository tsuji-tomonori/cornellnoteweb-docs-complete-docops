---
id: RQ-SEC-007
title: 脆弱性管理（修正SLA）
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
- '[[RQ-DEV-002]]'
- '[[RQ-PC-005]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- SEC
---

## SnowCard（日本語）
- **要求ID**: RQ-SEC-007
- **種別**: 非機能要求（Non-functional（Security/Vulnerability））
- **優先度**: MUST
- **要求**: 本システムは、利用するOS・ミドルウェア・ライブラリの脆弱性を継続的に検出し、重大度Criticalの脆弱性を7日以内に修正または緩和しなければならない。
- **根拠**: 既知脆弱性の放置を防ぐため。
- **受入基準**:
  - スキャン結果とチケット履歴で、Criticalが7日以内にクローズされている比率が100%であることを確認する（分析）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-DEV-002]]
- **起案者**: セキュリティ／運用
- **参考資料**: 脆弱性対応SLA、SBOM方針

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
