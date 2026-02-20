---
id: BD-BUILD-001
title: ビルド方針（Gradle/品質ゲート）
doc_type: ビルド
phase: BD
version: 1.0.1
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-02-11
up:
- '[[RQ-DEV-001]]'
related:
- '[[BD-CM-001]]'
tags:
- CornellNoteWeb
- BD
- BUILD
---

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

## レポート集約（Allure）
- `task report:allure:collect` で UT/E2E/静的解析/カバレッジ/PIT の結果を `build/allure-results` に集約する。
- `task report:allure:generate` で静的レポートを `build/allure-report` に生成する。
- しきい値は `ALLURE_JACOCO_MIN`（既定95）と `ALLURE_PIT_MIN`（既定80）で上書きできる。

## 変更履歴
- 2026-01-31: 初版
- 2026-02-11: Allureによる品質レポート集約フローを追加
