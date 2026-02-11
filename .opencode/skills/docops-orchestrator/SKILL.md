---
name: docops-orchestrator
description: 自然言語の依頼を起点に対象ドキュメント更新と上位⇄下位の影響確認を実施する。使う場面: ID指定の改修依頼、影響範囲確認、RDR/ADRゲートを伴う更新時。
metadata:
  short-description: 変更→影響分析→更新/確認→チェックを一気通貫で実行
---

## 目的
自然言語で与えられた依頼を、Obsidian Vault の規約に従って反映し、リンクグラフ（`up/related`）上の **整合性を更新 or 確認**します。

## When to use me
- 複数ドキュメントへ波及する可能性がある更新依頼
- ID指定で「更新 + 影響確認 + 検査」まで求める依頼
- 要求/設計の意味変更を含み、RDR/ADRゲートが必要な依頼

## When NOT to use me
- 単一ファイルの軽微修正のみで影響確認が不要な依頼
- 実装コード変更のみを求める依頼
- 対象が明確で個別 `doc-*` スキルだけで十分な依頼

## 前提（必須）
- ドキュメント関係（上位/下位/関連）は **Frontmatter の `up/related`** で管理する
- 本文に「上位文書」「下位文書」セクションは作らない
- 一覧/マトリックスは Dataview で生成し、手更新の表は作らない
- **1スキル = 1ドキュメント（種別）** の対応を維持する（`doc-rq-fr`, `doc-bd-api` など）

## Workflow
1. **対象の特定**
   - 依頼文にIDがあれば、それを優先（例: `RQ-FR-004`）
   - IDが無い場合は、タイトル/キーワードで検索して対象を確定する

2. **対応スキルの特定（1対1）**
   - 対象IDのprefix/種別に対応する `doc-*` スキルを必ず選ぶ
   - 対応スキルが存在しない場合は `$skill-maintainer` で追加してから改修する

3. **決定記録ゲート（必須）**
   - 要求の追加/意味変更がある場合は、同一PRで `RQ-RDR-*` を新規作成または更新する
   - 設計の追加/意味変更がある場合は、同一PRで `BD-ADR-*` を新規作成または更新する
   - 要求起点の設計変更は `RDR -> ADR -> 設計本文` のリンク経路を必須にする

4. **対象ドキュメントの更新**
   - 規約（AGENTS.md）に従い、最小差分で更新
   - `doc_type/phase/version/status/owner` は値運用ルールに従って整合を確認（ownerは `RQ-SH-*` ロール限定）
   - `updated` を当日に、内容変更なら `version` を patch up（Semantic Versioning）
   - 要求系では SnowCard優先度を RFC 2119（`MUST` / `SHOULD` / `MAY`）で統一
   - `## 変更履歴` に追記

5. **影響範囲の抽出（上位⇄下位）**
   - 更新したIDを起点に、影響範囲を抽出して `reports/` に保存
   - 例:
      - `python .opencode/skills/docops-orchestrator/scripts/impact.py --ids RQ-FR-004 --direction both --max-depth 3 --out reports/impact_RQ-FR-004.md`

6. **影響範囲の更新 or 確認**
   - 影響がある（意味が変わる/矛盾する）場合: 該当ドキュメントも更新（最小差分）
   - 影響がない場合: `reports/impact_check_YYYY-MM-DD.md` に「確認済み」を記録

7. **整合チェック**
   - `python .opencode/skills/obsidian-doc-check/scripts/validate_vault.py --docs-root docs --report reports/doc_check.md`

8. **最終チェック**
   - `$obsidian-doc-check` を実行し、`reports/` にレポートを残す
   - コミットが必要な場合は `git-commit` スキルを使い、Conventional Commitsで作成する

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

## Output contract
- 変更されたMarkdownファイル
- `reports/impact_*.md`（影響範囲）
- `reports/impact_check_YYYY-MM-DD.md`（確認記録、必要な場合）
- `reports/doc_check.md`（整合チェック）
