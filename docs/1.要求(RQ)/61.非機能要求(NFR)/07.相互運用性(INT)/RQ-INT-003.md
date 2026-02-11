---
id: RQ-INT-003
title: API仕様の標準化（OpenAPI）
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
- '[[RQ-DEV-005]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- INT
---

## SnowCard（日本語）
- **要求ID**: RQ-INT-003
- **種別**: 非機能要求（Non-functional（Interoperability/Documentation））
- **優先度**: SHOULD
- **要求**: 本システムは、外部公開または社内公開するHTTP APIについて、OpenAPI形式の仕様を提供し、仕様と実装の整合性を維持しなければならない。
- **根拠**: 利用者の開発効率と統制を向上させるため。
- **受入基準**:
  - OpenAPI仕様がリポジトリで管理され、CIで仕様と実装（例：スキーマ、エンドポイント）が不整合の場合に検出されることを確認する（検査＋テスト）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - [[RQ-DEV-005]]
- **起案者**: 開発リード
- **参考資料**: API設計標準、OpenAPI仕様

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
