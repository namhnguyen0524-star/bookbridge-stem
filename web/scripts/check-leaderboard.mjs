// Safety check for the leaderboard names. Run: npm run check:leaderboard
// It runs automatically on every upload (CI) so a bad row stops the site from deploying.
// This is only a FIRST filter. A human must still read every name before adding it.
import { readFileSync } from "node:fs";

const rows = JSON.parse(readFileSync(new URL("../src/data/leaderboard.json", import.meta.url), "utf8"));

// Starter list of blocked words (add more any time). Matching ignores case and common
// letter tricks like 4 for a and 0 for o.
const BLOCKED = ["fuck", "shit", "bitch", "asshole", "dick", "cunt", "nazi", "rape", "porn", "sex"];

const normalize = (s) =>
  s.toLowerCase().replace(/[@4]/g, "a").replace(/[1!|]/g, "i").replace(/0/g, "o").replace(/3/g, "e")
    .replace(/[$5]/g, "s").replace(/[^a-z]/g, "");

const problems = [];
const slugs = new Set();
for (const r of rows) {
  const where = `"${r.name}" (${r.slug})`;
  if (!/^[a-z0-9-]{2,30}$/.test(r.slug)) problems.push(`${where}: slug must be 2-30 lowercase letters, numbers or dashes`);
  if (slugs.has(r.slug)) problems.push(`${where}: duplicate slug`);
  slugs.add(r.slug);
  if (typeof r.name !== "string" || r.name.length < 2 || r.name.length > 30) problems.push(`${where}: name must be 2-30 characters`);
  if (!Number.isInteger(r.books) || r.books < 1) problems.push(`${where}: books must be a whole number of at least 1`);
  if (/@|https?:|www\.|\.com|\d{6,}/i.test(r.name)) problems.push(`${where}: looks like contact info or a link`);
  const flat = normalize(r.name);
  for (const w of BLOCKED) if (flat.includes(w)) problems.push(`${where}: contains a blocked word`);
}

if (problems.length) {
  console.error("Leaderboard check FAILED:\n- " + problems.join("\n- "));
  process.exit(1);
}
console.log(`Leaderboard check passed (${rows.length} rows).`);
