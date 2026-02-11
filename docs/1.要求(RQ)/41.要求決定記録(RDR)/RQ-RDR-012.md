---
id: RQ-RDR-012
title: DB非機能要件を国際規格セットで拡張する
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
- '[[RQ-DATA-001]]'
- '[[RQ-DATA-006]]'
- '[[RQ-DATA-007]]'
- '[[RQ-DATA-008]]'
- '[[RQ-DATA-009]]'
- '[[RQ-DATA-010]]'
- '[[RQ-DATA-011]]'
- '[[RQ-DATA-012]]'
- '[[RQ-DATA-013]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- 既存のDATA要求は整合性や移行に焦点があり、SQL準拠、メタデータ辞書、データ品質、ガバナンス、標準コード体系の要求が不足していた。
- DB設計レビューの基準を明確化するため、分散する国際規格を要求へ落とし込む必要がある。

## 選択肢
- A: 既存のDATA-001〜005に追記して一体化する
- B: 1トピック=1ファイルで不足観点をDATA-006以降へ分割追加する

## 決定
- B を採用。
- `RQ-DATA-006` から `RQ-DATA-013` を追加し、DB非機能のレビュー観点を拡張する。

## 決定理由
- 各観点を独立管理でき、規格更新時の差分反映とトレーサビリティが容易になる。
- 要求ごとに検証方法を定義できるため、受入判定が明確になる。

## 影響/フォローアップ
- DATAカテゴリは 13 要件で運用し、`[[RQ-DATA-001]]` を統括導線として維持する。
- 設計・テスト文書（BD/DD/UT/IT/AT）には、必要に応じて新規DATA要件リンクを段階反映する。
- 影響確認を `reports/impact_check_2026-02-11.md` に記録する。

## 参照規格
- ISO/IEC 9075（SQL）
- ISO/IEC 11179（Metadata registries）
- ISO/IEC 25012 / ISO 8000（Data quality）
- ISO/IEC 38505-1（Governance of data）
- ISO 8601 / ISO/IEC 10646 / ISO 3166 / ISO 4217 / ISO 639（値表現標準）

## 変更履歴
- 2026-02-11: 初版
