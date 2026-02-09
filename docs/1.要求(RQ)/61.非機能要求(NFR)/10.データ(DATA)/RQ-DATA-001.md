---
id: RQ-DATA-001
title: データ要求（整合性・移行・削除）
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related: []
tags:
- CornellNoteWeb
- RQ
- NFR
---

## 要求
- 一意制約/外部キーにより整合性を担保する
- マイグレーションは順序付きで適用される
- 論理削除と保持期間の方針が明記される

## 受入基準
- DDL/制約が設計文書と一致する（[[DD-DDL-001]] / [[DD-DBCON-001]]）
- バックアップ/復旧手順がある（[[AT-RUN-001]]）

## 関連
- 機能要求: [[RQ-FR-003]] など
- 運用: [[AT-RUN-001]]

## 変更履歴
- 2026-01-31: 初版
