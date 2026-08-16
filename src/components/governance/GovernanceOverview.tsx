import { governanceStats, currentUserGovernance } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $N } from "@/lib/format";

export default function GovernanceOverview() {
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
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative flex flex-col items-center text-center"
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
            Cast your{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Vote
            </em>{" "}
            <br />
            that shapes Origin
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
            The Origin is governed by its token holders. Propose, discuss, and
            vote on protocol upgrades, taxonomy adjustments, and treasury
            allocations.
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
                Total Voting Power
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
                {$N(governanceStats.totalVotingPower)}
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
                Active Voters
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
                {$N(governanceStats.activeVoters)}
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
                className="f-mono transition-colors duration-300"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Voter Participation
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
                {governanceStats.voterParticipationRate}%
              </div>
            </div>
            <div
              className="hidden md:block"
              style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
            />
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
                Quorum Achieved
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
                {governanceStats.quorumAchievementRate}%
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  );
}
