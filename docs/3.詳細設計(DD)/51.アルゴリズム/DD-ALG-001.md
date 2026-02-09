---
id: DD-ALG-001
title: フロントエンドの主要アルゴリズム（Debounce/AutoSave/Filter）
doc_type: アルゴリズム
phase: DD
version: 1.0.0
status: 承認
owner: 開発リード
created: 2026-01-31
updated: 2026-01-31
up:
- '[[RQ-FR-012]]'
- '[[RQ-UC-003]]'
down:
- '[[DD-UI-002]]'
- '[[DD-UI-003]]'
related:
- '[[RQ-PS-001]]'
tags:
- CornellNoteWeb
- DD
- ALG
---
# DD-ALG-001 フロントエンドの主要アルゴリズム（Debounce/AutoSave/Filter）

## 1) Debounce（検索）
- 入力のたびにAPI/DOM更新を行うと負荷が高いので、一定時間の無入力後に処理する。

擬似コード:
```text
onInput(text):
  cancel(previousTimer)
  setTimer(300ms, () => filterNotes(text))
```

## 2) AutoSave（編集）
- 編集中に一定間隔で保存要求を送る（MVPはUI状態更新まで。API統合は将来）。

状態:
- saved / saving / error

擬似コード:
```text
onEdit():
  status = "saving"
  debounce(1500ms, () => {
    try save()
      status = "saved"
    catch
      status = "error"
  })
```

## 3) Filter（クライアント側絞り込み）
- ノートカードのタイトル/プレビューを `toLowerCase` で比較し表示/非表示を切り替える。

注意:
- 大量データではDOM操作がボトルネックになるため、将来はサーバ検索（[[DD-API-006]]）へ移行する。

## 変更履歴
- 2026-01-31: 初版