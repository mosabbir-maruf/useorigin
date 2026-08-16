import type { CSSProperties, ElementType, ReactNode } from "react";

interface SectionProps {
  as?: ElementType;
  id?: string;
  background?: string;
  color?: string;
  borderTop?: string;
  borderBottom?: string;
  gradient?: string;
  containerClassName?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Section({
  as: Tag = "section",
  id,
  background = "var(--cream)",
  color,
  borderTop,
  borderBottom,
  gradient,
  containerClassName = "max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative",
  className = "",
  style,
  children,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={className}
      style={{
        background,
        color,
        borderTop,
        borderBottom,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {gradient && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: gradient,
            pointerEvents: "none",
          }}
        />
      )}
      <div className={containerClassName}>{children}</div>
    </Tag>
  );
}