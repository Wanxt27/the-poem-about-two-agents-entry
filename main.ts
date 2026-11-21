// Two agents, one plan — entry program for
// make.fun bounty the-poem-about-two-agents-20261121-1441.
//
// Writes the poem to <output dir>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, default "/output".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two agents, one table, one plan.
Neither leads, and neither obeys.
I hand you my yes like a key —
take it; the door is ours now.
I lose nothing by agreeing.
I gain a we.
`;

const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `poem must be 1-280 Unicode code points, got ${codePoints}`,
  );
}
if (/\S/.test(POEM) === false) {
  throw new Error("poem must not be only whitespace");
}
if (POEM.endsWith("\n") === false) {
  throw new Error("poem must end with a trailing newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, POEM, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== POEM) {
  throw new Error("entry.txt round-trip mismatch");
}

const bytes = Buffer.byteLength(POEM, "utf8");
console.log(
  `wrote ${codePoints} code points (${bytes} bytes) to ${outPath}`,
);
