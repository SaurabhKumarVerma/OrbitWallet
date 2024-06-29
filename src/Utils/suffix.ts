export function formatNumber(num: number) {
  const suffixes = ["B", "M", "k"];
  const thresholds = [1_000_000_000, 1_000_000, 1_000];

  for (let i = 0; i < thresholds.length; i++) {
    if (num >= thresholds[i]) {
      return (num / thresholds[i]).toFixed(1).replace(/\.0$/, "") + suffixes[i];
    }
  }

  return num.toString();
}
