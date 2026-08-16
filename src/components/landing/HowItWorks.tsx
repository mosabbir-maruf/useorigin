import { FilePlus2, Vote, CircleDollarSign } from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const steps = [
  {
    n: "01",
    icon: FilePlus2,
    h: "Submit a proposal",
    b: "Creators submit a proposal with project scope, milestones, and requested amount.",
    tag: "48h review window",
  },
  {
    n: "02",
    icon: Vote,
    h: "Community votes",
    b: "Token holders vote during a defined window. Every ballot is cast and settled on-chain.",
    tag: "500 quorum · 60% to pass",
  },
  {
    n: "03",
    icon: CircleDollarSign,
    h: "Milestone disbursement",
    b: "Approved funds sit in escrow and release incrementally as milestones are verified complete.",
    tag: "Unused funds return to treasury",
  },
];

function TimelineNode({
  step,
  index,
  progress,
}: {
  step: any;
  index: number;
  progress: any;
}) {
  const isEven = index % 2 === 0;

  // Each node lights up at a specific point in the scroll
  // Since there are 3 steps, they represent roughly 16%, 50%, 84% of the container
  const thresholds = [0.15, 0.5, 0.85];
  const threshold = thresholds[index];

  // When progress passes the threshold, change properties
  const borderColor = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.05],
    ["var(--rule)", "var(--jade)"],
  );
  const iconColor = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.05],
    ["var(--dim)", "var(--jade)"],
  );
  const shadow = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.05],
    ["none", "0 0 20px rgba(255,60,0,0.3)"],
  );
  const bgNumColor = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.05],
    ["rgba(255,255,255,0.015)", "rgba(255,60,0,0.08)"],
  );
  const smallTextColor = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.05],
    ["var(--dim)", "var(--jade)"],
  );

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Empty space for opposite side on desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Central Node */}
      <motion.div
        className="absolute left-6 md:left-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transform -translate-x-1/2 flex items-center justify-center z-20"
        style={{
          background: "var(--cream)",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor,
          boxShadow: shadow,
        }}
      >
        <motion.div style={{ color: iconColor }}>
          <step.icon size={22} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 pl-14 sm:pl-20 md:px-16 ${
          isEven ? "md:text-right" : "md:text-left"
        } flex flex-col ${isEven ? "md:items-end" : "md:items-start"} py-4`}
      >
        <Parallax offset={[20, -20]} className="relative w-full max-w-sm">
          {/* Faded Background Number */}
          <motion.span
            className="f-mono absolute select-none hidden md:block"
            style={{
              fontSize: 120,
              fontWeight: 700,
              color: bgNumColor,
              lineHeight: 0.8,
              zIndex: -1,
              top: -30,
              [isEven ? "right" : "left"]: -20,
            }}
          >
            {step.n}
          </motion.span>

          <motion.span
            className="f-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              color: smallTextColor,
              marginBottom: 12,
              display: "block",
            }}
          >
            Step {step.n}
          </motion.span>

          <h3
            className="font-syne"
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: 16,
            }}
          >
            {step.h}
          </h3>

          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.7,
              color: "var(--dim)",
              marginBottom: 24,
            }}
          >
            {step.b}
          </p>

          <div
            className="f-mono inline-flex items-center gap-2"
            style={{
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 14px",
              background: "var(--muted)",
              color: "var(--ink)",
              borderRadius: 999,
              border: "1px solid var(--rule)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--jade)",
              }}
            />
            {step.tag}
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll strictly over the timeline container's height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Prevent scaleY from ever going below 0 or above 1 visually, though framer-motion clamps usually.
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="how-it-works"
      gradient="radial-gradient(45% 55% at 0% 0%, rgba(255,60,0,0.10), transparent 70%)"
    >
        {/* Header */}
        <Parallax
          offset={[30, -30]}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-10 lg:mb-24"
        >
          <div className="md:w-7/12">
            <div
              className="f-mono inline-flex items-center gap-2"
              style={{
                fontSize: 9,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--dim)",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--jade)",
                }}
              />
              The process
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(36px,4vw,60px)",
                lineHeight: 0.95,
                fontWeight: 300,
                color: "var(--ink)",
              }}
            >
              How funding
              <br />
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                works
              </em>
            </h2>
          </div>
          <div className="md:w-4/12 flex flex-col justify-end">
            <div
              style={{
                width: 40,
                height: 1,
                background: "var(--jade)",
                marginBottom: 20,
              }}
            />
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--dim)",
              }}
            >
              From pitch to payout, every step happens in public — reviewed,
              voted on, and settled by the community that funds it.
            </p>
          </div>
        </Parallax>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">
          {/* Static Background Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--rule)] transform md:-translate-x-1/2" />

          {/* Animated Active Track */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--jade)] transform md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-24 relative z-10">
            {steps.map((s, i) => (
              <TimelineNode
                key={s.n}
                step={s}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
    </Section>
  );
}
