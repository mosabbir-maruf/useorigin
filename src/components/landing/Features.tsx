import { Wallet, PieChart, Users, ArrowDown } from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";
import { creators, avatarUrl } from "@/data/mockData";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function AnimatedCircle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <ellipse
          cx="100"
          cy="50"
          rx="75"
          ry="30"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="6"
        />
        <motion.ellipse
          cx="100"
          cy="50"
          rx="75"
          ry="30"
          fill="none"
          stroke="var(--jade)"
          strokeWidth="3"
          className="opacity-90"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

function AnimatedMilestoneChart() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const pathLength = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <div ref={ref} className="w-full h-16">
      <svg
        className="w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
        viewBox="0 0 200 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q15,35 30,40 T60,30 T90,40 T120,25 T150,35 T180,20 L200,25 L200,50 L0,50 Z"
          fill="url(#gradientFade)"
          opacity="0.3"
        />
        <motion.path
          d="M0,40 Q15,35 30,40 T60,30 T90,40 T120,25 T150,35 T180,20 L200,25"
          fill="none"
          stroke="var(--jade)"
          strokeWidth="1.5"
          className="opacity-80"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="gradientFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--jade)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--jade)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AnimatedTreasuryChart() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const pathLength = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <div ref={ref} className="w-[120%] h-full -ml-4">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,45 L5,40 L10,48 L15,35 L20,38 L25,25 L30,30 L35,42 L40,38 L45,28 L50,40 L55,30 L60,15 L65,25 L70,20 L75,32 L80,25 L85,10 L90,15 L95,5 L100,10"
          fill="none"
          stroke="var(--jade)"
          strokeWidth="1.5"
          className="drop-shadow-md"
          style={{ pathLength }}
        />
        <path
          d="M0,45 L5,40 L10,48 L15,35 L20,38 L25,25 L30,30 L35,42 L40,38 L45,28 L50,40 L55,30 L60,15 L65,25 L70,20 L75,32 L80,25 L85,10 L90,15 L95,5 L100,10 L100,50 L0,50 Z"
          fill="url(#gradientFade2)"
          opacity="0.1"
        />
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradientFade2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--jade)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--jade)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AnimatedWallet() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scaleOuter = useTransform(scrollYProgress, [0.2, 0.8], [0.5, 1]);
  const opacityOuter = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.5]);
  const scaleInner = useTransform(scrollYProgress, [0.4, 1], [0.5, 1]);
  const opacityInner = useTransform(scrollYProgress, [0.4, 1], [0, 0.25]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-24 h-24 rounded-full border border-[var(--rule)] transition-transform duration-500 group-hover:scale-105"
    >
      <motion.div
        className="absolute inset-2 rounded-full border border-[var(--rule)]"
        style={{ scale: scaleOuter, opacity: opacityOuter }}
      ></motion.div>
      <motion.div
        className="absolute inset-4 rounded-full border border-[var(--rule)]"
        style={{ scale: scaleInner, opacity: opacityInner }}
      ></motion.div>
      <Wallet size={32} className="text-[var(--jade)] opacity-80 z-10" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--jade)] shadow-[0_0_8px_var(--jade)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[slide-up_2s_ease-in-out_infinite_alternate]"></div>
    </div>
  );
}

function AnimatedBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const topCreators = [
    creators[
      "c-007" // Elena Rostova (ER)
    ],
    creators[
      "c-002" // Maya Okonkwo (MO)
    ],
    creators["c-001"], // Aria Chen (AC)
  ];

  return (
    <div
      ref={ref}
      className="relative h-full flex flex-col items-center justify-center gap-4 mt-8 sm:mt-0 w-full"
    >
      <motion.div
        style={{ x: xLeft, opacity }}
        className="flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[var(--rule)] rounded-full pl-2 pr-5 py-1.5 self-end sm:-mr-4 shadow-lg transform transition-transform duration-700 group-hover:-translate-x-6"
      >
        <img
          src={avatarUrl(topCreators[0].id)}
          alt={topCreators[0].name}
          loading="lazy"
          decoding="async"
          className="w-8 h-8 rounded-full border border-[var(--rule)] object-cover bg-[var(--rule)]"
        />
        <span className="text-xs text-[var(--ink)] f-mono">
          {topCreators[0].name}
        </span>
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[var(--rule)] rounded-full pl-2 pr-5 py-1.5 self-center shadow-lg transition-transform duration-700 group-hover:scale-105"
      >
        <img
          src={avatarUrl(topCreators[1].id)}
          alt={topCreators[1].name}
          loading="lazy"
          decoding="async"
          className="w-8 h-8 rounded-full border border-[var(--rule)] object-cover bg-[var(--rule)]"
        />
        <span className="text-xs text-[var(--ink)] f-mono">
          {topCreators[1].name}
        </span>
      </motion.div>
      <motion.div
        style={{ x: xRight, opacity }}
        className="flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[var(--rule)] rounded-full pl-2 pr-5 py-1.5 self-start sm:-ml-4 shadow-lg transform transition-transform duration-700 group-hover:translate-x-6"
      >
        <img
          src={avatarUrl(topCreators[2].id)}
          alt={topCreators[2].name}
          loading="lazy"
          decoding="async"
          className="w-8 h-8 rounded-full border border-[var(--rule)] object-cover bg-[var(--rule)]"
        />
        <span className="text-xs text-[var(--ink)] f-mono">
          {topCreators[2].name}
        </span>
      </motion.div>
    </div>
  );
}

