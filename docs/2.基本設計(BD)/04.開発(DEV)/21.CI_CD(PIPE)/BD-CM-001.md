---
id: BD-CM-001
title: 構成管理方針（Git/Secrets/Docs）
doc_type: 構成管理
phase: BD
version: 1.0.8
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
- Codex skills は 1スキル=1ドキュメント種別で管理し、差分が出た場合は同一PRで更新する。

## skillsメンテナンス方針
- 種別追加/改名/廃止時に対応スキルを更新する。
- ドキュメント規約変更時（Frontmatter、リンク、レビュー基準）は共通スキルも同時更新する。
- メンテ手順は `skill-maintainer` を基準に実施する。
- 要求追加/意味変更はRDR必須、設計追加/意味変更はADR必須の運用をスキルにも反映する。
- SnowCardの必須記載項目は、要求/設計資料と `doc-rq-*` スキルで明文化する。
- Frontmatter主要項目（doc_type/phase/version/status/owner）の値運用ルールは、要求/設計資料と共通スキルに反映する。
- owner値は `RQ-SH-*` に定義された責務ロールのみを許可し、未定義ロールは先にSHへ追加する。
- コミットメッセージは Conventional Commits（`type(scope)!: subject`）へ統一し、`/.gitmessage` を利用する。
- コミットメッセージの `subject` と本文は日本語で記載する。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: リンク規約を up/related + Backlink 運用に更新
- 2026-02-09: skillsの1対1対応とメンテ方針を追加
- 2026-02-09: RDR/ADR必須ゲートをskillsメンテ方針に追加
- 2026-02-09: SnowCard必須記載項目の明文化先を追加
- 2026-02-09: Frontmatter主要項目の値運用ルール反映を追加
- 2026-02-09: ownerのSHロール限定ルールを追加
- 2026-02-09: Conventional Commits運用ルールを追加
- 2026-02-09: コミットメッセージ本文言語を日本語へ明記
