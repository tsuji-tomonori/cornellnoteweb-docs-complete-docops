---
id: RQ-PC-003
title: AWS デプロイは CDK によりIaC化
doc_type: プロジェクトの制約
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-SEC-001]]'
- '[[RQ-PRC-001]]'
tags:
- CornellNoteWeb
- RQ
- PC
---

## 制約内容
- 本番相当は AWS CDK で再現可能であること。
- Secretsは Secrets Manager を使用しコードへ埋め込まない。

## 根拠
- 再現性・監査性を確保するため。

## 影響
- 技術/運用の自由度が制限されるため、例外が必要な場合は [[RQ-RDR-001]]（要求決定記録）として残す。

## 変更履歴
- 2026-01-31: 初版
