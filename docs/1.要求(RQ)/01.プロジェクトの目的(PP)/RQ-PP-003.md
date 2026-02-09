---
id: RQ-PP-003
title: ノートの共有・配布を支援する
doc_type: プロジェクトの目的
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[RQ-UC-002]]'
- '[[RQ-FR-002]]'
- '[[RQ-SC-001]]'
related:
- '[[RQ-SEC-001]]'
tags:
- CornellNoteWeb
- RQ
- PP
---
# RQ-PP-003 ノートの共有・配布を支援する

## SnowCard（日本語）
- **要求ID**: RQ-PP-003
- **種別**: プロジェクトの目的
- **優先度**: Could
- **要求**: 本プロジェクトは、利用者がノートをPDF等で出力し、または共有リンクで閲覧共有できる手段を提供する。
- **根拠**: 復習・提出・レビュー等の用途で外部共有が求められるため。
- **成功条件（Fit Criterion）**:
  - PDFエクスポート（[[RQ-UC-006]]）で、Cue/Notes/Summaryの区画が判別できるPDFが生成できる。
  - 共有リンク（[[RQ-UC-007]]）で、第三者が閲覧専用でノートを閲覧できる。
- **依存/関連**:
  - ユースケース: [[RQ-UC-002]] ほか
  - 機能要求: [[RQ-FR-001]]〜
  - 非機能要求: [[RQ-SEC-001]] / [[RQ-UX-001]] ほか

## メモ
- CornellNoteWeb は「Cue/Notes/Summary」を1画面で編集できることが核となる（[[BD-UI-002]]）。

## 変更履歴
- 2026-01-31: 初版