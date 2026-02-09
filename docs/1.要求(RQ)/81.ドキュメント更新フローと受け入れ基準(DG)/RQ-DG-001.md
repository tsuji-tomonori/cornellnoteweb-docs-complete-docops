---
id: RQ-DG-001
title: ドキュメント更新フローと受け入れ基準
doc_type: ドキュメントガバナンス
phase: RQ
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[BD-CM-001]]'
- '[[DD-REV-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- RQ
- DG
---
# RQ-DG-001 ドキュメント更新フローと受け入れ基準

## 目的
- ドキュメントが「最新・一貫・追跡可能」である状態を保つ。

## 更新フロー（推奨）
```mermaid
flowchart TD
  A[変更提案] --> B[対象ドキュメント特定]
  B --> C[最小単位へ分割]
  C --> D[up/down/related を更新]
  D --> E[レビュー依頼]
  E --> F{承認?}
  F -- Yes --> G[mainへマージ]
  F -- No --> C
  G --> H[必要ならADR/RDR追記]
```

## 受入基準（Definition of Done）
- テンプレ準拠（該当フォルダの `TEMPLATE.md` の必須項目が埋まっている）
- ファイル名＝ID、Frontmatterに `up/down/related` がある
- 図はMermaid、一覧は個別ファイルへのリンク集である
- 変更が要求/設計/テストのどこに影響するかがリンクで辿れる
- 重要判断は ADR（[[BD-ADR-001]]）または RDR（[[RQ-RDR-001]]）に残っている

## レビュー観点
- **リンクの整合**: 上位→下位のリンクが双方向に辿れるか（Backlinkで確認）
- **粒度**: 1ファイルに複数の決定/要求が混在していないか
- **実装との乖離**: 乖離がある場合は「既知ギャップ」として明記（[[DD-ERR-001]]）

## 変更履歴
- 2026-01-31: 初版