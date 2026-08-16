import type { ReactNode } from "react";

export type TabChipTone = "success" | "warning" | "info" | "danger" | "neutral";

interface TabChipProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  activeTone?: TabChipTone;
  activeBorderColor?: string;
  activeBackground?: string;
  activeTextColor?: string;
  inactiveBorderColor?: string;
  inactiveTextColor?: string;
  className?: string;
}

const TONE_BORDER: Record<TabChipTone, string> = {
  success: "var(--jade)",
  warning: "#D4891A",
  info: "#0ea5e9",
  danger: "#c0392b",
  neutral: "var(--dim)",
};

const TONE_BACKGROUND: Record<TabChipTone, string> = {
  success: "rgba(16,185,129,0.08)",
  warning: "rgba(212,137,26,0.10)",
  info: "rgba(14,165,233,0.10)",
  danger: "rgba(192,57,43,0.10)",
  neutral: "rgba(148,163,184,0.10)",
};

export default function TabChip({
  active,
  onClick,
  children,
  activeTone = "success",
  activeBorderColor,
  activeBackground,
  activeTextColor = "var(--ink)",
  inactiveBorderColor = "var(--rule)",
  inactiveTextColor = "var(--dim)",
  className = "",
}: TabChipProps) {
  return (
    <button
      onClick={onClick}
      className={`f-mono t-colors whitespace-nowrap ${className}`.trim()}
      style={{
        fontSize: 9,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "8px 12px",
        borderRadius: 999,
        border: "1px solid",
        borderColor: active
          ? (activeBorderColor ?? TONE_BORDER[activeTone])
          : inactiveBorderColor,
        background: active
          ? (activeBackground ?? TONE_BACKGROUND[activeTone])
          : "transparent",
        color: active ? activeTextColor : inactiveTextColor,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
