---
id: DD-COST-001
title: FinOps（コスト運用）詳細
doc_type: 拡張性
phase: DD
version: 1.0.1
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-COST-001]]'
- '[[RQ-COST-007]]'
- '[[RQ-DEV-011]]'
- '[[BD-ADR-009]]'
- '[[BD-DEP-002]]'
related:
- '[[BD-DEP-002]]'
- '[[BD-CM-002]]'
- '[[RQ-SEC-021]]'
tags:
- CornellNoteWeb
- DD
- COST
---

## 方針
- 日次/週次で主要コスト（DB、S3、CloudWatch、データ転送）をモニタする。
- リソースタグで環境/コストセンタを分離（infra/stack.ts参照）。

## 実装詳細
- IaCは共通タグセットを必須注入し、任意タグは `Tag Dictionary` の許可値のみ受け付ける。
- Organizations Tag Policyでキーのケースと許容値を評価し、`report_required_tag_for` を監査レポートに出力する。
- IAM/SCPで `aws:RequestTag/<key>` と `aws:TagKeys` を利用し、誤キーと必須欠落の作成操作を拒否する。
- AWS Config `required-tags` で主要リソース種別を監査し、非準拠をチケット化する。

## タグポリシー例
```json
{
  "tags": {
    "CostCenter": {
      "tag_key": {
        "@@assign": "CostCenter"
      }
    },
    "Environment": {
      "tag_key": {
        "@@assign": "Environment"
      },
      "tag_value": {
        "@@assign": ["Production", "Staging", "Development", "Test"]
      }
    },
    "Owner": {
      "tag_key": {
        "@@assign": "Owner"
      }
    },
    "Project": {
      "tag_key": {
        "@@assign": "Project"
      }
    },
    "ManagedBy": {
      "tag_key": {
        "@@assign": "ManagedBy"
      },
      "tag_value": {
        "@@assign": ["CDK", "Terraform", "Console", "DockerCompose"]
      }
    }
  }
}
```

## 運用（案）
- 週次: stg/prod のコスト差分を確認
- 月次: 予算上限を超過しそうならスケールダウン/保持期間短縮を検討
- PDF保持: ライフサイクルで自動削除（例: 7日）
- 月次: 必須タグ準拠率と配賦率を確認し、95%未満は改善計画を登録

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: タグ統制の実装詳細（Tag Policy/IAM/SCP/Config）を追記
