---
name: obsidian-doc-check
description: ObsidianドキュメントのFrontmatter/リンク/命名規約を検査しレポートする
metadata:
  short-description: ObsidianドキュメントのFrontmatter/リンク/命名規約を検査しレポートする
---

## 目的
ドキュメント規約のチェックを行い、問題点をレポートします。

## チェック内容（主）
- Frontmatter の有無・必須キー
- ファイル名 = `id`
- `up/related` のリンク先が存在するか
- `up` の参照先が存在し、Backlinkで辿れるか
- `## 変更履歴` の有無

## 使い方
- レポートを保存:
  - `python .codex/skills/obsidian-doc-check/scripts/validate_vault.py --report reports/doc_check.md`

## 出力
- stdout: Markdownレポート
- `--report` 指定時: 指定パスへ保存
