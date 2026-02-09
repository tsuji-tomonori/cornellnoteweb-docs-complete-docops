#!/usr/bin/env bash
set -euo pipefail

if ! command -v codex >/dev/null 2>&1; then
  echo "ERROR: 'codex' command not found."
  echo "Install: npm i -g @openai/codex"
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: tools/docops.sh "<natural language request>""
  exit 1
fi

PROMPT="$1"

# We explicitly mention the skills so Codex reliably loads them.
codex exec --full-auto "$docops-orchestrator
${PROMPT}

最後に $obsidian-doc-check を実行し、reports/ にレポートを保存して。"
