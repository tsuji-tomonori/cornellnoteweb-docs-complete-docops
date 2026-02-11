import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { XMLParser } from "fast-xml-parser";

const rootDir = process.cwd();
const buildDir = path.join(rootDir, "build");
const mergedResultsDir = path.join(buildDir, "allure-results");
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

const sourceResultDirs = [
  {
    name: "junit",
    dir: path.join(buildDir, "allure-source", "junit"),
  },
  {
    name: "playwright",
    dir: path.join(buildDir, "allure-source", "playwright"),
  },
];

const qualitySources = [
  {
    kind: "pmd",
    title: "PMD 静的解析",
    reportPath: path.join(buildDir, "reports", "pmd", "main.xml"),
  },
  {
    kind: "spotbugs",
    title: "SpotBugs 静的解析",
    reportPath: path.join(buildDir, "reports", "spotbugs", "main.xml"),
  },
  {
    kind: "jacoco",
    title: "JaCoCo カバレッジ",
    reportPath: path.join(buildDir, "reports", "jacoco", "test", "jacocoTestReport.xml"),
  },
  {
    kind: "pitest",
    title: "PIT Mutation Testing",
    reportPath: path.join(buildDir, "reports", "pitest", "mutations.xml"),
  },
];

const markdownReports = [
  {
    title: "単体テストレポート（文書）",
    reportPath: path.join(
      rootDir,
      "docs",
      "4.単体テスト(UT)",
      "51.単体テストレポート",
      "UT-RPT-001.md",
    ),
  },
  {
    title: "静的解析（文書）",
    reportPath: path.join(rootDir, "docs", "4.単体テスト(UT)", "42.静的解析", "UT-STAT-001.md"),
  },
  {
    title: "結合テスト結果（文書）",
    reportPath: path.join(rootDir, "docs", "5.結合テスト(IT)", "41.結合テスト結果", "IT-RST-001.md"),
  },
  {
    title: "受入テスト報告（文書）",
    reportPath: path.join(rootDir, "docs", "6.受入テスト(AT)", "61.受入テスト報告", "AT-RPT-001.md"),
  },
];

const qualityThresholds = {
  jacocoLineCoverage: Number.parseFloat(process.env.ALLURE_JACOCO_MIN ?? "95"),
  pitMutationCoverage: Number.parseFloat(process.env.ALLURE_PIT_MIN ?? "80"),
};

await fs.rm(mergedResultsDir, { recursive: true, force: true });
await fs.mkdir(mergedResultsDir, { recursive: true });

for (const source of sourceResultDirs) {
  await copyResultFiles(source.name, source.dir, mergedResultsDir);
}

for (const source of qualitySources) {
  await emitQualityResult(source);
}

for (const source of markdownReports) {
  await emitMarkdownResult(source);
}

await emitEnvironmentInfo();

console.log(`Allure results collected at: ${path.relative(rootDir, mergedResultsDir)}`);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listFilesRecursively(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursively(fullPath)));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

async function copyResultFiles(sourceName, sourceDir, destinationDir) {
  if (!(await exists(sourceDir))) {
    console.log(`[skip] ${sourceName} results not found: ${path.relative(rootDir, sourceDir)}`);
    return;
  }

  const files = await listFilesRecursively(sourceDir);
  for (const filePath of files) {
    const baseName = path.basename(filePath);
    const copiedName = `${sourceName}-${crypto.randomUUID()}-${baseName}`;
    await fs.copyFile(filePath, path.join(destinationDir, copiedName));
  }
  console.log(`[ok] copied ${files.length} files from ${sourceName}`);
}

async function readXml(xmlPath) {
  if (!(await exists(xmlPath))) {
    return null;
  }

  const raw = await fs.readFile(xmlPath, "utf8");
  return parser.parse(raw);
}

function asArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

