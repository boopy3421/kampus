import { heapRank } from "./heap";

const BOOST_STORAGE_KEY = "kampus_listing_boosts";

interface BoostRecord {
  expiresAt: number;
  paidAt?: number;
}

function readBoosts(): Record<string, BoostRecord> {
  try {
    const raw = localStorage.getItem(BOOST_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, BoostRecord>) : {};
  } catch {
    return {};
  }
}

export function getBoostExpiry(productId: number): number {
  const record = readBoosts()[String(productId)];
  if (!record || typeof record.expiresAt !== "number") return 0;
  return record.expiresAt > Date.now() ? record.expiresAt : 0;
}

export function isBoosted(productId: number): boolean {
  return getBoostExpiry(productId) > 0;
}

export function splitByBoost<T extends { id: number }>(
  products: T[],
): { boosted: T[]; rest: T[] } {
  const boosts = readBoosts();
  const now = Date.now();

  const isActive = (id: number) => {
    const record = boosts[String(id)];
    if (!record || typeof record.expiresAt !== "number") return false;
    return record.expiresAt > now;
  };

  const priorityOf = (id: number) => {
    const record = boosts[String(id)];
    if (!record) return 0;
    return record.paidAt ?? record.expiresAt;
  };

  const boosted: T[] = [];
  const rest: T[] = [];
  for (const p of products) {
    if (isActive(p.id)) boosted.push(p);
    else rest.push(p);
  }

  const rankedBoosted = heapRank(boosted, (p) => priorityOf(p.id));

  return { boosted: rankedBoosted, rest };
}
