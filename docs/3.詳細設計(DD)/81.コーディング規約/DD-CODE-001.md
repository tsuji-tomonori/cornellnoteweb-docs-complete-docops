---
id: DD-CODE-001
title: コーディング規約（Java/Spring）
doc_type: コーディング規約
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-CM-001]]'
related: []
tags:
- CornellNoteWeb
- DD
- CODE
---

## 規約（抜粋）
- フォーマット: Spotless（google-java-format）
- Null禁止: DTO/Entityのnull許容を明確にする
- 例外: Controller層で握りつぶさず、統一エラーへ変換（[[BD-API-003]]）
- Repository: クエリは意図が分かる命名（`findByUserIdAndDeletedAtIsNull` 等）
- 時刻: `Instant` を基本

## 変更履歴
- 2026-01-31: 初版
