import { userVotingHistory } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";

const $N = (n: number) => n.toLocaleString();

const sColor = (s: string) =>
  s === "Yes" || s === "Passed" || s === "Executed"
    ? "var(--jade)"
    : s === "No" || s === "Defeated"
      ? "#dc2626"
      : "var(--dim)";

export default function VotingHistory() {
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
            "radial-gradient(45% 55% at 100% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <Parallax offset={[40, -40]} style={{ marginBottom: 32 }}>
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
            History
          </div>
          <h2
            className="font-syne"
            style={{
              fontSize: "clamp(32px,3.5vw,52px)",
              lineHeight: 0.95,
              fontWeight: 300,
              color: "var(--ink)",
              marginBottom: 16,
            }}
          >
            My Voting{" "}
            <em
              className="font-instrument"
              style={{ fontStyle: "italic", color: "var(--jade)" }}
            >
              History
            </em>
          </h2>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.76,
              color: "var(--dim)",
              marginBottom: 0,
              maxWidth: 400,
            }}
          >
            Review your past voting decisions and participation across all
            governance proposals.
          </p>
        </Parallax>

        <Parallax
          offset={[60, -60]}
          style={{
            border: "1px solid var(--rule)",
            background: "var(--white)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div
            className="hidden lg:grid lg:grid-cols-[1fr_100px_140px_140px_140px] lg:gap-4 items-center"
            style={{
              padding: "16px 24px",
              background: "var(--muted)",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            {["Proposal", "My Vote", "Power Used", "Date", "Outcome"].map(
              (h) => (
                <div
                  key={h}
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                  }}
                >
                  {h}
                </div>
              ),
            )}
          </div>

          {userVotingHistory.map((v, i) => (
            <div
              key={v.id}
              className="t-colors"
              style={{
                borderTop: i > 0 ? "1px solid var(--rule)" : "none",
                background: "var(--white)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,60,0,0.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--white)")
              }
            >
              <div className="lg:hidden" style={{ padding: "16px 14px" }}>
                <div
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    marginBottom: 4,
                  }}
                >
                  {v.proposalId}
                </div>
                <div
                  className="font-syne"
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.2,
                    color: "var(--ink)",
                    marginBottom: 10,
                  }}
                >
                  {v.proposalTitle}
                </div>

                <div
                  className="f-mono"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    rowGap: 8,
                    columnGap: 12,
                    fontSize: 11,
                    color: "var(--ink)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--dim)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    My Vote
                  </span>
                  <span
                    style={{
                      color: sColor(v.vote),
                      textTransform: "uppercase",
                    }}
                  >
                    {v.vote}
                  </span>
                  <span
                    style={{
                      color: "var(--dim)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Power Used
                  </span>
                  <span>{$N(v.powerUsed)}</span>
                  <span
                    style={{
                      color: "var(--dim)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Date
                  </span>
                  <span style={{ color: "var(--dim)" }}>{v.date}</span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--rule)",
                    marginTop: 10,
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 22,
                  }}
                >
                  <span
                    style={{
                      color: "var(--dim)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Outcome
                  </span>
                  <span
                    className="f-mono inline-flex items-center gap-1.5"
                    style={{
                      fontSize: 8,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: sColor(v.outcome),
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: sColor(v.outcome),
                        flexShrink: 0,
                      }}
                    />
                    {v.outcome}
                  </span>
                </div>
              </div>

              <div
                className="hidden lg:grid lg:grid-cols-[1fr_100px_140px_140px_140px] items-center lg:gap-4"
                style={{
                  padding: "24px 24px",
                }}
              >
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      marginBottom: 4,
                    }}
                  >
                    {v.proposalId}
                  </div>
                  <div
                    className="font-syne"
                    style={{
                      fontSize: 16,
                      fontWeight: 300,
                      lineHeight: 1.2,
                      color: "var(--ink)",
                    }}
                  >
                    {v.proposalTitle}
                  </div>
                </div>

                <div
                  className="f-mono"
                  style={{
                    fontSize: 12,
                    color: sColor(v.vote),
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {v.vote}
                </div>

                <div
                  className="f-mono"
                  style={{ fontSize: 13, color: "var(--ink)" }}
                >
                  {$N(v.powerUsed)}
                </div>

                <div
                  className="f-mono"
                  style={{ fontSize: 11, color: "var(--dim)" }}
                >
                  {v.date}
                </div>

                <span
                  className="f-mono inline-flex items-center gap-1.5"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: sColor(v.outcome),
                    padding: "5px 12px",
                    borderRadius: 999,
                    border: `1px solid ${sColor(v.outcome)}`,
                    justifySelf: "start",
                    width: "fit-content",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: sColor(v.outcome),
                      flexShrink: 0,
                    }}
                  />
                  {v.outcome}
                </span>
              </div>
            </div>
          ))}
          {userVotingHistory.length === 0 && (
            <div style={{ padding: 60, textAlign: "center" }}>
              <span
                className="f-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                }}
              >
                No voting history available
              </span>
            </div>
          )}
        </Parallax>
      </div>
    </section>
  );
}
