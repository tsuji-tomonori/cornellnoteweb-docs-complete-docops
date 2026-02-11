---
name: obsidian-doc-check
description: ObsidianドキュメントのFrontmatter/リンク/命名規約を検査しレポートする。使う場面: 文書更新後の整合確認、PR前チェック、リンク破損調査時。
metadata:
  short-description: ObsidianドキュメントのFrontmatter/リンク/命名規約を検査しレポートする
---

## 目的
ドキュメント規約のチェックを行い、問題点をレポートします。

## When to use me
- ドキュメント更新の最終確認をしたい
- `up/related` のリンク切れやBacklink不整合を検出したい
- PR前に規約違反をゼロにしたい

## When NOT to use me
- 文書内容の意味変更そのものが主目的（`obsidian-doc-change` / `docops-orchestrator` を使う）
- 新規採番と初期作成が主目的（`obsidian-doc-new` を使う）

## チェック内容（主）
- Frontmatter の有無・必須キー
- ファイル名 = `id`
- `up/related` のリンク先が存在するか
- `up` の参照先が存在し、Backlinkで辿れるか
- `## 変更履歴` の有無

## Workflow
- レポートを保存:
  - `python .opencode/skills/obsidian-doc-check/scripts/validate_vault.py --report reports/doc_check.md`

## Output contract
- stdout: Markdownレポート
- `--report` 指定時: 指定パスへ保存
