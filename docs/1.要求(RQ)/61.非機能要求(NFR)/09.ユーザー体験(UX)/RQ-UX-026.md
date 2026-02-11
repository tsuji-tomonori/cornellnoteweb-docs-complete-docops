---
id: RQ-UX-026
title: 言語指定（Language of Page/Parts）
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
- **要求ID**: RQ-UX-026
- **種別**: 非機能要求（Non-functional（Cultural/Accessibility｜Volere: 16 Cultural and Political Requirements））
- **優先度**: SHOULD
- **要求**: 本システムは、ページの主要言語および部分的に言語が異なる箇所について、言語情報をプログラム的に指定しなければならない。
- **根拠**: スクリーンリーダーが適切な読み上げ言語に切り替えられるようにし、誤読を防ぐため。
- **受入基準**:
  - 主要画面において、(1)ページ全体の言語がlang属性等で指定されている、(2)外来語や英数字など別言語のまとまりがある場合に部分langが指定される、(3)スクリーンリーダーで読み上げが不自然にならないことを確認する（検査）。
- **例外/エラー**:
  - 前提条件や依存要件が未達の場合は、暫定対策・期限・責任者を記録し、次回リリースまでに是正する。
- **依存・関連**:
  - なし
- **起案者**: UX／ローカライズ
- **参考資料**: i18n方針、言語切替仕様、WCAG 2.2: 3.1.1, 3.1.2（参照）

## 変更履歴
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
