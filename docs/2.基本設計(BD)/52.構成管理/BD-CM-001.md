---
id: BD-CM-001
title: 構成管理方針（Git/Secrets/Docs）
doc_type: 構成管理
phase: BD
version: 1.0.3
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

## 変更履歴
- 2026-01-31: 初版
- 2026-02-09: リンク規約を up/related + Backlink 運用に更新
- 2026-02-09: skillsの1対1対応とメンテ方針を追加
- 2026-02-09: RDR/ADR必須ゲートをskillsメンテ方針に追加
