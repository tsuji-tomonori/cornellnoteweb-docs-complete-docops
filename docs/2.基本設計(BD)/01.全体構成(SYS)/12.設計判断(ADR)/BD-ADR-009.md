---
id: BD-ADR-009
title: AWSタグ統制を3層モデルで実装する
doc_type: ADR
phase: BD
version: 1.0.0
status: 承認
owner: RQ-SH-005
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-RDR-015]]'
related:
- '[[BD-CM-002]]'
- '[[BD-ENV-002]]'
- '[[BD-DEP-002]]'
- '[[DD-COST-001]]'
tags:
- CornellNoteWeb
- BD
- ADR
---

## ステータス
- Accepted
- 日付: 2026-02-11

## Context
タグ運用はコスト配賦、運用自動化、ABACの前提となるが、単一の統制手段ではタグ欠落や表記ゆれを抑止しきれない。Organizations Tag Policyは標準化に有効だが、必須タグ欠落の強制にはIAM/SCP、運用時検知にはConfigが必要である。

## Decision
- タグ統制は以下の3層モデルを採用する。
  - 標準化: Organizations Tag Policy（キーケース、許容値、`report_required_tag_for`）
  - 予防: IAM/SCP（`aws:RequestTag` `aws:TagKeys` で作成時拒否）
  - 検知: AWS Config `required-tags`（非準拠の可視化と是正）
- 必須タグは `CostCenter` `Environment` `Owner` `Project` `ManagedBy` とし、Tag Dictionaryで管理する。
- タグへPII/秘密情報を格納しない運用をセキュリティ統制へ組み込む。

## Consequences
- タグ準拠率と配賦精度の継続改善が可能になる。
- 組織とサービス差分を吸収するため、例外台帳と定期レビュー運用が必要になる。

## Alternatives
- Organizations Tag Policyのみで運用する。
- IaCの任意ルールのみで運用し、AWSネイティブ統制を使わない。

## References
- [[RQ-RDR-015]]
- [[BD-CM-002]]
- [[BD-ENV-002]]
- [[BD-DEP-002]]
- [[DD-COST-001]]

## 変更履歴
- 2026-02-11: 初版
