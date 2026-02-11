---
id: RQ-SEC-021
title: タグ情報の機密保護とABAC整合
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-004
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-015]]'
related:
- '[[RQ-SEC-001]]'
- '[[RQ-COST-007]]'
- '[[RQ-DEV-011]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- SEC
---

## SnowCard（日本語）
- **要求ID**: RQ-SEC-021
- **種別**: 非機能要求（Non-functional（Tag Security/ABAC））
- **優先度**: MUST
- **要求**: 本システムは、タグへPII/秘密情報を保存せず、ABACで利用するタグキーの大小文字と許容キーを統制し、`Environment` と `environment` のような表記ゆれによる権限逸脱を防止しなければならない。
- **根拠**: タグは広範囲で参照され暗号化されないため、情報漏えいとアクセス制御不整合の双方を抑止する必要があるため。
- **受入基準**:
  - タグ禁止データ（PII/秘密情報）ルールと検査プロセスが定義され、監査サンプルで違反が検出されないこと（検査）。
  - IAMポリシーで `aws:TagKeys` と `aws:RequestTag/<key>` を用いた許容キー制御が実装され、誤キーのリクエストが拒否されること（テスト）。
  - Organizations Tag Policyでキーのケース標準が定義され、ABAC対象キーの非準拠が継続監視されること（分析）。
- **例外/エラー**:
  - 緊急運用で一時的にタグ制約を緩和する場合は、実施理由・期間・承認者を記録し、48時間以内に標準状態へ復帰する。
- **依存・関連**:
  - [[RQ-SEC-001]]
  - [[RQ-COST-007]]
  - [[RQ-DEV-011]]
- **起案者**: セキュリティ／運用
- **参考資料**: AWS IAM ABAC、AWS Tagging Best Practices

## 変更履歴
- 2026-02-11: 初版
