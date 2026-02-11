---
id: RQ-DEV-010
title: DB標準レビューSkill/Toolの運用ゲート化
doc_type: 非機能要求
phase: RQ
version: 1.0.0
status: 承認
owner: RQ-SH-002
created: 2026-02-11
updated: 2026-02-11
up:
- '[[RQ-SC-001]]'
- '[[RQ-RDR-014]]'
related:
- '[[RQ-DATA-006]]'
- '[[RQ-DATA-007]]'
- '[[RQ-DATA-008]]'
- '[[RQ-DATA-014]]'
- '[[RQ-SEC-017]]'
tags:
- CornellNoteWeb
- RQ
- NFR
- DEV
---

## SnowCard（日本語）
- **要求ID**: RQ-DEV-010
- **種別**: 非機能要求（Non-functional（Quality Gate/DevOps））
- **優先度**: SHOULD
- **要求**: 本システムは、DB設計またはDDL変更を含む変更に対して、OpenCodeのDB標準レビューSkillおよび`db-review`ツールを実行し、結果レポートをレビュー証跡として保存しなければならない。
- **根拠**: 国際規格ベースのレビュー観点を定常運用に組み込み、レビュー品質のばらつきを低減するため。
- **受入基準**:
  - DB関連変更のPRで、Skill実行記録と`db-review`レポート（MarkdownまたはJSON）が添付されていること（検査）。
  - 重大指摘が未解消の場合は、例外承認を除きマージされないこと（検査）。
- **例外/エラー**:
  - ツール障害時は代替レビュー（手動チェックリスト）を実施し、復旧までの暫定運用を記録する。
- **依存・関連**:
  - [[RQ-DATA-006]]
  - [[RQ-DATA-007]]
  - [[RQ-DATA-008]]
  - [[RQ-DATA-014]]
  - [[RQ-SEC-017]]
- **起案者**: 開発リード／DBA
- **参考資料**: OpenCode Skills, OpenCode Custom Tools

## 変更履歴
- 2026-02-11: 初版
