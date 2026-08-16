import { treasuryStats, treasuryAssets } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $N } from "@/lib/format";

export default function TreasuryOverview() {
  const totalAllTime = treasuryStats.totalTreasury + treasuryStats.distributed;

  const treasuryAllocationData = [
    {
      category: "Available for New Funding",
      amount: treasuryStats.available,
      percent: Math.round((treasuryStats.available / totalAllTime) * 100),
    },
    {
      category: "Locked in Milestones",
      amount: treasuryStats.allocated,
      percent: Math.round((treasuryStats.allocated / totalAllTime) * 100),
    },
    {
      category: "Distributed / Released",
      amount: treasuryStats.distributed,
      percent: Math.round((treasuryStats.distributed / totalAllTime) * 100),
    },
  ];

  return (
    <>
      {/* ── Hero Header ── */}
      <section
        style={{
          background: "var(--pit)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 1000,
            height: 600,
            background:
              "radial-gradient(ellipse at top, rgba(255,60,0,0.12), transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-50%",
            left: "-10%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.05), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <Parallax
          offset={[60, -60]}
          className="max-w-[1440px] mx-auto px-6 md:px-10 relative"
          style={{
            padding: "100px 0 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="f-mono inline-flex items-center gap-3 animate-fadeIn"
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--pit-dim)",
              marginBottom: 40,
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
            Decentralized Autonomous Creator Fund
          </div>

          <h1
            className="font-syne animate-fadeIn animation-delay-200"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1,
              color: "var(--pit-text)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              maxWidth: 1000,
            }}
          >
            Track the{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Funds
            </em>{" "}
            <br />
            powering Origin
          </h1>

          <p
            className="animate-fadeIn animation-delay-300"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--pit-dim)",
              maxWidth: 560,
              marginBottom: 64,
            }}
          >
            The DAO Treasury manages and transparently distributes funds to
            approved creator projects through governance votes and
            milestone-based releases.
          </p>

          <div
            className="animate-fadeIn animation-delay-400"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "48px",
              rowGap: "32px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "32px 0",
              width: "100%",
              maxWidth: 1000,
            }}
          >
            <div
              className="text-center group cursor-default"
              style={{ flex: 1, minWidth: 140 }}
            >
              <div
                className="f-mono transition-colors duration-300"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Total Treasury Holdings
              </div>
              <div
                className="font-syne transition-transform duration-500 group-hover:scale-110"
                style={{
                  fontSize: 40,
                  fontWeight: 300,
                  color: "var(--pit-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                ${(treasuryStats.totalTreasury / 1000000).toFixed(2)}M
              </div>
            </div>
            <div
              className="hidden sm:block"
              style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
            />
            <div
              className="text-center group cursor-default"
              style={{ flex: 1, minWidth: 140 }}
            >
              <div
                className="f-mono transition-colors duration-300 group-hover:text-[var(--jade)]"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Projects Funded
              </div>
              <div
                className="font-syne transition-transform duration-500 group-hover:scale-110"
                style={{
                  fontSize: 40,
                  fontWeight: 300,
                  color: "var(--jade)",
                  letterSpacing: "-0.02em",
                }}
              >
                {treasuryStats.fundedCreators}
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Assets and Allocation */}
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
              "radial-gradient(45% 55% at 0% 0%, rgba(255,60,0,0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
          <Parallax offset={[40, -40]} className="mb-8 lg:mb-16">
            <div
              style={{
                border: "1px solid var(--rule)",
                borderRadius: 24,
                background: "var(--white)",
                padding: "28px 24px",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-end">
                <div>
                  <div
                    className="f-mono inline-flex items-center gap-2"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      marginBottom: 20,
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
                    Holdings &amp; allocation
                  </div>

                  <h2
                    className="font-syne"
                    style={{
                      fontSize: "clamp(32px,3.8vw,52px)",
                      lineHeight: 0.98,
                      fontWeight: 300,
                      color: "var(--ink)",
                      marginBottom: 18,
                    }}
                  >
                    Treasury fund
                    <em
                      className="font-instrument"
                      style={{
                        fontStyle: "italic",
                        color: "var(--jade)",
                        marginLeft: 10,
                      }}
                    >
                      position
                    </em>
                  </h2>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--dim)",
                      maxWidth: 680,
                    }}
                  >
                    Live view of on-chain custody across assets and the
                    allocation split between available liquidity, milestone
                    commitments, and released funding.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <div
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: 14,
                      padding: "14px 16px",
                      background: "var(--cream)",
                    }}
                  >
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        marginBottom: 8,
                      }}
                    >
                      Current Treasury Value
                    </div>
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 28,
                        lineHeight: 1,
                        color: "var(--ink)",
                      }}
                    >
                      ${$N(treasuryStats.totalTreasury)}
                    </div>
                  </div>

                  <div
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: 14,
                      padding: "14px 16px",
                      background: "var(--cream)",
                    }}
                  >
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        marginBottom: 8,
                      }}
                    >
                      Total Managed (All-Time)
                    </div>
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 28,
                        lineHeight: 1,
                        color: "var(--jade)",
                      }}
                    >
                      ${$N(totalAllTime)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Asset Holdings */}
            <Parallax offset={[40, -40]}>
              <h3
                className="f-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  marginBottom: 20,
                }}
              >
                Asset Holdings
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {treasuryAssets.map((asset) => (
                  <div
                    key={asset.name}
                    className="t-colors"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      background: "var(--white)",
                      borderRadius: 16,
                      border: "1px solid var(--rule)",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--rule)";
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 16,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        {asset.name}
                      </div>
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 10,
                          color: "var(--dim)",
                          textTransform: "uppercase",
                        }}
                      >
                        {asset.symbol}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 14,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        $
                        {asset.value >= 1000000
                          ? (asset.value / 1000000).toFixed(2) + "M"
                          : (asset.value / 1000).toFixed(0) + "K"}
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 10, color: "var(--dim)" }}
                      >
                        {Math.round(
                          (asset.value / treasuryStats.totalTreasury) * 100,
                        )}
                        % of total
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>

            {/* Fund Allocation */}
            <Parallax offset={[60, -60]}>
              <h3
                className="f-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  marginBottom: 20,
                }}
              >
                Fund Allocation (All-Time)
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {treasuryAllocationData.map((alloc) => (
                  <div
                    key={alloc.category}
                    className="t-colors"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px",
                      background: "var(--white)",
                      borderRadius: 16,
                      border: "1px solid var(--rule)",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--rule)";
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 200, paddingRight: 20 }}>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--ink)",
                          marginBottom: 12,
                        }}
                      >
                        {alloc.category}
                      </div>
                      <div
                        style={{
                          height: 5,
                          width: "100%",
                          background: "var(--muted)",
                          overflow: "hidden",
                          borderRadius: 999,
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${alloc.percent}%`,
                            background: "var(--jade)",
                            borderRadius: 999,
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 14,
                          color: "var(--ink)",
                          marginBottom: 4,
                        }}
                      >
                        $
                        {alloc.amount >= 1000000
                          ? (alloc.amount / 1000000).toFixed(2) + "M"
                          : (alloc.amount / 1000).toFixed(0) + "K"}
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 10, color: "var(--dim)" }}
                      >
                        {alloc.percent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
}
