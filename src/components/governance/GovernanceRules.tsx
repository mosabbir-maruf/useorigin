import { Parallax } from "@/components/ui/parallax";

export default function GovernanceRules() {
  return (
    <section
      className="py-12 md:py-24"
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
            "radial-gradient(45% 55% at 0% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col items-center max-w-5xl mx-auto gap-16 lg:gap-20">
          <Parallax
            offset={[40, -40]}
            className="flex flex-col items-center text-center w-full"
          >
            <div
              className="f-mono inline-flex items-center gap-2 mb-4 md:mb-6"
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
              Documentation
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(32px,3.5vw,52px)",
                lineHeight: 0.92,
                fontWeight: 300,
                marginBottom: 16,
                color: "var(--ink)",
              }}
            >
              Governance{" "}
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                Rules
              </em>
            </h2>
            <p
              className="text-sm md:text-[15px]"
              style={{ lineHeight: 1.76, color: "var(--dim)", maxWidth: 520 }}
            >
              The foundational rules that govern proposal submission, voting
              mechanics, and treasury disbursement within the Origin ecosystem.
            </p>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {[
              {
                t: "Voting Power",
                d: "1 Token = 1 Vote. Power is calculated based on token balance at proposal creation.",
              },
              {
                t: "Quorum",
                d: "Minimum participation required is 2,000,000 votes across all options.",
              },
              {
                t: "Approval Threshold",
                d: "Proposals pass if 'Yes' votes exceed 60% of total votes cast.",
              },
              {
                t: "Funding Release",
                d: "Approved treasury funds are locked in escrow and released per milestone.",
              },
            ].map((r, i) => (
              <div
                key={r.t}
                className="group t-colors flex flex-col p-8 md:p-10"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  borderRadius: 24,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,60,0,0.3)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px -10px rgba(255, 60, 0, 0.1)";

                  const num = e.currentTarget.querySelector(
                    ".rule-num",
                  ) as HTMLElement;
                  if (num) {
                    num.style.background = "var(--jade)";
                    num.style.color = "var(--jade-fg)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--rule)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";

                  const num = e.currentTarget.querySelector(
                    ".rule-num",
                  ) as HTMLElement;
                  if (num) {
                    num.style.background = "var(--muted)";
                    num.style.color = "var(--dim)";
                  }
                }}
              >
                <div
                  className="rule-num f-mono flex items-center justify-center mb-8 transition-colors duration-300"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--muted)",
                    color: "var(--dim)",
                    fontSize: 14,
                    border: "1px solid var(--rule)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-syne text-xl md:text-2xl mb-4"
                  style={{ color: "var(--ink)", fontWeight: 400 }}
                >
                  {r.t}
                </h3>
                <p
                  className="text-sm md:text-[15px]"
                  style={{ lineHeight: 1.6, color: "var(--dim)" }}
                >
                  {r.d}
                </p>
              </div>
            ))}
          </Parallax>
        </div>
      </div>
    </section>
  );
}
