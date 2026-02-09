---
id: DD-ERR-001
title: エラーコードと既知ギャップ一覧
doc_type: エラーコード
phase: DD
version: 1.0.0
status: 下書き
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-API-003]]'
down:
- '[[IT-RST-001]]'
related:
- '[[RQ-DG-001]]'
tags:
- CornellNoteWeb
- DD
- ERR
---
# DD-ERR-001 エラーコードと既知ギャップ一覧

## エラーコード（案）
- `BAD_REQUEST`: 入力不正（UUID不正、必須欠落）
- `UNAUTHORIZED`: 未認証
- `NOT_FOUND`: 対象が存在しない
- `CONFLICT`: 競合（将来: 同一メール等）
- `INTERNAL_ERROR`: 想定外

## 例（validation）
```json
{
  "code": "BAD_REQUEST",
  "message": "バリデーションエラー",
  "details": [
    {"field":"email","reason":"必須です"}
  ]
}
```

## 既知ギャップ（CornellNoteWeb現行）
- 検索API（[[DD-API-006]]）: q/tagId/notebookId を無視して一覧を返す
- エクスポートAPI（[[DD-API-008]]）: モックURLを返すスタブ
- エディタUI（[[DD-UI-003]]）: 自動保存/共有/PDF/削除がAPI未接続のスタブ
- Note.status: migrations は `draft/active/archived` だが、API実装に `deleted` が存在する（制約違反）
- 認証: AuthService が簡易実装（DB連携/パスワードハッシュ等が未実装）

## 改善方針
- ギャップは「影響する要求（FR/NFR）」へのリンクを必ず付けて管理する。
- 修正したら該当ドキュメント（要求/設計/テスト）へリンクで反映し、レビューでBacklinkを確認する（[[RQ-DG-001]]）。

## 変更履歴
- 2026-01-31: 初版