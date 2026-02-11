---
id: RQ-INT-004
title: テレメトリ標準（OpenTelemetry）
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
- INT
---

## SnowCard（日本語）
- **要求ID**: RQ-INT-004
- **種別**: 非機能要求（Non-functional（Observability/Portability））
- **優先度**: MAY
- **要求**: 本システムは、ログ、メトリクス、およびトレースの出力において、OpenTelemetry等の標準フォーマット/SDKを用い、観測データの移植性を確保しなければならない。
- **根拠**: ツール変更やマルチ環境での運用を容易にするため。
- **受入基準**:
  - 主要サービスが標準SDKでテレメトリを出力し、バックエンドを変更しても収集できることを検証する（テスト＋検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: SRE／開発
- **参考資料**: テレメトリ設計

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
