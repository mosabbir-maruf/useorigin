export const $M = (n: number) =>
  n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${(n / 1e3).toFixed(0)}K`;
export const $N = (n: number) => n.toLocaleString();

export const statusColor = (s: string) =>
  s === "Voting"
    ? "#D4891A"
    : s === "Approved" || s === "Funded"
      ? "var(--jade)"
      : "var(--dim)";
