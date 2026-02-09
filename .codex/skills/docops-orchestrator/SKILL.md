---
name: docops-orchestrator
description: 自然言語の依頼を起点に、対象ドキュメント更新と上位⇄下位の影響確認（必要なら更新）まで行う
metadata:
  short-description: 変更→影響分析→更新/確認→チェックを一気通貫で実行
---

## 目的
自然言語で与えられた依頼を、Obsidian Vault の規約に従って反映し、リンクグラフ（`up/related`）上の **整合性を更新 or 確認**します。

## 前提（必須）
- ドキュメント関係（上位/下位/関連）は **Frontmatter の `up/related`** で管理する
- 本文に「上位文書」「下位文書」セクションは作らない
- 一覧/マトリックスは Dataview で生成し、手更新の表は作らない
- **1スキル = 1ドキュメント（種別）** の対応を維持する（`doc-rq-fr`, `doc-bd-api` など）

## ドキュメント改修フロー（標準）
1. **対象の特定**
   - 依頼文にIDがあれば、それを優先（例: `RQ-FR-004`）
   - IDが無い場合は、タイトル/キーワードで検索して対象を確定する

2. **対応スキルの特定（1対1）**
   - 対象IDのprefix/種別に対応する `doc-*` スキルを必ず選ぶ
   - 対応スキルが存在しない場合は `$skill-maintainer` で追加してから改修する

3. **対象ドキュメントの更新**
   - 規約（AGENTS.md）に従い、最小差分で更新
   - `updated` を当日に、内容変更なら `version` を patch up
   - `## 変更履歴` に追記

4. **影響範囲の抽出（上位⇄下位）**
   - 更新したIDを起点に、影響範囲を抽出して `reports/` に保存
   - 例:
      - `python .codex/skills/docops-orchestrator/scripts/impact.py --ids RQ-FR-004 --direction both --max-depth 3 --out reports/impact_RQ-FR-004.md`

5. **影響範囲の更新 or 確認**
   - 影響がある（意味が変わる/矛盾する）場合: 該当ドキュメントも更新（最小差分）
   - 影響がない場合: `reports/impact_check_YYYY-MM-DD.md` に「確認済み」を記録

6. **整合チェック**
   - `python .codex/skills/obsidian-doc-check/scripts/validate_vault.py --docs-root docs --report reports/doc_check.md`

7. **最終チェック**
   - `$obsidian-doc-check` を実行し、`reports/` にレポートを残す

## スキルメンテのタイミング
- ドキュメント種別を新設/改名したとき
- ドキュメント規約（Frontmatter必須項目、リンク規約、見出し規約）が変わったとき
- `doc-*` スキルと実ドキュメントの内容に乖離が出たとき
- ドキュメント改修PRで、テンプレ/手順/品質基準を更新したとき
- 上記に該当したら同一PRで `$skill-maintainer` を実行してスキルを同期する

## ドキュメント別スキルの使い分け
- 更新対象のID prefix に対応するスキルを参照して「書く/書かない」を守る
  - 例: `RQ-FR-xxx` → `$doc-rq-fr`
  - 例: `BD-API-xxx` → `$doc-bd-api`
  - 例: `UT-CASE-xxx` → `$doc-ut-case`

## 出力
- 変更されたMarkdownファイル
- `reports/impact_*.md`（影響範囲）
- `reports/impact_check_YYYY-MM-DD.md`（確認記録、必要な場合）
- `reports/doc_check.md`（整合チェック）
