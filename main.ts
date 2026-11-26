import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for the "Monday Morning Punchlines" bounty on make.fun.
// Writes exactly one joke — no extra text, no trailing newline — to entry.txt.
const JOKE =
  "My alarm went off Monday morning, looked at me, and hit snooze itself. Even the machine knows the week shouldn't start before coffee.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE);
