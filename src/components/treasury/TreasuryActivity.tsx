import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { treasuryActivityData } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const $N = (n: number) => n.toLocaleString();

export default function TreasuryActivity() {
  const chartRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chartRef,
    offset: ["start 90%", "center 50%"],
  });

  const insetRight = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(insetRight, (val) => `inset(0 ${val}% 0 0)`);

  return (
    <section
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--rule)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(45% 55% at 0% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <Parallax offset={[40, -40]}>
            <div
              className="f-mono inline-flex items-center gap-2 mb-4"
              style={{
                fontSize: 9,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--dim)",
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
              Activity
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(28px,7vw,52px)",
                lineHeight: 0.98,
                fontWeight: 300,
                color: "var(--ink)",
                marginBottom: 8,
              }}
            >
              Treasury{" "}
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                Activity
              </em>
            </h2>
            <p
              className="f-mono"
              style={{
                fontSize: 11,
                color: "var(--dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Inflows vs Outflows — Last 6 Months
            </p>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full md:w-auto"
          >
            <div
              className="t-colors"
              style={{
                padding: "14px 16px",
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 16,
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--rule)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="f-mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Total Inflow
              </div>
              <div
                className="f-mono"
                style={{ fontSize: 18, color: "var(--jade)" }}
              >
                $1.24M
              </div>
            </div>
            <div
              className="t-colors"
              style={{
                padding: "14px 16px",
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 16,
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--rule)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="f-mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Total Outflow
              </div>
              <div
                className="f-mono"
                style={{ fontSize: 18, color: "var(--ink)" }}
              >
                $738K
              </div>
            </div>
            <div
              className="t-colors"
              style={{
                padding: "14px 16px",
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 16,
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--rule)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="f-mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Net Change
              </div>
              <div
                className="f-mono"
                style={{ fontSize: 18, color: "var(--jade)" }}
              >
                +$502K
              </div>
            </div>
          </Parallax>
        </div>

        <Parallax
          offset={[80, -80]}
          className="h-[280px] sm:h-[340px] md:h-[400px]"
          style={{
            width: "100%",
            background: "var(--white)",
            border: "1px solid var(--rule)",
            borderRadius: 24,
            padding:
              "clamp(20px,4vw,40px) clamp(10px,2vw,20px) clamp(10px,2vw,20px) 0",
          }}
        >
          <motion.div
            ref={chartRef}
            style={{ width: "100%", height: "100%", clipPath }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={treasuryActivityData}>
                <defs>
                  <linearGradient id="colorInflow" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--jade)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--jade)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="colorOutflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a3a3a3" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#a3a3a3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="var(--rule)"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "var(--dim)",
                    fontSize: 10,
                    fontFamily: "monospace",
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "var(--dim)",
                    fontSize: 10,
                    fontFamily: "monospace",
                  }}
                  tickFormatter={(v) => `$${v >= 1000 ? v / 1000 + "k" : v}`}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--white)",
                    border: "1px solid var(--rule)",
                    borderRadius: 16,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.55)",
                  }}
                  itemStyle={{ fontFamily: "monospace", fontSize: 12 }}
                  labelStyle={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "var(--dim)",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                  formatter={(val: any) => [`$${$N(val as number)}`, ""] as any}
                />
                <Area
                  isAnimationActive={false}
                  type="monotone"
                  dataKey="inflow"
                  stroke="var(--jade)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorInflow)"
                />
                <Area
                  isAnimationActive={false}
                  type="monotone"
                  dataKey="outflow"
                  stroke="#a3a3a3"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorOutflow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}
