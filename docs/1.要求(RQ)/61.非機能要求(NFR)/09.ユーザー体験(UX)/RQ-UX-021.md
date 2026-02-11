---
id: RQ-UX-021
title: 堅牢性（HTML/ARIA準拠）と支援技術互換
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
- UX
---

## SnowCard（日本語）
- **要求ID**: RQ-UX-021
- **種別**: 非機能要求（Non-functional（Maintainability/Compatibility｜Volere: 14 Maintainability and Support Requirements））
- **優先度**: MUST
- **要求**: 本システムは、HTML/ARIA等の仕様に準拠した実装を行い、主要な支援技術・主要ブラウザの組合せで操作可能であることを保証しなければならない。
- **根拠**: 支援技術の解釈に依存した不具合を抑制し、将来の拡張やブラウザ更新に対する耐性を高めるため。
- **受入基準**:
  - 主要画面に対して、(1)重大なHTML/ARIAの文法違反・禁止パターンが0件（lint/validator）、(2)スクリーンリーダー検証（例：NVDA+Firefox、VoiceOver+Safari、TalkBack+Chromeのいずれかを含む）で主要フローが完了できることを確認し、結果を記録する（テスト＋検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: フロントエンド／QA
- **参考資料**: コーディング規約、ARIAガイド、対応ブラウザ/支援技術マトリクス、WCAG 2.2: 4.1.1, 4.1.2（参照）

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
