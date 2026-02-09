---
id: BD-ARCH-002
title: 論理構成（レイヤ/責務）
doc_type: アーキテクチャ概要（論理）
phase: BD
version: 1.0.0
status: 承認
owner: アーキテクト
created: 2026-01-31
updated: 2026-01-31
up:
- '[[BD-ARCH-001]]'
down:
- '[[DD-COMP-001]]'
related:
- '[[BD-ADR-001]]'
tags:
- CornellNoteWeb
- BD
- ARCH
---
# BD-ARCH-002 論理構成（レイヤ/責務）

## 目的
- モジュール境界と責務を明確にし、変更影響を局所化する。

## レイヤ構成
```mermaid
flowchart TB
  subgraph Presentation[プレゼンテーション層]
    Page[PageController（画面）]
    Js[static/js（API呼び出し/UX）]
  end

  subgraph Api[API層]
    Ctl[Controller]
    Err[例外ハンドラ]
  end

  subgraph App[アプリケーション層]
    Svc[Service]
  end

  subgraph Domain[ドメイン/永続化層]
    Ent[Entity]
    Repo[Repository]
    DB[(PostgreSQL)]
  end

  Page --> Js
  Js --> Ctl
  Ctl --> Svc
  Svc --> Repo
  Repo --> DB
  Ctl --> Err
```

## 境界（設計ルール）
- Controller は入力検証・HTTP責務に限定し、ビジネス判断は Service に寄せる。
- Entity は永続化の最小単位。外部公開DTOとは分離する（[[DD-API-001]]）。
- 共有・エクスポートなど副作用が大きい処理は非同期化可能な境界を残す（[[BD-ADR-002]]）。

## 変更履歴
- 2026-01-31: 初版