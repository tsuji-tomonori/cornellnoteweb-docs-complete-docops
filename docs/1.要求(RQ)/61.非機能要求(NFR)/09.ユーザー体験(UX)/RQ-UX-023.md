---
id: RQ-UX-023
title: クラウドCI/CDにおけるアクセシビリティ検査の自動化とゲート
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
- **要求ID**: RQ-UX-023
- **種別**: 非機能要求（Non-functional（Quality/Accessibility｜Volere: 14 Maintainability and Support Requirements））
- **優先度**: MUST
- **要求**: 本システムは、クラウド上のCI/CDパイプラインでアクセシビリティ自動検査を継続的に実施し、重大な不適合を検出したビルドは本番環境へデプロイできないようにしなければならない。
- **根拠**: リグレッションを早期に検出し、修正コストとリリースリスクを低減するため。
- **受入基準**:
  - CI/CDにおいて、(1)PR/マージ時に自動検査（例：axe/pa11y/Lighthouse相当）を実行し、重大/深刻の違反が閾値（例：0件）を超えた場合は失敗扱いとする、(2)結果レポートをアーティファクトとして保存し追跡可能にすることを、パイプライン設定と実行結果で確認する（検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: QA／DevOps
- **参考資料**: CI/CD設計、テスト戦略、検査ツール設定、改善チケット運用ルール

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
