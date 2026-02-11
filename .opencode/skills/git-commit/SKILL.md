---
name: git-commit
description: 変更内容を確認して .gitmessage テンプレート準拠でコミットする。使う場面: ドキュメント改修後のコミット作成、Conventional Commits整形、履歴品質統一が必要な時。
metadata:
  short-description: .gitmessage 準拠でコミットを作る
---

## 目的
コミットメッセージ品質をそろえるため、リポジトリ直下の `/.gitmessage` を必ず参照し、Conventional Commitsでコミットを作成する。


## When to use me
- 変更差分を確認して Conventional Commits でコミットしたい
- `/.gitmessage` に沿って件名/本文の品質を揃えたい
- ドキュメント改修の履歴を読みやすく残したい

## When NOT to use me
- コミットを作成しない依頼（差分確認のみ、調査のみ）
- 変更が存在しない状態での実行

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
   - 件名は `type(scope)!: subject` 形式で作成する（Conventional Commits）
   - `type` は `feat` / `fix` / `docs` / `refactor` / `test` / `chore` を使用する
   - `subject` と本文は日本語で記載する

3. **ステージングとコミット**
   - 必要ファイルを `git add` する
   - 次の形式でテンプレートを参照してコミットする
     - `git commit -t .gitmessage`
   - 非対話で実行する場合は、`-m` で件名/本文を与えつつ `/.gitmessage` の構成を維持する

4. **結果確認**
   - `git status --short` が想定どおりか確認

## 出力
- Conventional Commits + `.gitmessage` 構成に沿ったコミット
