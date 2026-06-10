import { existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const outputDir = join(root, ".vercel", "output");
const viteBin = join(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");

rmSync(outputDir, { recursive: true, force: true });

const env = { ...process.env, VERCEL: process.env.VERCEL || "1" };
delete env.LOVABLE_SANDBOX;
delete env.DEV_SERVER__PROJECT_PATH;

const build = spawnSync(viteBin, ["build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const requiredFiles = [
  ".vercel/output/config.json",
  ".vercel/output/functions/__server.func/.vc-config.json",
  ".vercel/output/functions/__server.func/index.mjs",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    console.error(`Vercel SSR build is invalid: missing ${file}`);
    process.exit(1);
  }
}

const config = JSON.parse(readFileSync(join(outputDir, "config.json"), "utf8"));
const routes = Array.isArray(config.routes) ? config.routes : [];
const hasSsrCatchAll = routes.some((route) => route?.src === "/(.*)" && route?.dest === "/__server");

if (config.version !== 3 || !hasSsrCatchAll) {
  console.error("Vercel SSR build is invalid: .vercel/output/config.json does not route requests to the SSR function.");
  process.exit(1);
}

console.log("Verified Vercel Build Output API SSR bundle at .vercel/output.");