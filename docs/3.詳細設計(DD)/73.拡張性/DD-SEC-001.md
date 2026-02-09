---
id: DD-SEC-001
title: セキュリティ統制（詳細）
doc_type: 拡張性
phase: DD
version: 1.0.0
status: 下書き
owner: セキュリティ担当
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-SEC-001]]'
down: []
related:
- '[[DD-LOG-001]]'
tags:
- CornellNoteWeb
- DD
- SEC
---
# DD-SEC-001 セキュリティ統制（詳細）

## 詳細統制（案）
- IAM: 最小権限（LambdaがS3/SQS/Secretsへ必要な権限のみ）
- Secrets: Secrets Manager でローテーション可能に
- データ暗号化: RDS/S3の暗号化を有効化
- 監査: 共有リンク生成/取り消し、削除を監査ログに
- WAF: 公開APIにWAF適用（将来）
- 依存関係: 依存スキャン（将来: Dependabot等）

## 脆弱性対応フロー（案）
```mermaid
flowchart LR
  A[検知（スキャン/報告）] --> B[影響評価]
  B --> C{緊急?}
  C -- Yes --> D[ホットフィックス]
  C -- No --> E[通常リリース]
  D --> F[リリース/検証]
  E --> F
  F --> G[ポストレビュー]
```

## 変更履歴
- 2026-01-31: 初版