async function emitQualityResult(source) {
  const xml = await readXml(source.reportPath);
  if (!xml) {
    console.log(`[skip] ${source.kind} report not found: ${path.relative(rootDir, source.reportPath)}`);
    return;
  }

  let status = "passed";
  let detail = "";

  if (source.kind === "pmd") {
    const files = asArray(xml?.pmd?.file);
    const violations = files.flatMap((file) => asArray(file.violation));
    const byPriority = new Map();
    for (const violation of violations) {
      const priority = violation?.["@_priority"] ?? "unknown";
      byPriority.set(priority, (byPriority.get(priority) ?? 0) + 1);
    }
    const prioSummary = [...byPriority.entries()]
      .map(([priority, count]) => `P${priority}: ${count}`)
      .join(", ");
    status = violations.length === 0 ? "passed" : "failed";
    detail = `violations=${violations.length}${prioSummary ? ` (${prioSummary})` : ""}`;
  }

  if (source.kind === "spotbugs") {
    const bugs = asArray(xml?.BugCollection?.BugInstance);
    const highOrMedium = bugs.filter((bug) => {
      const prio = Number.parseInt(bug?.["@_priority"] ?? "3", 10);
      return Number.isFinite(prio) && prio <= 2;
    }).length;
    status = highOrMedium === 0 ? "passed" : "failed";
    detail = `total=${bugs.length}, high_medium=${highOrMedium}`;
  }

  if (source.kind === "jacoco") {
    const counters = asArray(xml?.report?.counter);
    const lineCounter = counters.find((counter) => counter?.["@_type"] === "LINE");
    const covered = Number.parseInt(lineCounter?.["@_covered"] ?? "0", 10);
    const missed = Number.parseInt(lineCounter?.["@_missed"] ?? "0", 10);
    const total = covered + missed;
    const lineCoverage = total === 0 ? 0 : (covered / total) * 100;
    status = lineCoverage >= qualityThresholds.jacocoLineCoverage ? "passed" : "failed";
    detail = `line_coverage=${lineCoverage.toFixed(2)}% (min=${qualityThresholds.jacocoLineCoverage}%)`;
  }

  if (source.kind === "pitest") {
    const mutations = asArray(xml?.mutations?.mutation);
    let detected = 0;
    for (const mutation of mutations) {
      if (mutation?.["@_detected"] === "true") {
        detected += 1;
      }
    }
    const total = mutations.length;
    const score = total === 0 ? 0 : (detected / total) * 100;
    status = score >= qualityThresholds.pitMutationCoverage ? "passed" : "failed";
    detail = `mutation_score=${score.toFixed(2)}% (min=${qualityThresholds.pitMutationCoverage}%)`;
  }

  const attachmentName = `${crypto.randomUUID()}-attachment.xml`;
  await fs.copyFile(source.reportPath, path.join(mergedResultsDir, attachmentName));
  await writeAllureTestCase({
    name: source.title,
    fullName: `quality.${source.kind}`,
    status,
    statusDetails: detail,
    suite: "Quality Reports",
    attachment: {
      name: path.basename(source.reportPath),
      source: attachmentName,
      type: "application/xml",
    },
  });

  console.log(`[ok] ${source.kind} -> ${status} (${detail})`);
}

async function emitMarkdownResult(source) {
  if (!(await exists(source.reportPath))) {
    console.log(`[skip] markdown report not found: ${path.relative(rootDir, source.reportPath)}`);
    return;
  }

  const attachmentName = `${crypto.randomUUID()}-attachment.md`;
  await fs.copyFile(source.reportPath, path.join(mergedResultsDir, attachmentName));
  await writeAllureTestCase({
    name: source.title,
    fullName: `doc.${path.basename(source.reportPath, ".md")}`,
    status: "passed",
    statusDetails: "Tracked in docs as a baseline report.",
    suite: "Documentation Reports",
    attachment: {
      name: path.basename(source.reportPath),
      source: attachmentName,
      type: "text/markdown",
    },
  });
}

async function writeAllureTestCase({
  name,
  fullName,
  status,
  statusDetails,
  suite,
  attachment,
}) {
  const uuid = crypto.randomUUID();
  const now = Date.now();
  const result = {
    uuid,
    name,
    fullName,
    status,
    stage: "finished",
    statusDetails: {
      message: statusDetails,
    },
    start: now,
    stop: now,
    labels: [
      { name: "suite", value: suite },
      { name: "framework", value: "custom-collector" },
      { name: "language", value: "javascript" },
      { name: "host", value: process.env.HOSTNAME ?? "local" },
    ],
    attachments: attachment ? [attachment] : [],
  };

  const resultPath = path.join(mergedResultsDir, `${uuid}-result.json`);
  await fs.writeFile(resultPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}

async function emitEnvironmentInfo() {
  const lines = [
    `node=${process.version}`,
    `platform=${process.platform}`,
    `jacoco_min=${qualityThresholds.jacocoLineCoverage}`,
    `pit_min=${qualityThresholds.pitMutationCoverage}`,
  ];
  await fs.writeFile(path.join(mergedResultsDir, "environment.properties"), `${lines.join("\n")}\n`, "utf8");
}
