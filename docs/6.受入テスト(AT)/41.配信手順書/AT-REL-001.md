---
id: AT-REL-001
title: 配信手順書（リリース手順）
doc_type: 配信手順書
phase: AT
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-DEP-001]]'
- '[[DD-REV-001]]'
related:
- '[[DD-DEP-001]]'
tags:
- CornellNoteWeb
- AT
- REL
---

## 手順（概要）
1. mainの状態をタグ付け（例: v0.1.0）
2. CIで `check` と主要E2Eを確認
3. stgへデプロイ（CDK）
4. 受入シナリオ実施（[[AT-SCN-001]]〜）
5. prodへデプロイ
6. リリース判定（[[AT-GO-001]]）

## ロールバック（概要）
- 前バージョンへ戻す（Lambda alias/イメージの巻き戻し）
- DBはforward-onlyのため、戻しが必要な場合は手順化済みの逆マイグレーションを実施（将来）

## 変更履歴
- 2026-01-31: 初版
