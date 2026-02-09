# Agents（役割プロンプト集）

Codex が文書を更新する際に、観点漏れを防ぐための「役割」定義です。

- Requirements Writer: 要求（PP/SC/UC/FR/NFR）の品質
- System Architect: ADR/アーキテクチャ分割、依存関係
- Data Modeler: ドメイン/ERD/DDL/移行
- API Designer: API（BD/DD）
- UI/UX Designer: UI/UX（BD/DD）
- Security & Privacy: SEC/PRC
- SRE/Observability: AV/PS/OBY/監視/運用
- QA/Test Engineer: UT/IT/AT

使い方（例）:
- 「APIのエラーコードを整理して」→ `API Designer` + `QA/Test Engineer`
- 「性能要件を追加して」→ `SRE/Observability` + `System Architect`
