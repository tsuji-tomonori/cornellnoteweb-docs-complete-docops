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
    - Frontmatter値ルール:
      - `doc_type`: 役割名を記載し、同種別で表記ゆれを作らない
      - `phase`: `RQ/BD/DD/UT/IT/AT` のいずれかで、ID prefix と一致
      - `version`: Semantic Versioning（`MAJOR.MINOR.PATCH`、新規は原則 `1.0.0`）
      - `status`: `下書き` または `承認`（無効化時のみ `廃止`）
      - `owner`: `RQ-SH-*` で定義された責務ロールのみ（未定義ロールは先にSHへ追加）
    - 本文は最小限でもよいが、後続作業ができるよう **TBDを明示**する

4. **リンク整備**
    - `up/related` を記載し、可能なら相互リンク（関連文書側の `related` 追記など）も整える

5. **決定記録ゲート（必須）**
   - 新規に要求（RQ-*）を作成する場合、同一PRで RDR（`RQ-RDR-*`）を必ず作成/更新する
   - 新規に設計（BD-*/DD-*）を作成する場合、同一PRで ADR（`BD-ADR-*`）を必ず作成/更新する
   - 要求起点の設計追加は `RDR -> ADR -> 設計本文` の順でリンクする

6. **一覧は作らない（必須）**
   - `docs/**` 配下に `README.md` / `TEMPLATE.md` を置かない（禁止）
   - 一覧・マトリックスが必要なら **ObsidianのDataview** で生成する（手更新の表は禁止）

7. **整合チェック**
   - 最後に `$obsidian-doc-check` を実行し、`reports/` に保存する

## 参考テンプレ
- SnowCardテンプレ: `assets/snowcard_ja.md`
- SnowCardテンプレは必須記載項目（要求ID/種別/優先度/要求/根拠/受入基準/例外/関連）を示す
- SnowCardの優先度は RFC 2119（`MUST` / `SHOULD` / `MAY`）を使う
- DocPathMap（prefix→ディレクトリ）: `assets/doc_path_map.yaml`（必要ならあなたの構成に合わせて編集）
