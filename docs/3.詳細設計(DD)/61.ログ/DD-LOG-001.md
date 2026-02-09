---
id: DD-LOG-001
title: ログ設計（監査/運用）
doc_type: ログ
phase: DD
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-OBY-001]]'
- '[[BD-MON-001]]'
related:
- '[[BD-MON-001]]'
tags:
- CornellNoteWeb
- DD
- LOG
---

## 目的
- 障害解析（トラブルシュート）と監査（重要操作追跡）を両立する。

## ログ種別
- アクセスログ: method/path/status/latency
- アプリログ: 例外、外部I/F、ジョブ状態遷移
- 監査ログ: 共有リンク生成/取り消し、ノート削除、アカウント削除

## フォーマット（JSON推奨）
```json
{
  "ts":"2026-01-31T00:00:00Z",
  "level":"INFO",
  "event":"share_link_created",
  "requestId":"...（相関ID）",
  "userId":"...（可能なら）",
  "noteId":"...",
  "details":{ "ip":"...", "userAgent":"..." }
}
```

## 個人情報
- ノート本文（cue/notes/summary）はログに出さない。
- メールアドレスは必要最小限（マスク）を検討。

## 保持期間
- stg: 短め（例: 14日）
- prod: 監査要件に応じて（例: 90日）

## 変更履歴
- 2026-01-31: 初版
