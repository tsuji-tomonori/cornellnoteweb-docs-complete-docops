---
id: RQ-RTM-002
title: 要求トレーサビリティ（設計別）
doc_type: トレーサビリティ
phase: RQ
version: 1.0.0
status: 下書き
owner: アーキテクト
created: '2026-02-20'
updated: '2026-02-21'
up:
- '[[RQ-RTM-001]]'
related:
- '[[RQ-DG-001]]'
tags:
- CornellNoteWeb
- RQ
- RTM
---

## 方針
- トレーサビリティの正本は、各文書の frontmatter（`up` / `related` / `down`）および本文リンク（`[[...]]`）とする。
- 本ページは「設計（BD/DD）を起点」に、根拠要件（FR/NFR）と検証（UT/IT/AT）を一覧化する。

## 追跡軸（設計別）
- 設計IDごとに、次を追跡する。
  - 根拠要件（FR/NFR）
  - RDR（要求決定記録）
  - ADR（設計判断）
  - 検証文書（UT/IT/AT）

## 設計別ビュー（静的）
- generated_at: 2026-02-20

| 設計ID | タイトル | 根拠要件(FR/NFR) | RDR | ADR | 検証(UT/IT/AT) |
| --- | --- | --- | --- | --- | --- |
| [[BD-API-001]] | API概要（エンドポイント一覧） | [[RQ-FR-001]] | - | [[BD-ADR-010]] | - |
| [[BD-API-002]] | 認証/セッション方針 | [[RQ-SEC-001]] | - | [[BD-ADR-004]] | - |
| [[BD-API-003]] | エラーモデル（統一フォーマット） | [[RQ-FR-001]] | - | - | - |
| [[BD-ARCH-001]] | システムコンテキスト | - | - | [[BD-ADR-001]]<br>[[BD-ADR-002]]<br>[[BD-ADR-003]]<br>[[BD-ADR-004]]<br>[[BD-ADR-005]]<br>[[BD-ADR-006]]<br>[[BD-ADR-008]] | - |
| [[BD-ARCH-002]] | 論理構成（レイヤ/責務） | - | - | [[BD-ADR-001]] | - |
| [[BD-ARCH-003]] | デプロイ構成（AWS想定） | - | - | [[BD-ADR-002]]<br>[[BD-ADR-005]]<br>[[BD-ADR-008]]<br>[[BD-ADR-010]] | - |
| [[BD-ARCH-004]] | 主要データフロー（ノート作成〜共有） | - | - | - | - |
| [[BD-BUILD-001]] | ビルド方針（Gradle/品質ゲート） | [[RQ-DEV-001]] | - | - | [[UT-COV-001]]<br>[[UT-COV-001]]<br>[[UT-PLAN-001]]<br>[[UT-STAT-001]]<br>[[UT-STAT-001]] |
| [[BD-CM-001]] | 構成管理方針（Git/Secrets/Docs） | - | - | - | - |
| [[BD-CM-002]] | AWSタグガバナンス運用設計 | [[RQ-COST-007]]<br>[[RQ-DEV-011]]<br>[[RQ-SEC-021]] | - | [[BD-ADR-009]] | [[AT-OPS-001]] |
| [[BD-DATA-001]] | データ設計方針（RDB中心） | - | - | [[BD-ADR-003]] | - |
| [[BD-DEP-001]] | デプロイ方式（ローカル/クラウド） | - | - | [[BD-ADR-007]]<br>[[BD-ADR-008]]<br>[[BD-ADR-010]] | [[AT-REL-001]] |
| [[BD-DEP-002]] | コスト最適化の考え方（MVP） | [[RQ-COST-001]]<br>[[RQ-COST-007]] | - | [[BD-ADR-009]] | - |
| [[BD-DEP-003]] | ドキュメント公開フロー（Quartz + CDK） | - | - | [[BD-ADR-007]] | [[AT-REL-001]] |
| [[BD-ENV-001]] | ローカル開発環境（Docker Compose） | - | - | - | [[IT-ENV-001]]<br>[[IT-PLAN-001]] |
| [[BD-ENV-002]] | 環境区分と設定管理（stg/prod） | [[RQ-DEV-011]] | - | - | - |
| [[BD-ERD-001]] | ER図（概要） | - | - | - | - |
| [[BD-MON-001]] | 監視設計（メトリクス/アラート） | [[RQ-AV-001]]<br>[[RQ-OBY-001]] | - | - | [[AT-OPS-001]]<br>[[AT-RUN-001]] |
| [[BD-MON-002]] | SLO/エラーバジェット運用（案） | [[RQ-AV-001]] | - | - | [[AT-OPS-001]]<br>[[IT-INC-001]] |
| [[BD-QUAL-001]] | 品質特性と優先順位 | [[RQ-AV-001]]<br>[[RQ-COST-001]]<br>[[RQ-DATA-001]]<br>[[RQ-DEV-001]]<br>[[RQ-INT-001]]<br>[[RQ-OBY-001]]<br>[[RQ-PRC-001]]<br>[[RQ-PS-001]]<br>[[RQ-SEC-001]]<br>[[RQ-UX-001]] | - | [[BD-ADR-006]] | - |
| [[BD-RET-001]] | データ保持・削除方針 | [[RQ-DATA-001]]<br>[[RQ-PRC-001]] | - | - | [[AT-OPS-001]]<br>[[AT-RUN-001]] |
| [[BD-SEC-001]] | セキュリティ設計（境界/主要対策） | [[RQ-AV-001]]<br>[[RQ-COST-001]]<br>[[RQ-DATA-001]]<br>[[RQ-DEV-001]]<br>[[RQ-INT-001]]<br>[[RQ-OBY-001]]<br>[[RQ-PRC-001]]<br>[[RQ-PS-001]]<br>[[RQ-SEC-001]]<br>[[RQ-UX-001]] | - | [[BD-ADR-004]] | - |
| [[BD-TST-001]] | テスト戦略（UT/IT/AT/E2E） | [[RQ-DEV-001]]<br>[[RQ-FR-001]] | - | - | [[AT-PLAN-001]]<br>[[IT-PLAN-001]]<br>[[UT-PLAN-001]] |
| [[BD-UI-001]] | 画面一覧 | - | - | - | - |
| [[BD-UI-002]] | Cornell編集レイアウト | [[RQ-UX-001]] | - | - | - |
| [[BD-UI-003]] | 画面遷移 | - | - | - | - |
| [[BD-UI-004]] | アクセシビリティ方針 | [[RQ-UX-001]] | - | - | - |
| [[DD-ALG-001]] | フロントエンドの主要アルゴリズム（Debounce/AutoSave/Filter） | [[RQ-FR-012]]<br>[[RQ-PS-001]] | - | - | - |
| [[DD-API-001]] | API詳細（総論） | [[RQ-FR-001]]<br>[[RQ-FR-002]]<br>[[RQ-FR-003]]<br>[[RQ-FR-004]]<br>[[RQ-FR-005]]<br>[[RQ-FR-006]]<br>[[RQ-FR-007]]<br>[[RQ-FR-008]]<br>[[RQ-FR-009]]<br>[[RQ-FR-010]]<br>[[RQ-FR-011]]<br>[[RQ-FR-012]]<br>[[RQ-FR-013]]<br>[[RQ-FR-014]]<br>[[RQ-FR-015]]<br>[[RQ-FR-016]]<br>[[RQ-FR-017]]<br>[[RQ-FR-018]] | - | - | [[UT-CASE-001]]<br>[[UT-CASE-002]]<br>[[UT-CASE-003]]<br>[[UT-CASE-004]]<br>[[UT-CASE-005]] |
| [[DD-API-002]] | 認証API | [[RQ-FR-001]]<br>[[RQ-FR-002]] | - | - | [[UT-CASE-001]] |
| [[DD-API-003]] | ノートAPI | [[RQ-FR-003]] | - | - | [[IT-CASE-001]]<br>[[IT-CASE-001]]<br>[[IT-CASE-002]]<br>[[IT-CASE-003]]<br>[[UT-CASE-002]] |
| [[DD-API-004]] | ノートブックAPI | [[RQ-FR-009]] | - | - | [[UT-CASE-003]] |
| [[DD-API-005]] | タグAPI | [[RQ-FR-010]] | - | - | [[UT-CASE-004]] |
| [[DD-API-006]] | 検索API | [[RQ-FR-013]] | - | - | - |
| [[DD-API-007]] | 共有API | [[RQ-FR-014]] | - | - | [[AT-SCN-003]]<br>[[UT-CASE-005]] |
| [[DD-API-008]] | エクスポートAPI（PDF） | [[RQ-FR-017]] | - | - | [[AT-SCN-004]] |
| [[DD-API-009]] | E2E Seed API（開発用） | - | - | - | [[IT-ENV-002]] |
| [[DD-AV-001]] | 可用性詳細（バックアップ/復旧/DR） | [[RQ-AV-001]] | - | - | [[AT-RUN-001]] |
| [[DD-CODE-001]] | コーディング規約（Java/Spring） | - | - | - | [[UT-STAT-001]] |
| [[DD-COMP-001]] | コンポーネント一覧（Backend） | [[RQ-FR-001]] | - | - | - |
| [[DD-COMP-002]] | APIエンドポイント ↔ Controller 対応 | - | - | - | - |
| [[DD-COST-001]] | FinOps（コスト運用）詳細 | [[RQ-COST-001]]<br>[[RQ-COST-007]]<br>[[RQ-DEV-011]]<br>[[RQ-SEC-021]] | - | [[BD-ADR-009]] | - |
| [[DD-DBCON-001]] | DB制約（全体） | - | - | - | - |
| [[DD-DBCON-002]] | 一意制約・チェック制約 | - | - | - | - |
| [[DD-DDL-001]] | DDL一覧（マイグレーション） | - | - | - | [[UT-TDAT-001]] |
| [[DD-DDL-002]] | users テーブル | - | - | - | - |
| [[DD-DDL-003]] | notebooks テーブル | - | - | - | - |
| [[DD-DDL-004]] | notes テーブル | - | - | - | - |
| [[DD-DDL-005]] | tags テーブル | - | - | - | - |
| [[DD-DDL-006]] | note_tags テーブル | - | - | - | - |
| [[DD-DDL-007]] | share_tokens テーブル | - | - | - | - |
| [[DD-DDL-008]] | export_jobs テーブル | - | - | - | - |
| [[DD-DEP-001]] | デプロイ詳細（CDK構成要素） | - | - | [[BD-ADR-008]]<br>[[BD-ADR-010]] | [[AT-REL-001]] |
| [[DD-ERR-001]] | エラーコードと既知ギャップ一覧 | - | - | - | [[AT-GO-001]]<br>[[IT-RST-001]]<br>[[IT-RST-001]] |
| [[DD-LOG-001]] | ログ設計（監査/運用） | [[RQ-OBY-001]] | - | - | [[AT-RUN-001]]<br>[[IT-INC-001]] |
| [[DD-MIG-001]] | DBマイグレーション方針（migrations/） | [[RQ-DATA-001]] | - | - | [[IT-ENV-001]] |
| [[DD-PERF-001]] | 性能設計・性能試験計画 | [[RQ-AV-001]]<br>[[RQ-COST-001]]<br>[[RQ-DATA-001]]<br>[[RQ-DEV-001]]<br>[[RQ-INT-001]]<br>[[RQ-OBY-001]]<br>[[RQ-PRC-001]]<br>[[RQ-PS-001]]<br>[[RQ-SEC-001]]<br>[[RQ-UX-001]] | - | - | [[IT-CASE-003]] |
| [[DD-REV-001]] | レビュー規約（PR/Docs） | - | - | - | [[AT-REL-001]] |
| [[DD-SCALE-001]] | 拡張性設計（機能/データ/運用） | - | - | - | - |
| [[DD-SEC-001]] | セキュリティ統制（詳細） | - | - | - | - |
| [[DD-UI-001]] | UI詳細（総論） | - | - | - | - |
| [[DD-UI-002]] | ノート一覧画面（/notes） | - | - | - | - |
| [[DD-UI-003]] | ノート編集画面（/editor） | - | - | - | - |
| [[DD-UI-004]] | ログイン画面（/login, /signup） | - | - | - | - |
| [[DD-UI-005]] | 共有閲覧画面（/share） | - | - | - | - |
| [[DD-UI-006]] | アクセシビリティ検証（チェックリスト/テスト） | - | - | - | [[AT-SCN-005]] |

## 変更履歴
- 2026-02-21: 規約準拠のため変更履歴セクションを追記
- 2026-02-20: 初版
