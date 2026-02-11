---
id: RQ-SEC-011
title: WAFおよびDDoS防御
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
- '[[RQ-AV-001]]'
- '[[RQ-PC-005]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- SEC
---

## SnowCard（日本語）
- **要求ID**: RQ-SEC-011
- **種別**: 非機能要求（Non-functional（Security/Network））
- **優先度**: SHOULD
- **要求**: 本システムは、インターネット公開エンドポイントに対して、WAFによる防御ルールおよびDDoS緩和策を適用しなければならない。
- **根拠**: 一般的なWeb攻撃（OWASP Top 10等）と大量トラフィック攻撃への耐性を高めるため。
- **受入基準**:
  - WAFが有効化され、少なくともSQLi/XSS等の基本ルールが適用されていること、DDoS対策が有効であることを設定証跡で確認する（検査）。模擬攻撃でブロック/検知が行われることを確認する（テスト）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-AV-001]]
- **起案者**: セキュリティ／SRE
- **参考資料**: WAFルール方針、ネットワーク設計

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
