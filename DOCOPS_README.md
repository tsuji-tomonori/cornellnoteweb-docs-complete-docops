# Codex × Obsidian ドキュメント運用 SkillPack

このリポジトリは **Obsidian Vault（Markdown）を Codex で自動更新**するための、`AGENTS.md` と **Agent Skills**、および補助スクリプト群です。

## できること
- 自然言語の指示から、既存ドキュメントを規約どおりに更新（Frontmatter・リンク・変更履歴を維持）
- 新規ドキュメントを採番して作成（`{フェーズ}-{略称}-{連番3桁}.md`）
- `up / related` のリンク整合チェック
- 指定IDから影響範囲（上位/下位/関連）を抽出してレポート化（`reports/impact_*.md`）
- ドキュメント種別ごとの「書く/書かない」をスキルとして提供（例: `$doc-rq-fr`, `$doc-bd-api`）
- スキル保守用に `$skill-maintainer` を提供（種別変更や規約変更時に使用）

## 前提
- **Codex CLI** を使います（ローカルで実行）。インストール例:
  - `npm i -g @openai/codex` でインストールし、`codex` を実行してサインインします。\
    ※詳細は Codex CLI ドキュメント参照。  (\*引用は本READMEには付けていません)
- Codex は安全のため **Git リポジトリ内での実行を前提**にしています。必要なら `git init` してください。

## セットアップ（あなたのObsidian Vaultに適用）
1. あなたの Obsidian Vault（またはドキュメントリポジトリ）のルートに、以下をコピーします。
   - `AGENTS.md`
   - `.codex/`
   - （任意）`tools/`（ラッパースクリプト）
2. Vault ルートで `codex` を起動（インタラクティブ）するか、`codex exec` を使います。

## 使い方（例）

### 1) インタラクティブ（推奨）
Vault ルートで:

```bash
codex
```

- スキル一覧: `/skills`
- 例: 既存ドキュメント更新（影響確認まで）
  `"$docops-orchestrator RQ-FR-001 の受入基準に「Aの場合はBする」を追加して"`

### 2) 非対話（スクリプト/CI）
`codex exec` で1回の実行にまとめます。

```bash
codex exec --full-auto "$docops-orchestrator\nRQ-FR-001 の受入基準を追記して。最後に $obsidian-doc-check を実行して reports/ に保存して。"
```

- `codex exec` は進捗を `stderr`、最終メッセージを `stdout` に出します。
- `--full-auto` はワークスペース書き込みを許可する便利フラグです（安全設定は必要最小に）。

### 3) 便利ラッパー
- macOS/Linux/WSL: `tools/docops.sh`
- Windows PowerShell: `tools/docops.ps1`

例:

```bash
./tools/docops.sh "RQ-FR-001 の受入基準に『成功時は一覧へ遷移』を追加し、関連リンクも必要なら直して。"
```

## ディレクトリ
- `.codex/skills/` : Codex Agent Skills
- `tools/` : `codex exec` ラッパー、補助ツール
- `examples/` : 指示文（自然言語）サンプル

---

> NOTE: 本SkillPackは「1トピック=1ファイル」「Obsidianリンクによるトレーサビリティ」を前提に設計しています。
> 既存の運用が違う場合は `AGENTS.md` をあなたのルールに合わせて調整してください。
