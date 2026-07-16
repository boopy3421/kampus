import type { Product } from "@/data/products";

const WEIGHTS = {
  category: 3,
  condition: 1,
  price: 1.5,
};

function priceSimilarity(a: number, b: number): number {
  const diff = Math.abs(a - b);
  const scale = Math.max(a, b, 1);
  return Math.max(0, 1 - diff / scale);
}

function scoreAgainst(candidate: Product, liked: Product): number {
  let score = 0;
  if (candidate.category === liked.category) score += WEIGHTS.category;
  if (candidate.condition && candidate.condition === liked.condition) {
    score += WEIGHTS.condition;
  }
  score += WEIGHTS.price * priceSimilarity(candidate.price, liked.price);
  return score;
}

function scoreListing(candidate: Product, likedListings: Product[]): number {
  let best = 0;
  for (const liked of likedListings) {
    const score = scoreAgainst(candidate, liked);
    if (score > best) best = score;
  }
  return best;
}

export function getRecommendations(
  allProducts: Product[],
  likedIds: number[],
  limit = 5,
): Product[] {
  if (likedIds.length === 0) return [];

  const likedSet = new Set(likedIds);
  const likedListings = allProducts.filter((p) => likedSet.has(p.id));
  const candidates = allProducts.filter((p) => !likedSet.has(p.id));

  return candidates
    .map((product) => ({
      product,
      score: scoreListing(product, likedListings),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.product);
}
