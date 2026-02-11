---
name: obsidian-trace
description: Obsidianリンク(up/related)からトレーサビリティをツリー/CSVで生成する。使う場面: 影響範囲分析、RTM代替可視化、リンクグラフの監査時。
metadata:
  short-description: Obsidianリンク(up/related)からトレーサビリティをツリー/CSVで生成する
---

## 目的
Obsidianの `up/related` を利用して、指定IDからトレーサビリティを生成します。
（静的なRTMを手更新せず、必要なときに生成する用途）


## When to use me
- `up/related` のつながりを可視化したい
- 変更起点IDから影響範囲をツリーまたはCSVで抽出したい
- RTMを手更新せず、必要時に追跡情報を生成したい

## When NOT to use me
- ドキュメント本文そのものを更新する作業が主目的（`obsidian-doc-change` を使う）
- 新規ドキュメント作成が主目的（`obsidian-doc-new` を使う）

## 使い方
- ツリー（Markdown）:
  - `python .opencode/skills/obsidian-trace/scripts/traceability.py --start RQ-FR-001 --depth 4 --direction both --include-related --mode tree --out reports/trace_RQ-FR-001.md`
- エッジ一覧（CSV）:
  - `python .opencode/skills/obsidian-trace/scripts/traceability.py --start RQ-FR-001 --depth 4 --direction both --include-related --mode csv --out reports/trace_edges_RQ-FR-001.csv`

## 注意
- 出力は **Frontmatterのリンク**のみを使います（本文中リンクは解析しません）
- `--include-related` を付けると、横断リンクも辿ります（ノイズが増える場合あり）

## Workflow
1. 起点ID、探索方向、深さ、出力形式（tree/csv）を決める
2. `traceability.py` を実行して `reports/` に成果物を出力する
3. 結果を確認し、必要に応じて `--include-related` や深さを調整して再生成する

## Output contract
- `reports/trace_<ID>.md`（ツリー形式）または `reports/trace_edges_<ID>.csv`
- 実行条件（start/depth/direction/include-related）を含む再現可能なコマンド
- 必要に応じた追跡範囲の補足（過不足の注意点）
