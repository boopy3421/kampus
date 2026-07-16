export function stringDistance(a: string, b: string): number {
  const n = a.length;
  const m = b.length;

  if (n === 0) return m;
  if (m === 0) return n;

  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(m + 1).fill(0),
  );

  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][m];
}

export function fuzzyMatch(
  query: string,
  titles: string[],
  limit = 5,
): string[] {
  const key = query.trim().toLowerCase();
  if (!key) return [];

  const maxDistance = key.length <= 4 ? 1 : 2;

  const scored: { title: string; distance: number }[] = [];
  for (const title of titles) {
    const words = title.toLowerCase().split(/\s+/);
    let best = Infinity;
    for (const word of words) {
      const distance = stringDistance(key, word);
      if (distance < best) best = distance;
    }
    if (best <= maxDistance) {
      scored.push({ title, distance: best });
    }
  }

  scored.sort((a, b) => a.distance - b.distance);
  return scored.slice(0, limit).map((s) => s.title);
}
