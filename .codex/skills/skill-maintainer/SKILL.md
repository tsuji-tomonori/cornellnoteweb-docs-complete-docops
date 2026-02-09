---
name: skill-maintainer
description: ドキュメント規約・内容変更に追随して、Codex skillsを同期更新する
metadata:
  short-description: ドキュメントと1対1対応するskillsを保守する
---

## 目的
ドキュメント改修に合わせて `.codex/skills` を同期し、**1スキル=1ドキュメント（種別）** の対応関係を維持する。

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

## 手順
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
   - `python .codex/skills/obsidian-doc-check/scripts/validate_vault.py --report reports/doc_check.md`
   - 変更点に「どのドキュメント種別に対して、どのスキルを更新したか」を明記
