const BOOST_STORAGE_KEY = "kampus_listing_boosts";

const DEMO_BOOSTS: { productId: number; daysLeft: number }[] = [
  { productId: 4, daysLeft: 3 },
  { productId: 12, daysLeft: 7 },
  { productId: 6, daysLeft: 14 },
  { productId: 1, daysLeft: 21 },
  { productId: 5, daysLeft: 30 },
];

export function seedDemoBoosts() {
  try {
    const existing = localStorage.getItem(BOOST_STORAGE_KEY);
    if (existing) return;

    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    const boosts: Record<
      string,
      {
        expiresAt: number;
        amount: number;
        planDays: number;
        paidAt: number;
        method: string;
      }
    > = {};

    DEMO_BOOSTS.forEach(({ productId, daysLeft }, index) => {
      boosts[String(productId)] = {
        expiresAt: now + daysLeft * dayMs,
        amount: 0,
        planDays: daysLeft,
        paidAt: now - index * dayMs,
        method: "demo-seed",
      };
    });

    localStorage.setItem(BOOST_STORAGE_KEY, JSON.stringify(boosts));
  } catch {}
}
