import type { TabChipTone } from "@/components/ui/TabChip";

export const $M = (n: number) =>
  n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${(n / 1e3).toFixed(0)}K`;

export const $N = (n: number) => n.toLocaleString();

export const statusColor = (s: string) =>
  s === "Active" ||
  s === "Active Voting" ||
  s === "Voting" ||
  s === "In Progress" ||
  s === "Under Review" ||
  s === "Pending"
    ? "#D4891A"
    : s === "Approved" ||
        s === "Funded" ||
        s === "Completed" ||
        s === "Passed" ||
        s === "Executed" ||
        s === "Released" ||
        s === "Yes"
      ? "var(--jade)"
      : s === "Upcoming" || s === "Draft" || s === "Pending Review"
        ? "#0ea5e9"
        : s === "No" || s === "Defeated" || s === "Failed"
          ? "#dc2626"
          : s === "Rejected"
            ? "#c0392b"
            : "var(--dim)";

export const listStatusColor = (s: string) =>
  s === "Active Voting"
    ? "#D4891A"
    : ["Approved", "Funded", "Completed"].includes(s)
      ? "var(--jade)"
      : "var(--dim)";

export const landingStatusColor = (s: string) =>
  s === "Voting"
    ? "#D4891A"
    : s === "Approved" || s === "Funded"
      ? "var(--jade)"
      : "var(--dim)";

export const statusTone = (s: string): TabChipTone =>
  s === "Active Voting" || s === "Voting"
    ? "warning"
    : s === "Pending Review" || s === "Upcoming" || s === "Draft"
      ? "info"
      : s === "Rejected" || s === "Failed" || s === "Defeated" || s === "No"
        ? "danger"
        : s === "All"
          ? "neutral"
          : "success";