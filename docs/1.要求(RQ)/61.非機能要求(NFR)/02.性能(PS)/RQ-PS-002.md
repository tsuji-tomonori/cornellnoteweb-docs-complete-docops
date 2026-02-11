---
id: RQ-PS-002
title: 画面応答（ユーザ体感）
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
- PS
---

## SnowCard（日本語）
- **要求ID**: RQ-PS-002
- **種別**: 非機能要求（Non-functional（Usability/Performance））
- **優先度**: SHOULD
- **要求**: 本システムは、主要画面のユーザインタラクション（検索・登録等）に対して、ユーザが結果を視認可能になるまでの時間をp95 2.0秒以下に維持しなければならない。
- **根拠**: UXを確保し離脱を防止するため。
- **受入基準**:
  - RUMまたは合成監視で主要操作のp95を測定し、SLOを満たすことを確認する（テスト＋分析）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: 事業部門／UX
- **参考資料**: RUM設計、UX指標定義

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
