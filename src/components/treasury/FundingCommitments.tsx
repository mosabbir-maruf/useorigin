import {
  proposals,
  getCreator,
  calculateFunding,
  getActiveMilestones,
} from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $N } from "@/lib/format";
import { useMemo } from "react";

export default function FundingCommitments() {
  const fundingCommitmentsData = useMemo(
    () =>
      proposals
        .filter((p) => ["Approved", "Funded", "Completed"].includes(p.status))
        .map((p) => {
          const creator = getCreator(p.creatorId);
          const funding = calculateFunding(p);

          const activeMilestones = p.milestones.filter(
            (m) => !["Released", "Completed"].includes(m.status),
          );
          const currentMilestone =
            activeMilestones.length > 0
              ? activeMilestones[0].title
              : "All Completed";

          return {
            id: p.id,
            project: p.title,
            status: p.status,
            creator: creator.name,
            approved: funding.requested,
            released: funding.released,
            remaining: funding.remaining,
            milestone: currentMilestone,
          };
        }),
    [],
  );

  const milestoneList = useMemo(
    () =>
      getActiveMilestones().map(({ proposal, milestone }) => ({
        id: milestone.id,
        project: proposal.title,
        title: milestone.title,
        amount: milestone.amount,
        status: milestone.status,
        expected: milestone.expected,
      })),
    [],
  );

  const totalLocked = milestoneList.reduce((sum, m) => sum + m.amount, 0);
  const pendingReview = milestoneList
    .filter((m) => m.status === "Under Review")
    .reduce((sum, m) => sum + m.amount, 0);

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
            "radial-gradient(45% 55% at 100% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        {/* Active Funding Commitments */}
        <div style={{ marginBottom: 80 }}>
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
              Commitments
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(32px,3.5vw,52px)",
                lineHeight: 0.95,
                fontWeight: 300,
                color: "var(--ink)",
              }}
            >
              Active{" "}
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                Funding
              </em>
            </h2>
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
              className="hidden xl:grid"
              style={{
                gridTemplateColumns: "1fr 150px 120px 120px 120px 200px",
                gap: "16px",
                padding: "16px 24px",
                background: "var(--muted)",
                borderBottom: "1px solid var(--rule)",
                alignItems: "center",
              }}
            >
              {[
                "Project",
                "Creator",
                "Approved",
                "Released",
                "Remaining",
                "Milestone",
              ].map((h) => (
                <div
                  key={h}
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    whiteSpace: "nowrap",
                    textAlign:
                      h === "Milestone"
                        ? "center"
                        : h === "Approved" ||
                            h === "Released" ||
                            h === "Remaining"
                          ? "right"
                          : "left",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {fundingCommitmentsData.map((c, i) => (
              <div
                key={c.id}
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
                <div className="xl:hidden" style={{ padding: "16px 14px" }}>
                  <div
                    className="flex items-start justify-between gap-3"
                    style={{ marginBottom: 10 }}
                  >
                    <div>
                      <div
                        className="font-syne"
                        style={{
                          fontSize: 16,
                          fontWeight: 300,
                          lineHeight: 1.2,
                          marginBottom: 4,
                          color: "var(--ink)",
                        }}
                      >
                        {c.project}
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 10, color: "var(--dim)" }}
                      >
                        {c.creator}
                      </div>
                    </div>
                    <span
                      className="f-mono"
                      style={{
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--jade)",
                      }}
                    >
                      {c.status}
                    </span>
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
                      Approved
                    </span>
                    <span>${$N(c.approved)}</span>
                    <span
                      style={{
                        color: "var(--dim)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Released
                    </span>
                    <span style={{ color: "var(--jade)" }}>
                      ${$N(c.released)}
                    </span>
                    <span
                      style={{
                        color: "var(--dim)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Remaining
                    </span>
                    <span style={{ color: "var(--dim)" }}>
                      ${$N(c.remaining)}
                    </span>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid var(--rule)",
                      marginTop: 10,
                      paddingTop: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--dim)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginRight: 8,
                      }}
                    >
                      Milestone
                    </span>
                    <span
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--ink)" }}
                    >
                      {c.milestone}
                    </span>
                  </div>
                </div>

                <div
                  className="hidden xl:grid"
                  style={{
                    gridTemplateColumns: "1fr 150px 120px 120px 120px 200px",
                    padding: "24px 24px",
                    alignItems: "start",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 16,
                        fontWeight: 300,
                        lineHeight: 1.2,
                        marginBottom: 4,
                        color: "var(--ink)",
                      }}
                    >
                      {c.project}
                    </div>
                    <span
                      className="f-mono inline-flex items-center gap-1.5"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--jade)",
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div
                    className="f-mono"
                    style={{ fontSize: 11, color: "var(--dim)" }}
                  >
                    {c.creator}
                  </div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 13,
                      color: "var(--ink)",
                      textAlign: "right",
                    }}
                  >
                    ${$N(c.approved)}
                  </div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 13,
                      color: "var(--jade)",
                      textAlign: "right",
                    }}
                  >
                    ${$N(c.released)}
                  </div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 13,
                      color: "var(--dim)",
                      textAlign: "right",
                    }}
                  >
                    ${$N(c.remaining)}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span
                      className="f-mono"
                      style={{
                        display: "inline-block",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        padding: "4px 10px",
                        borderRadius: 999,
                        border: "1px solid var(--rule)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {c.milestone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Parallax>
        </div>

        {/* Milestone Funding */}
        <div>
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
              Milestones
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(32px,3.5vw,52px)",
                lineHeight: 0.95,
                fontWeight: 300,
                color: "var(--ink)",
              }}
            >
              Milestone{" "}
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                Releases
              </em>
            </h2>
          </Parallax>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-start">
            {/* Stats Column */}
            <Parallax
              offset={[60, -60]}
              className="t-colors"
              style={{
                border: "1px solid var(--rule)",
                background: "var(--white)",
                padding: "32px 24px",
                borderRadius: 24,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,60,0,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--rule)")
              }
            >
              <h3
                className="f-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  marginBottom: 24,
                }}
              >
                Milestone Stats
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {[
                  { l: "Locked in Milestones", v: `$${$N(totalLocked)}` },
                  { l: "Pending Verification", v: `$${$N(pendingReview)}` },
                  {
                    l: "Active Milestones",
                    v: milestoneList.length.toString(),
                  },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    style={{
                      borderTop: i > 0 ? "1px solid var(--rule)" : "none",
                      paddingTop: i > 0 ? 16 : 0,
                    }}
                  >
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        marginBottom: 8,
                      }}
                    >
                      {s.l}
                    </div>
                    <div
                      className="font-syne"
                      style={{ fontSize: 24, color: "var(--ink)" }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>

            {/* Milestone List Column */}
            <Parallax
              offset={[80, -80]}
              style={{
                border: "1px solid var(--rule)",
                background: "var(--white)",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div
                className="hidden md:grid"
                style={{
                  gridTemplateColumns: "1.5fr 1fr 100px 100px",
                  gap: "16px",
                  padding: "16px 24px",
                  background: "var(--muted)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                {["Project", "Milestone", "Amount", "Status"].map((h) => (
                  <div
                    key={h}
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      whiteSpace: "nowrap",
                      textAlign: h === "Status" ? "center" : "left",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {milestoneList.map((m, i) => (
                <div
                  key={`${m.project}-${m.id}`}
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
                  <div className="md:hidden" style={{ padding: "16px 14px" }}>
                    <div
                      className="flex items-start justify-between gap-3"
                      style={{ marginBottom: 8 }}
                    >
                      <div>
                        <div
                          className="font-syne"
                          style={{
                            fontSize: 16,
                            marginBottom: 4,
                            color: "var(--ink)",
                          }}
                        >
                          {m.project}
                        </div>
                        <div
                          className="f-mono"
                          style={{
                            fontSize: 9,
                            color: "var(--dim)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          }}
                        >
                          Expected: {m.expected}
                        </div>
                      </div>
                      <span
                        className="f-mono inline-flex items-center gap-1.5"
                        style={{
                          fontSize: 8,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "4px 8px",
                          borderRadius: 999,
                          border: "1px solid",
                          borderColor:
                            m.status === "Under Review"
                              ? "#D4891A"
                              : "var(--rule)",
                          color:
                            m.status === "Under Review"
                              ? "#D4891A"
                              : "var(--dim)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {m.status === "Under Review" && (
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "#D4891A",
                              flexShrink: 0,
                            }}
                          />
                        )}
                        {m.status}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--ink)",
                        marginBottom: 10,
                      }}
                    >
                      {m.title}
                    </div>

                    <div
                      className="f-mono"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 11,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--dim)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        Amount
                      </span>
                      <span style={{ color: "var(--ink)" }}>
                        ${$N(m.amount)}
                      </span>
                    </div>
                  </div>

                  <div
                    className="hidden md:grid"
                    style={{
                      gridTemplateColumns: "1.5fr 1fr 100px 100px",
                      padding: "24px 24px",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <div
                        className="font-syne"
                        style={{
                          fontSize: 16,
                          marginBottom: 4,
                          color: "var(--ink)",
                        }}
                      >
                        {m.project}
                      </div>
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 9,
                          color: "var(--dim)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Expected: {m.expected}
                      </div>
                    </div>
                    <div style={{ fontSize: 14, color: "var(--ink)" }}>
                      {m.title}
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 13, color: "var(--ink)" }}
                    >
                      ${$N(m.amount)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span
                        className="f-mono inline-flex items-center gap-1.5"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "5px 12px",
                          borderRadius: 999,
                          border: "1px solid",
                          borderColor:
                            m.status === "Under Review"
                              ? "#D4891A"
                              : "var(--rule)",
                          color:
                            m.status === "Under Review"
                              ? "#D4891A"
                              : "var(--dim)",
                        }}
                      >
                        {m.status === "Under Review" && (
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "#D4891A",
                              flexShrink: 0,
                            }}
                          />
                        )}
                        {m.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