export default function Features() {
  return (
    <Section
      id="features"
      gradient="radial-gradient(45% 60% at 100% 0%, rgba(255,60,0,0.12), transparent 70%)"
    >
        <Parallax
          offset={[50, -50]}
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
              Why Origin
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
              Funding, built
              <br />
              in the{" "}
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                open
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
              A protocol-native alternative to grant committees — where the
              rules are code and every decision is visible.
            </p>
          </div>
        </Parallax>

        <div className="flex flex-col gap-4">
          {/* Top Row: 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Card 1: 100% Transparent */}
            <Parallax
              offset={[60, -60]}
              className="group t-colors"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <div className="flex flex-col items-center justify-center h-full p-5 sm:p-8 text-center min-h-[280px] sm:min-h-[320px]">
                <div className="relative mb-6 flex items-center justify-center w-full flex-1">
                  <div className="text-5xl font-syne font-bold text-[var(--ink)] z-10 transition-transform duration-500 group-hover:scale-110">
                    100%
                  </div>
                  <AnimatedCircle />
                </div>
                <h3 className="font-syne text-xl font-medium text-[var(--ink)]">
                  Fully Transparent
                </h3>
              </div>
            </Parallax>

            {/* Card 2: Secure by default */}
            <Parallax
              offset={[80, -80]}
              className="group t-colors"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <div className="flex flex-col items-center text-center h-full p-5 sm:p-8 min-h-[280px] sm:min-h-[320px]">
                <div className="relative mb-6 flex items-center justify-center w-full flex-1">
                  <AnimatedWallet />
                </div>
                <h3 className="font-syne text-lg font-medium text-[var(--ink)] mb-3">
                  Secure by default
                </h3>
                <p className="text-[13px] text-[var(--dim)] leading-relaxed max-w-[240px]">
                  Connect any supported wallet to vote or propose. Origin never
                  holds your keys.
                </p>
              </div>
            </Parallax>

            {/* Card 3: Milestone-gated */}
            <Parallax
              offset={[100, -100]}
              className="group t-colors"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <div className="flex flex-col items-center text-center h-full p-5 sm:p-8 min-h-[280px] sm:min-h-[320px]">
                <div className="relative mb-6 flex flex-col items-center justify-center w-full flex-1 pt-4">
                  <div className="w-full flex justify-between text-[9px] uppercase tracking-widest text-[var(--dim)] mb-4 px-4 opacity-70">
                    <span className="flex items-center gap-1">
                      <ArrowDown size={10} /> Funds
                    </span>
                    <span>Releasing</span>
                  </div>
                  <AnimatedMilestoneChart />
                </div>
                <h3 className="font-syne text-lg font-medium text-[var(--ink)] mb-3">
                  Milestone-gated
                </h3>
                <p className="text-[13px] text-[var(--dim)] leading-relaxed max-w-[240px]">
                  Funds are released incrementally as creators hit shipped
                  milestones, not all at once.
                </p>
              </div>
            </Parallax>
          </div>

          {/* Bottom Row: 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Card 4: Real-time Treasury */}
            <Parallax
              offset={[70, -70]}
              className="group t-colors"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full p-5 sm:p-8 min-h-[280px] sm:min-h-[300px] gap-8 items-center relative overflow-hidden">
                <div className="flex flex-col z-10">
                  <div className="w-10 h-10 rounded-full border border-[var(--rule)] flex items-center justify-center mb-6 text-[var(--jade)] bg-[rgba(255,60,0,0.05)]">
                    <PieChart size={18} />
                  </div>
                  <h3 className="font-syne text-lg font-medium text-[var(--ink)] mb-3">
                    Real-time Treasury
                  </h3>
                  <p className="text-[13px] text-[var(--dim)] leading-relaxed pr-4">
                    Track every dollar in real time — balances, allocations, and
                    disbursements are broken down by category.
                  </p>
                </div>
                <div className="relative h-full flex items-end justify-end opacity-60 transition-opacity duration-500 group-hover:opacity-100 mt-8 sm:mt-0">
                  <div className="w-full h-48 border border-[var(--rule)] rounded-tl-xl border-b-0 border-r-0 relative bg-[rgba(255,255,255,0.01)] overflow-hidden pt-8 transform transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <div className="absolute top-3 left-4 flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--rule)]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--rule)]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--rule)]"></div>
                    </div>
                    <AnimatedTreasuryChart />
                  </div>
                </div>
              </div>
            </Parallax>

            {/* Card 5: Verifiable Reputation */}
            <Parallax
              offset={[90, -90]}
              className="group t-colors"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full p-5 sm:p-8 min-h-[280px] sm:min-h-[300px] gap-8 items-center relative overflow-hidden">
                <div className="flex flex-col z-10">
                  <div className="w-10 h-10 rounded-full border border-[var(--rule)] flex items-center justify-center mb-6 text-[var(--jade)] bg-[rgba(255,60,0,0.05)]">
                    <Users size={18} />
                  </div>
                  <h3 className="font-syne text-lg font-medium text-[var(--ink)] mb-3">
                    Verifiable Reputation
                  </h3>
                  <p className="text-[13px] text-[var(--dim)] leading-relaxed pr-4">
                    Creator profiles carry a public track record of proposals,
                    completions, and delivery rate.
                  </p>
                </div>
                <AnimatedBadges />
              </div>
            </Parallax>
          </div>
        </div>
    </Section>
  );
}
