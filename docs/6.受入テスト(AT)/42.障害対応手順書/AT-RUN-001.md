---
id: AT-RUN-001
title: 障害対応手順書（Runbook）
doc_type: 障害対応手順書
phase: AT
version: 1.0.0
status: 下書き
owner: SRE
created: 2026-01-31
updated: 2026-02-09
up:
- '[[DD-LOG-001]]'
- '[[BD-RET-001]]'
- '[[DD-AV-001]]'
- '[[IT-INC-001]]'
- '[[AT-OPS-001]]'
related:
- '[[BD-MON-001]]'
tags:
- CornellNoteWeb
- AT
- RUN
---

## 目的
- 重大障害の検知〜復旧までを再現可能にする。

## 代表インシデントと初動
### API 5xx率上昇
1. 直近デプロイ有無を確認
2. 例外ログ（requestId）を確認
3. DB接続/クエリ遅延を確認
4. 影響が大きければロールバック

### DB接続不可
1. DBステータス（Aurora）確認
2. Secretsのローテーション/失効確認
3. 代替リージョン/スナップショット復旧（必要なら）

### 共有リンク漏えい疑い
1. 共有リンク発行数の急増を確認
2. 影響範囲のShareTokenを取り消し
3. 監査ログで追跡

## 変更履歴
- 2026-01-31: 初版
