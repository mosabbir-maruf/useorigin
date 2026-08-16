import { Parallax } from "@/components/ui/parallax";

export default function TreasuryTransparency() {
  return (
    <section
      style={{
        background: "var(--cream)",
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
            "radial-gradient(45% 55% at 100% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
          <Parallax offset={[40, -40]}>
            <div
              className="f-mono inline-flex items-center gap-2 mb-6"
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
                marginBottom: 20,
                color: "var(--ink)",
              }}
            >
              Treasury
              <br />
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                Transparency
              </em>
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.76, color: "var(--dim)" }}>
              The Origin operates on the principle of complete financial
              transparency. All treasury operations are publicly verifiable.
            </p>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                t: "Fund Allocation",
                d: "Funds are only allocated to creator projects following a successful on-chain governance vote that meets required quorum and approval thresholds.",
              },
              {
                t: "Milestone Releases",
                d: "Approved funding is not distributed immediately. It is locked in an escrow contract and released proportionally as creators submit proof of completed project milestones.",
              },
              {
                t: "Verification Process",
                d: "Milestones are verified by elected community stewards who ensure the submitted work aligns with the original proposal's promises before releasing the next tranche of funds.",
              },
              {
                t: "Public Auditing",
                d: "Every deposit, allocation, and milestone release is executed via smart contracts. You can independently verify the transaction history on the block explorer using the provided TX IDs.",
              },
            ].map((r, idx) => {
              return (
                <div
                  key={r.t}
                  className={`t-colors ${
                    idx % 2 === 0 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--rule)",
                    borderRadius: 20,
                    padding: "32px 24px",
                    transition:
                      "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 24px 48px -32px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--rule)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "var(--jade)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <div
                      style={{
                        width: 16,
                        height: 2,
                        background: "var(--jade)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                      }}
                    >
                      {r.t}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--ink)",
                    }}
                  >
                    {r.d}
                  </p>
                </div>
              );
            })}
          </Parallax>
        </div>
      </div>
    </section>
  );
}
