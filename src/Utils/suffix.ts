export function formatNumber(num: number) {
  /**
   * Formats a given number into a human-readable string with appropriate suffixes (B, M, k).
   *
   * For example, 1234567 becomes "1.2M", 1234 becomes "1.2k", and 1234567890 becomes "1.2B".
   *
   * @param {number} num The number to be formatted.
   * @returns {string} The formatted string.
   */
  const suffixes = ["B", "M", "k"];
  const thresholds = [1_000_000_000, 1_000_000, 1_000];

  for (let i = 0; i < thresholds.length; i++) {
    if (num >= thresholds[i]) {
      return (num / thresholds[i]).toFixed(1).replace(/\.0$/, "") + suffixes[i];
    }
  }

  return num.toString();
}
