---
id: RQ-COST-007
title: AWSタグ辞書と必須タグ運用
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-002
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-015]]'
related:
- '[[RQ-COST-001]]'
- '[[RQ-DEV-011]]'
- '[[RQ-SEC-021]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- COST
---

## SnowCard（日本語）
- **要求ID**: RQ-COST-007
- **種別**: 非機能要求（Non-functional（FinOps/Tag Governance））
- **優先度**: MUST
- **要求**: 本システムは、AWSタグのTag Dictionary（キー、意味、許容値、必須区分、責任者）を定義し、全対象リソースに必須タグ `CostCenter` `Environment` `Owner` `Project` `ManagedBy` を一貫して適用しなければならない。
- **根拠**: タグの表記ゆれと欠落を抑止し、コスト配賦・運用自動化・責任分界を同一メタデータで成立させるため。
- **受入基準**:
  - Tag Dictionaryに必須タグの許容値（例: `Environment=Production|Staging|Development|Test`）と命名規則（`UpperCamelCase`）が定義され、レビュー承認されていること（検査）。
  - 対象リソースの95%以上が必須タグを満たし、欠落分は例外台帳で追跡されていること（分析）。
  - `aws:` プレフィックス利用やPII/秘密情報のタグ格納が検出されないこと（検査）。
- **例外/エラー**:
  - サービス仕様上タグ未対応のリソースは、代替識別子と補完手段を例外台帳に登録し、四半期ごとに是正可否を再判定する。
- **依存・関連**:
  - [[RQ-COST-001]]
  - [[RQ-DEV-011]]
  - [[RQ-SEC-021]]
- **起案者**: FinOps／運用
- **参考資料**: AWS Tagging Best Practices、AWS Tag Editor User Guide

## 変更履歴
- 2026-02-11: 初版
