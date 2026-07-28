import fs from "fs/promises";
import path from "path";

const LOGS_DIR = path.join(process.cwd(), "logs");

export type ErrorReport = {
  timestamp: string;
  type: string;
  message: string;
  path?: string;           // request path or page
  file?: string;           // problematic file + line
  stack?: string;
  extra?: Record<string, any>;
  source: "server" | "client" | "middleware" | "api";
};

function getTodayFileName() {
  const today = new Date().toISOString().slice(0, 10); // 2026-07-27
  return `errors-${today}.log`;
}

async function ensureLogsDir() {
  try {
    await fs.mkdir(LOGS_DIR, { recursive: true });
  } catch {
    // already exists
  }
}

/** Extract the most relevant file from a stack trace */
function extractProblematicFile(stack?: string): string {
  if (!stack) return "unknown";

  const lines = stack.split("\n");

  // Skip the first line (error message) and look for the first real file
  for (const line of lines) {
    // Matches: at something (file.ts:12:34)  or  at file.ts:12:34
    const match = line.match(/\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)/);
    if (match) {
      const file = match[1] || match[4];
      const lineNum = match[2] || match[5];
      // Ignore node_modules and next internal files
      if (
        file &&
        !file.includes("node_modules") &&
        !file.includes("next/dist") &&
        !file.includes("webpack")
      ) {
        return `${file}:${lineNum}`;
      }
    }
  }
  return "unknown (check full stack)";
}

export async function logError(report: Omit<ErrorReport, "timestamp" | "file"> & { stack?: string }) {
  // Only run on server (Node.js runtime)
  if (typeof window !== "undefined") return;

  await ensureLogsDir();

  const fullReport: ErrorReport = {
    ...report,
    timestamp: new Date().toISOString(),
    file: extractProblematicFile(report.stack),
  };

  const logLine = JSON.stringify(fullReport) + "\n";
  const filePath = path.join(LOGS_DIR, getTodayFileName());

  try {
    await fs.appendFile(filePath, logLine, "utf8");
  } catch (err) {
    // Fallback so we never crash because of logging
    console.error("[ErrorLogger] Failed to write log:", err);
    console.error("[ErrorLogger] Original error:", fullReport);
  }
}