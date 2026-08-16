import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
  type HTMLMotionProps,
} from "motion/react";

interface ParallaxProps extends Omit<
  HTMLMotionProps<"div">,
  "offset" | "style"
> {
  children: React.ReactNode;
  offset?: number | [number, number] | [string, string];
  className?: string;
  style?: React.CSSProperties;
  axis?: "y" | "x";
  scrollOffset?: [
    "start start" | "start end" | "end start" | "end end",
    "start start" | "start end" | "end start" | "end end",
  ];
}

export function Parallax({
  children,
  offset = [60, -60],
  className = "",
  style,
  axis = "y",
  scrollOffset = ["start end", "end start"],
  ...rest
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });

  // Normalize offset to an array
  const outputRange = Array.isArray(offset) ? offset : [offset, -offset];
  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    outputRange as any,
  );

  const motionStyle: MotionStyle = {
    ...style,
    [axis]: transformValue,
  };

  return (
    <motion.div ref={ref} style={motionStyle} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
