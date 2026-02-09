---
id: AT-GO-001
title: リリース判定（Go/No-Go）
doc_type: リリース判定
phase: AT
version: 1.0.0
status: 下書き
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[AT-RCHK-001]]'
related:
- '[[DD-ERR-001]]'
tags:
- CornellNoteWeb
- AT
- GO
---

## 判定基準（例）
- Must要求が満たされている（[[RQ-FR-001]]〜）
- セキュリティ上の重大リスクがない（[[RQ-SEC-001]]）
- 既知ギャップが利用者価値を阻害しない（[[DD-ERR-001]]）

## 判定（サンプル）
- 判定: No-Go（エディタUIのAPI統合が未完了のため）
- 条件付きGoの条件:
  - エディタ保存/共有/PDFがAPIと接続される
  - Note.statusの不整合が解消される

## 変更履歴
- 2026-01-31: 初版
