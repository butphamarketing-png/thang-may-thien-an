/* eslint-disable no-console */
const fs = require("node:fs");
const path = require("node:path");

function safeUnlink(filePath) {
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    if (err && err.code === "ENOENT") return;
    throw err;
  }
}

const root = process.cwd();

// Keep lockfile hygiene when switching package managers
safeUnlink(path.join(root, "package-lock.json"));
safeUnlink(path.join(root, "yarn.lock"));

const ua = process.env.npm_config_user_agent || "";
if (!ua.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}

