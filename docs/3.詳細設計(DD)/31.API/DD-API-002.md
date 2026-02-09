---
id: DD-API-002
title: 認証API
doc_type: API詳細
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-09
up:
- '[[BD-API-002]]'
- '[[DD-COMP-002]]'
- '[[DD-API-001]]'
related:
- '[[RQ-FR-001]]'
- '[[RQ-FR-002]]'
tags:
- CornellNoteWeb
- DD
- API
- AUTH
---

## POST /api/auth/signup
### リクエスト
```json
{"email":"demo@example.com","password":"********"}
```
### レスポンス（201 Created）
```json
{
  "email": "demo@example.com",
  "displayName": "demo",
  "userId": "${json-unit.ignore}"
}
```

---

## POST /api/auth/login
### リクエスト
```json
{"email":"demo@example.com","password":"********"}
```
### レスポンス（200 OK）
```json
{
  "userId": "${json-unit.ignore}",
  "email": "demo@example.com",
  "displayName": "demo"
}
```

---

## POST /api/auth/logout
### レスポンス（204 No Content）
- セッション破棄（MVPはフロント側でも localStorage を削除）

---

## POST /api/auth/password/reset
- 現行はスタブ（受理のみ）。実装方針は [[BD-ADR-002]] と [[DD-ERR-001]] で管理。

## 変更履歴
- 2026-01-31: 初版
