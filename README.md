# CornellNoteWeb ドキュメント（Obsidian Vault）

このリポジトリは **CornellNoteWeb**（コーネル式ノートをWebで作成・整理するアプリ）のドキュメント一式です。

- ドキュメントは **Obsidian** での管理を前提にしています。
- **1トピック=1ファイル**（一覧はREADMEからリンク）です。
- トレーサビリティは **相互リンク（up/down/related）** と Backlink を基本とし、静的なRTMは最小化します（[[RQ-RTM-001]]）。

## 入口
- [[Home]]
- 要求: `docs/1.要求(RQ)`
- 基本設計: `docs/2.基本設計(BD)`
- 詳細設計: `docs/3.詳細設計(DD)`
- テスト: `docs/4.単体テスト(UT)` / `docs/5.結合テスト(IT)` / `docs/6.受入テスト(AT)`

## ファイル命名（必須）
- `{フェーズ}-{略称}-{連番3桁}.md`（例: `RQ-FR-001.md`）
- ファイル名＝ドキュメントID（Obsidianリンクの安定性のため）

## Links規約（必須）
各ドキュメントの Frontmatter で以下を維持します。

- `up`: 上位（目的/スコープ/UCなど）
- `down`: 下位（FR→DD→テストなど）
- `related`: 横断（同等レベルの関連）

## 参考（CornellNoteWeb 実装）
- バックエンド: Spring Boot / Java 21
- DB: PostgreSQL（docker-composeでローカル起動）
- IaC: AWS CDK（API Gateway + Lambda + Aurora 等）
