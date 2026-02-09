---
name: obsidian-doc-new
description: 新規ドキュメントを採番して作成し、テンプレ適用とリンク整備を行う
metadata:
  short-description: 新規ドキュメントを採番して作成し、テンプレ適用とリンク整備を行う
---

## 目的
新規ドキュメントを規約どおりに作成します（採番、テンプレ適用、リンク整備）。

## 使いどころ（例）
- 「新しい機能要求を追加して」「ユースケースを追加して」「ADRを追加して」など

## 手順
1. **ドキュメント種別を確定**
   - フェーズ（RQ/BD/DD/UT/IT/AT）と略称（例: FR, UC, ADR）を決める
   - 可能なら上位文書（`up`）も決める（不明ならTBDでも可）

2. **採番**
   - `scripts/next_id.py` を使って次のIDと作成先パスを取得する
   - 例: `python .codex/skills/obsidian-doc-new/scripts/next_id.py RQ-FR --json`

3. **ファイル作成**
   - ファイル名 = ID（例: `RQ-FR-010.md`）
   - Frontmatter を規約どおりに作成（`created/updated` は当日）
   - 本文は最小限でもよいが、後続作業ができるよう **TBDを明示**する

4. **リンク整備**
   - `up/related` を記載し、可能なら相互リンク（関連文書側の `related` 追記など）も整える

5. **一覧は作らない（必須）**
   - `docs/**` 配下に `README.md` / `TEMPLATE.md` を置かない（禁止）
   - 一覧・マトリックスが必要なら **ObsidianのDataview** で生成する（手更新の表は禁止）

6. **整合チェック**
   - 最後に `$obsidian-doc-check` を実行し、`reports/` に保存する

## 参考テンプレ
- SnowCardテンプレ: `assets/snowcard_ja.md`
- DocPathMap（prefix→ディレクトリ）: `assets/doc_path_map.yaml`（必要ならあなたの構成に合わせて編集）

