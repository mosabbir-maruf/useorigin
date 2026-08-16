import { treasuryStats, proposals, calculateFunding } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $M } from "./utils";

export default function TreasuryTable() {
  // Dynamically compute treasury allocation by category based on released funds
  const allocationByCategory = proposals.reduce(
    (acc, p) => {
      const released = calculateFunding(p).released;
      if (released > 0) {
        acc[p.category] = (acc[p.category] || 0) + released;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const totalAllocated = Object.values(allocationByCategory).reduce(
    (sum, val) => sum + val,
    0,
  );

  const treasuryAllocation = Object.entries(allocationByCategory)
    .map(([name, amount]) => ({
      name,
      amount,
      value:
        totalAllocated > 0 ? Math.round((amount / totalAllocated) * 100) : 0,
    }))
    .sort((a, b) => b.amount - a.amount);

  return (
    <section
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
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
            "radial-gradient(45% 60% at 100% 100%, rgba(255,60,0,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <div className="flex flex-col gap-6 lg:gap-14 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
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
                Treasury
              </div>
              <h2
                className="font-syne"
                style={{
                  fontSize: "clamp(36px,4vw,60px)",
                  lineHeight: 0.92,
                  fontWeight: 300,
                  color: "var(--ink)",
                }}
              >
                Fully{" "}
                <em
                  className="font-instrument"
                  style={{ fontStyle: "italic", color: "var(--jade)" }}
                >
                  transparent
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
                Track every dollar in real time. All balances, allocations, and
                disbursements are completely transparent and auditable on-chain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
            {[
              { l: "Balance", v: $M(treasuryStats.totalTreasury), u: "USDC" },
              {
                l: "Distributed",
                v: $M(treasuryStats.distributed),
                u: "to date",
              },
              {
                l: "Utilization",
                v: `${Math.round((treasuryStats.distributed / (treasuryStats.totalTreasury + treasuryStats.distributed)) * 100)}%`,
                u: "deployed",
              },
            ].map((s) => (
              <div
                key={s.l}
                className="w-full min-w-0"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  borderRadius: 18,
                  padding: "18px 22px",
                }}
              >
                <div
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    marginBottom: 8,
                  }}
                >
                  {s.l}
                </div>
                <div>
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 20,
                      fontWeight: 300,
                      color: "var(--ink)",
                    }}
                  >
                    {s.v}
                  </span>
                  <span
                    className="f-mono"
                    style={{ fontSize: 9, color: "var(--dim)", marginLeft: 6 }}
                  >
                    {s.u}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* allocation list */}
        <Parallax
          offset={[60, -60]}
          className="w-full overflow-hidden"
          style={{
            background: "var(--white)",
            border: "1px solid var(--rule)",
            borderRadius: 24,
            padding: "12px",
          }}
        >
          <div
            className="overflow-x-auto w-full"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="min-w-[640px]">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 60px 90px 160px",
                  padding: "12px 20px",
                }}
              >
                {["Category", "Allocated", "Share", "YTD", ""].map((h) => (
                  <div
                    key={h}
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      textAlign: h === "" ? "right" : "left",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {treasuryAllocation.map((a, i) => {
                const ytd = [
                  "+2.1%",
                  "+0.8%",
                  "+1.4%",
                  "-0.3%",
                  "+0.9%",
                  "+0.2%",
                ][i % 6];
                return (
                  <div
                    key={a.name}
                    className="t-colors"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 120px 60px 90px 160px",
                      padding: "16px 20px",
                      borderRadius: 14,
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--muted)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: `rgba(255,60,0,${0.95 - i * 0.14})`,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 13, color: "var(--ink)" }}>
                        {a.name}
                      </span>
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 13, color: "var(--dim)" }}
                    >
                      ${(a.amount / 1000).toFixed(0)}K
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 13, color: "var(--ink)" }}
                    >
                      {a.value}%
                    </div>
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 12,
                        color: ytd.startsWith("+") ? "var(--jade)" : "#c0392b",
                      }}
                    >
                      {ytd}
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "var(--muted)",
                        borderRadius: 999,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          borderRadius: 999,
                          width: `${Math.min(100, a.value * 3.2)}%`,
                          background: "var(--jade)",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              {treasuryAllocation.length === 0 && (
                <div
                  style={{
                    padding: 40,
                    textAlign: "center",
                    color: "var(--dim)",
                  }}
                  className="f-mono"
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    No Data Available
                  </span>
                </div>
              )}
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
