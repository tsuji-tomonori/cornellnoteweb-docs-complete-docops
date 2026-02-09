---
id: AT-OPS-001
title: 運用受入チェックリスト
doc_type: 運用受入チェックリスト
phase: AT
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-AV-001]]'
- '[[RQ-OBY-001]]'
- '[[BD-RET-001]]'
- '[[BD-MON-002]]'
down:
- '[[AT-RUN-001]]'
related:
- '[[BD-MON-001]]'
tags:
- CornellNoteWeb
- AT
- OPS
---
# AT-OPS-001 運用受入チェックリスト

## チェック項目（抜粋）
- [ ] 監視ダッシュボードがある（主要SLI）
- [ ] アラート通知先が設定されている
- [ ] ログに個人情報/ノート本文が出ていない
- [ ] バックアップ/復旧手順がある
- [ ] Secretsがコード/ログに出ていない
- [ ] E2E Seed APIがprodで無効化されている

## 変更履歴
- 2026-01-31: 初版