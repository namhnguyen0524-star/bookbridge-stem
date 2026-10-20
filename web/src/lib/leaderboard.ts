import data from "@/data/leaderboard.json";

// One donor on the leaderboard. We only add a row AFTER a human confirms the books arrived.
export type Donor = { slug: string; name: string; books: number };

// Sort by most books first; ties are broken by name so the order is stable.
export function rankedDonors(): Donor[] {
  return [...(data as Donor[])].sort((a, b) => b.books - a.books || a.name.localeCompare(b.name));
}

export const topTen = () => rankedDonors().slice(0, 10);
