---
name: git-commit
description: 変更内容を確認して、.gitmessage テンプレートを使ってコミットする
metadata:
  short-description: .gitmessage 準拠でコミットを作る
---

## 目的
コミットメッセージ品質をそろえるため、リポジトリ直下の `/.gitmessage` を必ず参照してコミットを作成する。

## 前提
- 空コミットは作成しない
- 秘密情報（`.env` など）はコミット対象から除外する
- 既存変更を勝手に破棄しない

## 手順
1. **差分確認**
   - `git status --short`
   - `git diff --staged; git diff`
   - `git log --oneline -10`

2. **メッセージ草案作成**
   - `/.gitmessage` の見出しに沿って、件名・背景/目的・変更内容・影響範囲を埋める
   - 件名は 50 文字程度で簡潔にする

3. **ステージングとコミット**
   - 必要ファイルを `git add` する
   - 次の形式でテンプレートを参照してコミットする
     - `git commit -t .gitmessage`
   - 非対話で実行する場合は、`-m` で件名/本文を与えつつ `/.gitmessage` の構成を維持する

4. **結果確認**
   - `git status --short` が想定どおりか確認

## 出力
- 規約に沿ったコミット（件名 + 背景/目的 + 変更内容 + 影響範囲）
