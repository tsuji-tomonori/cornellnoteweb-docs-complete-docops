---
id: RQ-COST-001
title: コスト配賦（AWSタグ標準）
doc_type: 非機能要求
phase: RQ
version: 1.0.2
status: 承認
owner: RQ-SH-002
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-010]]'
- '[[RQ-RDR-015]]'
related:
- '[[RQ-COST-002]]'
- '[[RQ-COST-007]]'
- '[[RQ-DEV-011]]'
- '[[RQ-SEC-021]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- COST
---

## SnowCard（日本語）
- **要求ID**: RQ-COST-001
- **種別**: 非機能要求（Non-functional（Cost Management））
- **優先度**: MUST
- **要求**: 本システムは、クラウド利用費をサービス/環境/チーム単位で集計可能にするために、全対象リソースへ標準化したAWSタグ（必須キー、命名規則、許容値）を付与し、コスト配分タグとして有効化しなければならない。
- **根拠**: 表記ゆれやタグ欠落を防止し、請求分析と配賦の再現性を担保するため。
- **受入基準**:
  - 必須タグ `CostCenter` `Environment` `Owner` `Project` `ManagedBy` の定義（意味、許容値、責任者）が文書化され、主要リソースに適用されていることを確認する（検査）。
  - 管理アカウントでコスト配分タグが有効化され、有効化後48時間以内に課金レポートで95%以上の費用が配賦先に紐付くことを確認する（分析）。
- **例外/エラー**:
  - タグ未対応リソースは例外申請（期限・暫定オーナー・是正計画）を必須とし、未申請のまま本番運用してはならない。
- **依存・関連**:
  - [[RQ-COST-002]]
  - [[RQ-COST-007]]
  - [[RQ-DEV-011]]
  - [[RQ-SEC-021]]
- **起案者**: FinOps／運用
- **参考資料**: AWS Tagging Best Practices、AWS Billing（Cost Allocation Tags）

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: NFR_all.txt をもとにSnowCard形式へ再定義
- 2026-02-11: AWSタグ標準（必須キー/有効化/配賦率）を追記
