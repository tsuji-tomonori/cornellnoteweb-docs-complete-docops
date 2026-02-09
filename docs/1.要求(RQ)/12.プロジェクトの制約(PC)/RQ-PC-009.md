---
id: RQ-PC-009
title: コミットメッセージはConventional Commits準拠
doc_type: プロジェクトの制約
phase: RQ
version: 1.0.1
status: 承認
owner: 開発リード
created: 2026-02-09
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-DG-001]]'
- '[[BD-CM-001]]'
- '[[RQ-RDR-009]]'
tags:
- CornellNoteWeb
- RQ
- PC
---

## 制約内容
- コミットメッセージは Conventional Commits（`type(scope)!: subject`）に従う。
- `type` は `feat` / `fix` / `docs` / `refactor` / `test` / `chore` を標準とする。
- `subject` と本文は日本語で記載する。
- 詳細フォーマットは `/.gitmessage` と `git-commit` スキルで統一管理する。

## 根拠
- 変更の意図を履歴から追跡しやすくし、レビュー効率を上げるため。

## 影響
- コミット時にメッセージ作成ルール確認が必須になる。
- 例外が必要な場合は [[RQ-RDR-009]] に決定記録を残す。

## 変更履歴
- 2026-02-09: 初版
- 2026-02-09: コミットメッセージ本文言語を日本語へ明記
