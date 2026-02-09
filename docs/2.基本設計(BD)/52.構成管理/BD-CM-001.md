---
id: BD-CM-001
title: 構成管理方針（Git/Secrets/Docs）
doc_type: 構成管理
phase: BD
version: 1.0.1
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-DG-001]]'
related:
- '[[RQ-PC-005]]'
tags:
- CornellNoteWeb
- BD
- CM
---

## Git運用
- ブランチ: `main` + feature branches
- マージ: Pull Request（レビュー必須）
- リリース: タグ（例: `v0.1.0`）

## 自動整形/品質（pre-commit）
- `pre-commit` を有効化する（Taskfileの `task precommit`）
- Javaフォーマット: Spotless（google-java-format）
- 静的解析: PMD / SpotBugs

## Secrets管理
- ローカル: `.env`/環境変数（リポジトリにコミットしない）
- AWS: Secrets Manager（DB接続情報など）

## ドキュメント管理（Obsidian）
- `docs/` をVaultとして扱う。
- 1ファイル最小単位、ファイル名=ID、Frontmatterは `up/related` を必須とする（[[RQ-RTM-001]]）。
- 親子方向は `up` と Backlink で追跡し、静的な下位一覧は持たない。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: リンク規約を up/related + Backlink 運用に更新
