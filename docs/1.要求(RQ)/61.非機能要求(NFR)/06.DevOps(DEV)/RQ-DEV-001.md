---
id: RQ-DEV-001
title: Infrastructure as Code（IaC）
doc_type: 非機能要求
phase: RQ
version: 1.0.1
status: 承認
owner: RQ-SH-002
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-010]]'
related:
- '[[RQ-SEC-009]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- DEV
---

## SnowCard（日本語）
- **要求ID**: RQ-DEV-001
- **種別**: 非機能要求（Non-functional（Maintainability/Operability））
- **優先度**: MUST
- **要求**: 本システムは、クラウドリソースおよび設定をInfrastructure as Codeとして定義し、再現可能な手順で環境を構築しなければならない。
- **根拠**: 構成ドリフト防止、再現性、監査容易性のため。
- **受入基準**:
  - 本番相当環境がIaCのみで新規構築でき、手作業変更が検知・是正される運用が定義されていることを確認する（実演＋検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-SEC-009]]
- **起案者**: プラットフォーム／運用
- **参考資料**: IaC標準、リポジトリ

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
