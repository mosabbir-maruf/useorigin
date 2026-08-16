import { useState } from "react";
import {
  proposals,
  getCreator,
  calculateFunding,
  calculateVotes,
  governanceStats,
} from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";
import TabChip from "@/components/ui/TabChip";
import { $N, statusColor, statusTone } from "@/lib/format";

interface ProposalsProps {
  open: (id: string) => void;
}

export default function Proposals({ open }: ProposalsProps) {
  const [activeTab, setActiveTab] = useState<
    "Active Voting" | "Pending Review" | "Approved" | "Rejected"
  >("Active Voting");

  const filteredProposals = proposals.filter((p) => {
    if (activeTab === "Approved")
      return ["Approved", "Funded", "Completed"].includes(p.status);
    return p.status === activeTab;
  });

  return (
    <Section gradient="radial-gradient(45% 55% at 50% 0%, rgba(255,60,0,0.08), transparent 70%)">
        <div>
          <Parallax
            offset={[40, -40]}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8"
          >
            <div>
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
                Proposals
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
                Governance{" "}
                <em
                  className="font-instrument"
                  style={{ fontStyle: "italic", color: "var(--jade)" }}
                >
                  Proposals
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
                Review, discuss, and vote on active and past proposals shaping
                the Origin ecosystem.
              </p>
            </div>

            <div
              className="flex items-center gap-2 overflow-x-auto"
              style={{ maxWidth: "100%", scrollbarWidth: "none" }}
            >
              {(
                [
                  "Active Voting",
                  "Pending Review",
                  "Approved",
                  "Rejected",
                ] as const
              ).map((tab) => (
                <TabChip
                  key={tab}
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  activeTone={statusTone(tab)}
                >
                  {tab}
                </TabChip>
              ))}
            </div>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 grid-flow-dense"
          >
            {[
              {
                l: "Total Proposals",
                v: governanceStats.totalProposals,
                cls: "col-span-2",
              },
              {
                l: "Active",
                v: governanceStats.activeProposals,
                cls: "col-span-1",
              },
              {
                l: "Passed",
                v: governanceStats.passedProposals,
                cls: "col-span-1",
              },
              {
                l: "Rejected",
                v: governanceStats.rejectedProposals,
                cls: "col-span-1",
              },
              {
                l: "Total Votes",
                v: $N(governanceStats.totalVotes),
                cls: "col-span-2",
              },
              {
                l: "Success Rate",
                v: `${governanceStats.proposalSuccessRate}%`,
                cls: "col-span-1",
              },
            ].map((s) => (
              <div
                key={s.l}
                className={`t-colors rounded-[16px] p-4 sm:px-4 sm:py-5 ${s.cls}`}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--jade)";
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
                  style={{
                    fontSize: "clamp(20px, 5vw, 24px)",
                    fontWeight: 300,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </Parallax>

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
              className="hidden xl:grid xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_100px] xl:gap-4 items-center"
              style={{
                padding: "16px 24px",
                background: "var(--muted)",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {[
                "Proposal",
                "Creator",
                "Requested",
                "Votes",
                "Quorum",
                "Deadline",
                "Status",
                "Action",
              ].map((h) => (
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
              ))}
            </div>

            {filteredProposals.length === 0 ? (
              <div
                style={{
                  padding: 60,
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
                  No {activeTab} Proposals
                </span>
              </div>
            ) : (
              filteredProposals.map((p, i) => {
                const creator = getCreator(p.creatorId);
                const funding = calculateFunding(p);
                const votes = calculateVotes(p);
                const isUpcoming = p.status === "Pending Review";

                return (
                  <div
                    key={p.id}
                    className="t-colors"
                    style={{
                      padding: "24px 24px",
                      borderTop: i > 0 ? "1px solid var(--rule)" : "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,60,0,0.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--white)")
                    }
                  >
                    <div className="xl:hidden">
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
                        {p.id}
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
                        {p.title}
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
                          marginBottom: 10,
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
                          Creator
                        </span>
                        <span style={{ color: "var(--dim)" }}>
                          {creator.name}
                        </span>
                        <span
                          style={{
                            color: "var(--dim)",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          Requested
                        </span>
                        <span>
                          {funding.requested
                            ? `$${$N(funding.requested)}`
                            : "-"}
                        </span>
                        <span
                          style={{
                            color: "var(--dim)",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          Quorum
                        </span>
                        <span style={{ color: "var(--dim)" }}>
                          {$N(votes.quorumRequired)}
                        </span>
                        <span
                          style={{
                            color: "var(--dim)",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          Deadline
                        </span>
                        <span style={{ color: "var(--dim)" }}>
                          {isUpcoming
                            ? `Submitted ${p.submittedDate}`
                            : `Ends ${p.deadline}`}
                        </span>
                      </div>

                      <div style={{ marginBottom: 10 }}>
                        <div
                          className="f-mono"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--dim)",
                            marginBottom: 6,
                          }}
                        >
                          Votes
                        </div>
                        {isUpcoming ? (
                          <span
                            className="f-mono"
                            style={{ fontSize: 11, color: "var(--dim)" }}
                          >
                            -
                          </span>
                        ) : (
                          <>
                            <div
                              style={{
                                display: "flex",
                                height: 4,
                                background: "var(--muted)",
                                marginBottom: 6,
                                borderRadius: 999,
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  height: "100%",
                                  width: `${votes.forPct}%`,
                                  background: "#16a34a",
                                }}
                              />
                              <div
                                style={{
                                  height: "100%",
                                  width: `${votes.againstPct}%`,
                                  background: "#dc2626",
                                }}
                              />
                            </div>
                            <div
                              className="f-mono"
                              style={{
                                fontSize: 9,
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 12,
                              }}
                            >
                              <span style={{ color: "#16a34a" }}>
                                {$N(votes.for)} Y
                              </span>
                              <span style={{ color: "#dc2626" }}>
                                {$N(votes.against)} N
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      <div
                        style={{
                          borderTop: "1px solid var(--rule)",
                          paddingTop: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          className="f-mono inline-flex items-center gap-1.5"
                          style={{
                            fontSize: 8,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: statusColor(p.status),
                          }}
                        >
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: statusColor(p.status),
                              flexShrink: 0,
                            }}
                          />
                          {p.status}
                        </span>

                        <button
                          onClick={() => open(p.id)}
                          className="f-mono t-colors"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "7px 12px",
                            borderRadius: 999,
                            background: "transparent",
                            border: "1px solid var(--rule)",
                            color: "var(--ink)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = "var(--jade)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = "var(--rule)")
                          }
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="hidden xl:grid xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_100px] items-center xl:gap-4">
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
                          {p.id}
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
                          {p.title}
                        </div>
                      </div>

                      <div
                        className="f-mono"
                        style={{ fontSize: 11, color: "var(--dim)" }}
                      >
                        {creator.name}
                      </div>

                      <div
                        className="f-mono"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        {funding.requested ? `$${$N(funding.requested)}` : "-"}
                      </div>

                      <div className="w-full pr-5">
                        {isUpcoming ? (
                          <span
                            className="f-mono"
                            style={{ fontSize: 12, color: "var(--dim)" }}
                          >
                            -
                          </span>
                        ) : (
                          <>
                            <div
                              style={{
                                display: "flex",
                                height: 4,
                                background: "var(--muted)",
                                marginBottom: 6,
                                borderRadius: 999,
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  height: "100%",
                                  width: `${votes.forPct}%`,
                                  background: "#16a34a",
                                }}
                              />
                              <div
                                style={{
                                  height: "100%",
                                  width: `${votes.againstPct}%`,
                                  background: "#dc2626",
                                }}
                              />
                            </div>
                            <div
                              className="f-mono"
                              style={{
                                fontSize: 9,
                                color: "var(--dim)",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 12,
                              }}
                            >
                              <span style={{ color: "#16a34a" }}>
                                {$N(votes.for)} Y
                              </span>
                              <span style={{ color: "#dc2626" }}>
                                {$N(votes.against)} N
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      <div
                        className="f-mono"
                        style={{ fontSize: 11, color: "var(--dim)" }}
                      >
                        {$N(votes.quorumRequired)}
                      </div>

                      <div
                        className="f-mono"
                        style={{ fontSize: 10, color: "var(--dim)" }}
                      >
                        {isUpcoming
                          ? `Submitted ${p.submittedDate}`
                          : `Ends ${p.deadline}`}
                      </div>

                      <div>
                        <span
                          className="f-mono inline-flex items-center gap-1.5"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: statusColor(p.status),
                            padding: "5px 12px",
                            borderRadius: 999,
                            border: `1px solid ${statusColor(p.status)}`,
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: statusColor(p.status),
                              flexShrink: 0,
                            }}
                          />
                          {p.status}
                        </span>
                      </div>

                      <div className="flex xl:block justify-end">
                        <button
                          onClick={() => open(p.id)}
                          className="f-mono t-colors"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "8px 16px",
                            borderRadius: 999,
                            background: "transparent",
                            border: "1px solid var(--rule)",
                            color: "var(--ink)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = "var(--jade)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = "var(--rule)")
                          }
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </Parallax>
        </div>
    </Section>
  );
}
