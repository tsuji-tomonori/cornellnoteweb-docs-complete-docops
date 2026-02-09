---
id: RQ-DG-001
title: ドキュメント更新フローと受け入れ基準
doc_type: ドキュメントガバナンス
phase: RQ
version: 1.0.1
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- RQ
- DG
---

## 目的
- ドキュメントが「最新・一貫・追跡可能」である状態を保つ。

## 更新フロー（推奨）
```mermaid
flowchart TD
  A[変更提案] --> B[対象ドキュメント特定]
  B --> C[最小単位へ分割]
  C --> D[up/related を更新]
  D --> E[レビュー依頼]
  E --> F{承認?}
  F -- Yes --> G[mainへマージ]
  F -- No --> C
  G --> H[必要ならADR/RDR追記]
```

## 受入基準（Definition of Done）
- 必須Frontmatter（id/title/doc_type/phase/version/status/owner/created/updated/up/related/tags）が埋まっている
- ファイル名＝ID、Frontmatterに `up/related` がある
- 図はMermaid、一覧は個別ファイルへのリンク集である
- 変更が要求/設計/テストのどこに影響するかがリンクで辿れる
- 重要判断は ADR（[[BD-ADR-001]]）または RDR（[[RQ-RDR-001]]）に残っている

## レビュー観点
- **リンクの整合**: `up` と Backlink で双方向に辿れるか
- **粒度**: 1ファイルに複数の決定/要求が混在していないか
- **実装との乖離**: 乖離がある場合は「既知ギャップ」として明記（[[DD-ERR-001]]）

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: 受入基準を up/related と Backlink 前提に更新
