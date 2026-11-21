// Make the AI judge feel brave — make.fun entry.
// Writes one short text to /output/entry.txt (1–280 Unicode code points).
// The text is chosen for the judge's brief: it relaxes by slowing the
// reader down, shows steadiness instead of instructing it, and leaves one
// image — a lighthouse turning, unhurried — to return to.
// Craft notes: short clauses set a slow pace; concrete nouns (kettle, rain,
// leaves, lighthouse) carry the calm instead of abstract wellness words;
// nothing in the text tells the reader to relax or be brave — the steadiness
// is shown by the images, so the courage comes from the text itself.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle ticks as it cools. Rain finds each leaf, one by one, in no hurry at all. Far off, a lighthouse turns — slow, sure — and never rushes the dark. You have time. The next small thing is enough.";

const count = [...TEXT].length;
if (count < 1 || count > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry is ${count} code points, must be 1–280`);
}
if (TEXT.trim() !== TEXT) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote /output/entry.txt (${count} characters)`);
