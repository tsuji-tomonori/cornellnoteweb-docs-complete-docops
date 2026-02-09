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
- `up/down/related` のリンク先が存在するか
- `up/down` の相互整合（片側だけになっていないか）
- `## 変更履歴` の有無

## 使い方
- レポートを保存:
  - `python .codex/skills/obsidian-doc-check/scripts/validate_vault.py --report reports/doc_check.md`
- 相互リンクの自動補完（注意: ファイルを書き換える）:
  - `python .codex/skills/obsidian-doc-check/scripts/validate_vault.py --fix-reciprocal --report reports/doc_check_fixed.md`

## 出力
- stdout: Markdownレポート
- `--report` 指定時: 指定パスへ保存

