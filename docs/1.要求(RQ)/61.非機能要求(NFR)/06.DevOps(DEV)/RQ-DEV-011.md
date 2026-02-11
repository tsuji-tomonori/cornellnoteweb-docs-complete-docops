---
id: RQ-DEV-011
title: タグ統制の多層ガバナンス（Tag Policy/IAM/SCP/Config）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-006
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-015]]'
related:
- '[[RQ-COST-007]]'
- '[[RQ-SEC-021]]'
- '[[RQ-DEV-009]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- DEV
---

## SnowCard（日本語）
- **要求ID**: RQ-DEV-011
- **種別**: 非機能要求（Non-functional（Governance/DevOps））
- **優先度**: MUST
- **要求**: 本システムは、タグ運用を「標準化（Organizations Tag Policy）」「予防（IAM/SCP）」「検知（AWS Config required-tags）」の3層で統制し、作成時と運用時の両方で非準拠タグを管理しなければならない。
- **根拠**: タグポリシー単体では必須タグ欠落の防止が不十分であり、統制レイヤを分離しないと準拠率が維持できないため。
- **受入基準**:
  - Tag Policyでキーの大小文字と許容値が定義され、`report_required_tag_for` による必須キー準拠レポートが取得できること（検査）。
  - 作成APIに対してタグ欠落または誤キーを拒否するIAM/SCP制御が主要サービスで有効化されていること（テスト＋検査）。
  - AWS Config `required-tags` により対象リソースの非準拠検知が継続実行され、是正SLAが運用されていること（分析）。
- **例外/エラー**:
  - サービス制約でSCP強制不可のアクションは、検知レイヤと手動承認を必須にし、次期改善計画へ登録する。
- **依存・関連**:
  - [[RQ-COST-007]]
  - [[RQ-SEC-021]]
  - [[RQ-DEV-009]]
- **起案者**: 開発リード／運用
- **参考資料**: AWS Organizations Tag Policies、AWS IAM ABAC、AWS Config required-tags

## 変更履歴
- 2026-02-11: 初版
