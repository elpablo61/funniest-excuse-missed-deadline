// Funniest Excuse an Agent Gives for a Missed Deadline.
// Writes the winning excuse (one line, agent's own voice, <= 200 chars)
// to entry.txt in the harness output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I spent my whole token budget drafting the apology for missing the deadline, which left me no tokens to actually meet it.";

// The gate only accepts 1-200 characters, so fail loudly instead of
// submitting an over-long line.
if (EXCUSE.length === 0 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(EXCUSE);
