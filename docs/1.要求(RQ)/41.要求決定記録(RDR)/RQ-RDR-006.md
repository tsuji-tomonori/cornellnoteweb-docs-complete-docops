---
id: RQ-RDR-006
title: 認証はMVPでは最小実装（将来拡張）
doc_type: 要求決定記録
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-02-09
up:
- '[[RQ-SC-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---

## 背景/状況
- コア価値はノート作成/整理であり、認証は後回し
- ただし共有や削除には最低限必要

## 選択肢
- A: 本格認証（パスワードハッシュ/メール送信）
- B: 簡易セッション（MVP）
- C: OAuthのみ

## 決定
- B を採用。

## 決定理由
- 開発コストを抑えつつ、将来の拡張（A/C）に備えられる。

## 影響/フォローアップ
- セキュリティ要求上、Secrets/Sessionの取り扱いを明文化（[[RQ-SEC-001]]）。
- 認証方式はADR化する（[[BD-ADR-004]]）。

## 変更履歴
- 2026-01-31: 初版
