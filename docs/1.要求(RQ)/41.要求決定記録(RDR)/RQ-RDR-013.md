---
id: RQ-RDR-013
title: 機能要求の優先度を .workspace 基準へ同期する
doc_type: 要求決定記録
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-002
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-FR-008]]'
- '[[RQ-FR-017]]'
- '[[RQ-FR-018]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- 現行の機能要求優先度と `.workspace/CornellNoteWeb/docs/01-要件定義/3.機能要求(FR)` の優先度に差分があった。
- 差分があると、MVP判定や実装順序の判断が資料間でぶれる。

## 選択肢
- A: 現行FRを維持し、`.workspace` を参考情報扱いにする。
- B: `.workspace` 側を正として、現行FRの優先度を同期する。

## 決定
- B を採用。
- 対象要件の優先度を `.workspace` 側に合わせて更新する。

## 決定理由
- 実装計画と要求優先度の一貫性を維持できる。
- 受入判定の基準が単一化され、レビュー効率が向上する。

## 影響/フォローアップ
- `RQ-FR-008` を `MUST` へ更新。
- `RQ-FR-017` と `RQ-FR-018` を `SHOULD` へ更新。
- 影響確認を `reports/impact_check_2026-02-11.md` へ記録する。

## 変更履歴
- 2026-02-11: 初版
