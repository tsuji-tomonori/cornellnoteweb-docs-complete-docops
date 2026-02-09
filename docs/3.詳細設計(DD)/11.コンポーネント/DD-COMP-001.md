---
id: DD-COMP-001
title: コンポーネント一覧（Backend）
doc_type: コンポーネント
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-ARCH-002]]'
down:
- '[[DD-API-001]]'
- '[[DD-DDL-001]]'
related:
- '[[RQ-FR-001]]'
tags:
- CornellNoteWeb
- DD
- COMP
---
# DD-COMP-001 コンポーネント一覧（Backend）

## パッケージ構成
- `com.example.cornellnote.web` : PageController（Thymeleaf画面）
- `com.example.cornellnote.api.controller` : REST API Controller
- `com.example.cornellnote.api.service` : アプリケーションサービス
- `com.example.cornellnote.domain.entity` : JPA Entity
- `com.example.cornellnote.domain.repository` : Spring Data Repository

## 主要コンポーネント
- AuthController/AuthService: 認証（MVPは簡易）
- NoteController/NoteService: ノートCRUD、タグ紐付け
- NotebookController/NotebookService: ノートブック一覧
- TagController/TagService: タグ一覧
- ShareController/ShareService: 共有リンク発行/閲覧/取り消し
- ExportController/ExportService: PDFエクスポート（現行はモック）
- SearchController: 検索（現行はスタブ）
- E2eSeedController: テストデータ投入

## 依存関係（概略）
```mermaid
flowchart LR
  Ctl[Controller] --> Svc[Service]
  Svc --> Repo[Repository]
  Repo --> DB[(PostgreSQL)]
  Svc --> Ext[(S3/SQS/Email など外部)]
```

## 変更履歴
- 2026-01-31: 初版