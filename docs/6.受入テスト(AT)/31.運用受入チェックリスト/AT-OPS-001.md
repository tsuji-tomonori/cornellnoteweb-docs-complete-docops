---
id: AT-OPS-001
title: 運用受入チェックリスト
doc_type: 運用受入チェックリスト
phase: AT
version: 1.0.1
status: 下書き
owner: RQ-SH-003
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-AV-001]]'
- '[[RQ-OBY-001]]'
- '[[RQ-COST-001]]'
- '[[RQ-COST-007]]'
- '[[RQ-DEV-011]]'
- '[[RQ-SEC-021]]'
- '[[BD-RET-001]]'
- '[[BD-MON-002]]'
related:
- '[[BD-MON-001]]'
- '[[BD-CM-002]]'
tags:
- CornellNoteWeb
- AT
- OPS
---

## チェック項目（抜粋）
- [ ] 監視ダッシュボードがある（主要SLI）
- [ ] アラート通知先が設定されている
- [ ] ログに個人情報/ノート本文が出ていない
- [ ] バックアップ/復旧手順がある
- [ ] Secretsがコード/ログに出ていない
- [ ] E2E Seed APIがprodで無効化されている
- [ ] 必須タグ（`CostCenter` `Environment` `Owner` `Project` `ManagedBy`）の準拠率が95%以上である
- [ ] `Environment` の列挙値逸脱（大小文字差分含む）がない
- [ ] コスト配分タグが管理アカウントで有効化され、配賦率95%以上を満たす
- [ ] AWS Config `required-tags` の非準拠が是正SLA内で解消されている
- [ ] タグにPII/秘密情報が含まれていないことを監査サンプルで確認済み

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: AWSタグ運用受入チェック（必須タグ/配賦率/監査）を追加
