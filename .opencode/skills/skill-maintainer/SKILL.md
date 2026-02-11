---
name: skill-maintainer
description: ドキュメント規約・内容変更に追随してSkillsを同期更新する。使う場面: 種別追加/改名、運用規約変更、doc-* スキルの記述乖離を修正する時。
metadata:
  short-description: ドキュメントと1対1対応するskillsを保守する
---

## 目的
ドキュメント改修に合わせて `.opencode/skills` を同期し、**1スキル=1ドキュメント（種別）** の対応関係を維持する。

## When to use me
- ドキュメント種別や規約が変わり、複数スキルの同時更新が必要
- 既存 `doc-*` スキルの実運用乖離を修正したい
- スキル棚卸し（重複責務/欠落）を行いたい

## When NOT to use me
- 単一ドキュメントの内容更新のみが目的（`doc-*` / `obsidian-doc-change` を使う）
- スキル更新を伴わない通常の文書改修

## 使うタイミング
- ドキュメント種別を新設/廃止/改名したとき
- Frontmatter規約やリンク規約（例: `up/related`）が変更されたとき
- ドキュメント改修フロー（レビュー、変更履歴、品質チェック）が変更されたとき
- 既存 `doc-*` スキルの説明が実際のドキュメント運用とずれたとき
- 要求追加時のRDR必須、設計追加時のADR必須ルールを導入/変更したとき
- Frontmatter主要項目（doc_type/phase/version/status/owner）の値運用ルールを導入/変更したとき
- ownerの許容値（`RQ-SH-*` で定義された責務ロール）を導入/変更したとき
- version運用（Semantic Versioning）や優先度表記（RFC 2119）を導入/変更したとき
- コミットメッセージ規約（Conventional Commits）を導入/変更したとき
- コミットメッセージの言語方針（日本語/英語）を導入/変更したとき

## Workflow
1. **変更対象の特定**
   - 変更されたドキュメントID/種別を列挙する（例: `RQ-FR`, `BD-API`）
   - 対応するスキル（例: `doc-rq-fr`, `doc-bd-api`）を1対1で対応づける

2. **スキルの更新/追加**
   - 既存スキルがある場合: `何を書くべきか/書かないべきか/リンク規約/品質チェック` を更新
   - 既存スキルがない場合: `doc-<phase>-<type>/SKILL.md` を新規作成
   - 規約変更時は `obsidian-doc-change` / `obsidian-doc-new` / `obsidian-doc-check` / `docops-orchestrator` も同時更新

3. **1対1対応の検証**
   - 変更対象ドキュメント種別ごとに対応スキルが存在するか確認
   - 重複責務（1ドキュメント種別に複数スキル）がないか確認

4. **文書側への反映**
   - `docs/**` の運用文書（特に `RQ-DG` / `BD-CM`）にスキルメンテタイミングを追記
   - 内容変更なので `updated` と `version` と `変更履歴` を更新

5. **最終確認**
    - `python .opencode/skills/obsidian-doc-check/scripts/validate_vault.py --report reports/doc_check.md`
    - 変更点に「どのドキュメント種別に対して、どのスキルを更新したか」を明記

## Output contract
- 更新された `SKILL.md`（必要に応じて `scripts/` / `assets/` も含む）
- どの文書種別に対し、どのスキルを更新したかの対応表
- `reports/doc_check.md`（整合チェック結果）
