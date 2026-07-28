import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const requiredFiles = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/globals.css",
  "next.config.ts",
  "tsconfig.json",
];

test("required Task001 files exist", async () => {
  await Promise.all(requiredFiles.map((file) => access(file)));
});

test("first page contains the project name and deployment status", async () => {
  const source = await readFile("src/app/page.tsx", "utf8");

  assert.match(source, /90-Day Travel English AI Coaching System/);
  assert.match(source, /running successfully/);
});

test("TypeScript strict mode is enabled", async () => {
  const source = await readFile("tsconfig.json", "utf8");
  const config = JSON.parse(source);

  assert.equal(config.compilerOptions.strict, true);
});
