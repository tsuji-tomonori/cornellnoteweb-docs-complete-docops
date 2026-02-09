Param(
  [Parameter(Mandatory=$true, Position=0)]
  [string]$Prompt
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command codex -ErrorAction SilentlyContinue)) {
  Write-Error "ERROR: 'codex' command not found. Install: npm i -g @openai/codex"
  exit 1
}

$fullPrompt = @"
$docops-orchestrator
$Prompt

最後に $obsidian-doc-check を実行し、reports/ にレポートを保存して。
"@

codex exec --full-auto $fullPrompt
