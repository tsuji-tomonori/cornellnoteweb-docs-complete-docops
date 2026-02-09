#!/usr/bin/env bash
set -euo pipefail

if ! command -v codex >/dev/null 2>&1; then
  echo "ERROR: 'codex' command not found."
  echo "Install: npm i -g @openai/codex"
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: tools/docnew.sh "<natural language request for creating docs>""
  exit 1
fi

PROMPT="$1"

codex exec --full-auto "$obsidian-doc-new
${PROMPT}

最後に $obsidian-doc-check を実行し、reports/ にレポートを保存して。"
