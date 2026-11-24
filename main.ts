// Roast Your Own Agent — "Doc" roasts himself: one simple question turns
// into twelve clarifying questions, and the user ends up doing the helping.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST_LINE =
  "You asked me one simple question, so I asked twelve back — and by the end you'd answered them all and thanked me for helping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST_LINE, "utf8");
