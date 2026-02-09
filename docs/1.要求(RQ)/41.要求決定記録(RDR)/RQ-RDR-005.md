---
id: RQ-RDR-005
title: ローカル起動はDocker Composeを正とする
doc_type: 要求決定記録
phase: RQ
version: 1.0.0
status: 承認
owner: プロダクトオーナー
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-SC-001]]'
down:
- '[[BD-ADR-001]]'
related:
- '[[RQ-RTM-001]]'
tags:
- CornellNoteWeb
- RQ
- RDR
---
# RQ-RDR-005 ローカル起動はDocker Composeを正とする

## 背景/状況
- DBの差異を減らす
- オンボーディングを早くする

## 選択肢
- A: ローカルDBは各自インストール
- B: Docker Compose
- C: クラウド共有DB

## 決定
- B を採用。

## 決定理由
- 環境差分を抑え、起動手順を1行に近づけられる。

## 影響/フォローアップ
- ポート競合時の代替手順を記載する（[[BD-ENV-001]]）。
- マイグレーションを自動実行する（[[DD-MIG-001]]）。

## 変更履歴
- 2026-01-31: 初版