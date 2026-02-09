---
id: BD-BUILD-001
title: ビルド方針（Gradle/品質ゲート）
doc_type: ビルド
phase: BD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-DEV-001]]'
down:
- '[[UT-COV-001]]'
- '[[UT-STAT-001]]'
related:
- '[[BD-CM-001]]'
tags:
- CornellNoteWeb
- BD
- BUILD
---
# BD-BUILD-001 ビルド方針（Gradle/品質ゲート）

## ビルド
- `./gradlew build` でアプリをビルドする。
- `./gradlew test` でJUnitテストを実行する。
- `./gradlew check` は品質ゲート（カバレッジ/静的解析/フォーマット/Mutation）を含む。

## 品質ゲート（例）
- JaCoCo: Controller/Service のラインカバレッジ 95%（Gradle設定）
- Spotless: フォーマットチェック
- PMD / SpotBugs: 失敗でビルド停止
- PIT: Service層を中心にMutationテスト

## 成果物
- jar（Spring Boot）
- Docker image（Dockerfile）

## 変更履歴
- 2026-01-31: 初版