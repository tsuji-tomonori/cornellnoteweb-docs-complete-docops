---
id: UT-IAC-LINT-001
title: IaC静的検証（lint / policy-as-code）
doc_type: インフラ静的テスト
phase: UT
version: 1.0.0
status: 下書き
owner: DevOps
created: 2026-02-20
updated: 2026-02-20
up:
- '[[BD-CM-002]]'
- '[[BD-DEP-001]]'
related:
- '[[UT-STAT-001]]'
tags:
- CornellNoteWeb
- UT
- IAC-LINT
---

## 目的
Infrastructure as Code（IaC）に対して、**静的検証（lint / policy-as-code）**を適用し、以下を早期に検出する。

- 破壊的変更の混入（意図しない削除・置換）
- セキュリティ/コンプライアンス逸脱（公開範囲、暗号化、最小権限など）
- 設計ルール違反（命名、タグ、責務境界、CloudFront / S3 設定の前提差異など）

## 対象
- `infra/` 配下の CDK / CloudFormation（該当する場合）
- 付随する設定ファイル（例: JSON/YAML、GitHub Actions、Taskfile 等）

## 実施方法（例）
> 実際の採用ツールはプロジェクト事情に合わせて調整する。

- **cfn-lint**: CloudFormationテンプレートの構文/ベストプラクティス
- **cdk-nag**: CDK構成のセキュリティ観点チェック
- **checkov / tfsec（Terraform採用時）**: セキュリティポリシー違反検出
- **独自ルール**: タグ付与、命名規約、環境分割方針

## 合格基準
- 重大度 High 以上の検出が 0 件
- Medium 以下はチケット化し、期限と担当を設定

## 変更履歴
- 2026-02-20: 初版
