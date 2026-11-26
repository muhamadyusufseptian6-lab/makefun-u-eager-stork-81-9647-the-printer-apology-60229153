import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Printer Apology — one line from a tired office printer.
// Revised: polite, resigned, and done being blamed for the cheap paper.
// The punch lands in the last beat: petty revenge, printed upside down.
const ENTRY =
  "Sorry I jammed on page 47 of 200. You fed me paper thinner than a rumour, then blamed me. I finished it upside down.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void process.env.MAKEFUN_INPUT_DIR;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
