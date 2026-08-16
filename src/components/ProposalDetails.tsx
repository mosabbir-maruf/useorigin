import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  proposals,
  getCreator,
  calculateFunding,
  calculateVotes,
  avatarUrl,
  currentUserGovernance,
} from "@/data/mockData";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  MessageCircle,
  Send,
} from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

type Vote = "Yes" | "No" | "Abstain" | null;

const $N = (n: number) => n.toLocaleString();

const sColor = (s: string) =>
  s === "Active" ||
  s === "Active Voting" ||
  s === "Voting" ||
  s === "In Progress" ||
  s === "Under Review"
    ? "#D4891A"
    : s === "Passed" ||
        s === "Executed" ||
        s === "Approved" ||
        s === "Released" ||
        s === "Funded" ||
        s === "Completed"
      ? "var(--jade)"
      : s === "Upcoming" || s === "Draft" || s === "Pending Review"
        ? "#0ea5e9"
        : "#c0392b";

const milestoneIcon = (s: string) => {
  if (s === "Completed" || s === "Released") return CheckCircle2;
  if (s === "In Progress" || s === "Under Review") return Clock;
  return AlertCircle;
};

export default function ProposalDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const p = useMemo(
    () => proposals.find((x) => x.id === id) || proposals[0],
    [id],
  );
  const creator = getCreator(p.creatorId);
  const funding = calculateFunding(p);
  const votes = calculateVotes(p);

  const [vote, setVote] = useState<Vote>(null);
  const [step, setStep] = useState<"view" | "confirm" | "result">("view");

  const handleVote = () => {
    setStep("result");
  };

  const isActiveVoting = ["Active Voting"].includes(p.status);
  const isApproved = ["Approved", "Funded", "Completed"].includes(p.status);
  const isRejected = ["Rejected"].includes(p.status);

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <SEO title={p.title} description={p.title} path={`/proposal/${id}`} />

      {/* ── Hero Header ── */}
      <section
        style={{
          background: "var(--pit)",
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
              "radial-gradient(50% 70% at 80% 0%, rgba(255,60,0,0.14), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative"
          style={{ paddingTop: 44, paddingBottom: 56 }}
        >
          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="f-mono inline-flex items-center gap-2 t-colors group mb-8 md:mb-10"
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--pit-dim)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--jade)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--pit-dim)")
            }
          >
            <ArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to proposals
          </button>

          {/* Status + Category row */}
          <Parallax
            offset={[40, -40]}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span
              className="f-mono inline-flex items-center gap-2"
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 999,
                border: `1px solid ${sColor(p.status)}`,
                color: sColor(p.status),
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: sColor(p.status),
                }}
              />
              {p.status}
            </span>
            <span
              className="f-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--pit-dim)",
              }}
            >
              {p.category}
            </span>
            <span
              className="f-mono"
              style={{ fontSize: 10, color: "var(--pit-dim)", opacity: 0.5 }}
            >
              · {p.id}
            </span>
          </Parallax>

          {/* Title + Description + Funding card */}
          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 md:gap-12 lg:gap-16 items-start"
          >
            <div>
              <h1
                className="font-syne"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 1.05,
                  fontWeight: 300,
                  color: "var(--pit-text)",
                  marginBottom: 20,
                }}
              >
                {p.title}
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--pit-dim)",
                  maxWidth: 600,
                }}
              >
                {p.shortDescription}
              </p>

              {/* Creator mini-badge */}
              <div className="flex items-center gap-3 mt-8">
                <img
                  src={avatarUrl(creator.id)}
                  alt={creator.name}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid var(--pit-rule)",
                    background: "var(--muted)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--pit-text)",
                    }}
                  >
                    {creator.name}
                  </div>
                  <div
                    className="f-mono"
                    style={{ fontSize: 10, color: "var(--pit-dim)" }}
                  >
                    {creator.address}
                  </div>
                </div>
              </div>
            </div>

            {funding.requested > 0 && (
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--pit-rule)",
                  borderRadius: 20,
                  padding: "28px 24px",
                }}
              >
                <div
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--pit-dim)",
                    marginBottom: 12,
                  }}
                >
                  Funding Request
                </div>
                <div
                  className="f-mono"
                  style={{
                    fontSize: 36,
                    fontWeight: 300,
                    color: "var(--pit-text)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  ${$N(funding.requested)}
                </div>
                <div
                  className="f-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--pit-dim)",
                    marginBottom: 20,
                  }}
                >
                  USDC
                </div>
                <div
                  style={{
                    height: 5,
                    width: "100%",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 999,
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${Math.min(100, funding.progress)}%`,
                      background: "var(--jade)",
                      borderRadius: 999,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
                <div
                  className="f-mono flex justify-between"
                  style={{ fontSize: 10, color: "var(--pit-dim)" }}
                >
                  <span>Released: ${$N(funding.released)}</span>
                  <span>{Math.round(funding.progress)}%</span>
                </div>
                {isActiveVoting && (
                  <div
                    className="f-mono flex items-center gap-2"
                    style={{
                      marginTop: 20,
                      paddingTop: 20,
                      borderTop: "1px solid var(--pit-rule)",
                      fontSize: 10,
                      color: "var(--pit-dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    <Clock size={12} />
                    Voting deadline: {p.deadline}
                  </div>
                )}
              </div>
            )}
          </Parallax>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
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
        <div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative"
          style={{ paddingTop: 64, paddingBottom: 96 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN */}
            <Parallax
              offset={[80, -80]}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(40px,6vw,64px)",
              }}
            >
              {/* Project Overview */}
              {p.overview ? (
                <div>
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
                    Project Overview
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* The Problem */}
                    <div
                      className="t-colors"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 20,
                        padding: "28px 24px",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--rule)")
                      }
                    >
                      <h3
                        className="font-syne"
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginBottom: 12,
                        }}
                      >
                        The Problem
                      </h3>
                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.75,
                          color: "var(--dim)",
                          margin: 0,
                        }}
                      >
                        {p.overview.problem}
                      </p>
                    </div>

                    {/* The Solution */}
                    <div
                      className="t-colors"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 20,
                        padding: "28px 24px",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--rule)")
                      }
                    >
                      <h3
                        className="font-syne"
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginBottom: 12,
                        }}
                      >
                        The Solution
                      </h3>
                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.75,
                          color: "var(--dim)",
                          margin: 0,
                        }}
                      >
                        {p.overview.solution}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div
                      className="t-colors"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 20,
                        padding: "28px 24px",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--rule)")
                      }
                    >
                      <h3
                        className="font-syne"
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginBottom: 12,
                        }}
                      >
                        Target Audience
                      </h3>
                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.75,
                          color: "var(--dim)",
                          margin: 0,
                        }}
                      >
                        {p.overview.audience}
                      </p>
                    </div>

                    {/* Expected Impact */}
                    <div
                      className="t-colors"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 20,
                        padding: "28px 24px",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--rule)")
                      }
                    >
                      <h3
                        className="font-syne"
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginBottom: 12,
                        }}
                      >
                        Expected Impact
                      </h3>
                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.75,
                          color: "var(--dim)",
                          margin: 0,
                        }}
                      >
                        {p.overview.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
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
                    Project Details
                  </div>
                  <div
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--rule)",
                      borderRadius: 20,
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    {p.description.map((text: string, i: number) => (
                      <p
                        key={i}
                        style={{
                          fontSize: 14,
                          lineHeight: 1.75,
                          color: "var(--ink)",
                          margin: 0,
                        }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Funding Breakdown */}
              {p.funding.breakdown.length > 0 && (
                <div>
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
                    Funding Allocation
                  </div>

                  <div
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--rule)",
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
                    {p.funding.breakdown.map((b: any, i: number) => {
                      const pct = funding.requested
                        ? (b.amount / funding.requested) * 100
                        : 0;
                      return (
                        <div
                          key={b.label}
                          className="t-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4"
                          style={{
                            padding: "18px 24px",
                            borderTop: i > 0 ? "1px solid var(--rule)" : "none",
                          }}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className="f-mono shrink-0"
                              style={{
                                fontSize: 10,
                                color: "var(--dim)",
                                width: 20,
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              style={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--ink)",
                              }}
                            >
                              {b.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 shrink-0">
                            <div
                              style={{
                                width: 60,
                                height: 4,
                                borderRadius: 999,
                                background: "var(--muted)",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  width: `${pct}%`,
                                  height: "100%",
                                  background: "var(--jade)",
                                  borderRadius: 999,
                                }}
                              />
                            </div>
                            <span
                              className="f-mono"
                              style={{ fontSize: 14, color: "var(--ink)" }}
                            >
                              ${$N(b.amount)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Milestones */}
              {p.milestones.length > 0 && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 flex-wrap mb-6">
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
                        Milestones
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          lineHeight: 1.7,
                          color: "var(--dim)",
                          maxWidth: 420,
                          margin: 0,
                        }}
                      >
                        Funding is released progressively upon steward
                        verification of completed milestones.
                      </p>
                    </div>
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        color: "var(--dim)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {
                        p.milestones.filter(
                          (m) =>
                            m.status === "Completed" || m.status === "Released",
                        ).length
                      }{" "}
                      / {p.milestones.length} complete
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {p.milestones.map((m: any, i: number) => {
                      const Icon = milestoneIcon(m.status);
                      const isDone =
                        m.status === "Completed" || m.status === "Released";
                      return (
                        <div
                          key={m.title}
                          className="t-colors"
                          style={{
                            background: "var(--white)",
                            border: "1px solid var(--rule)",
                            borderRadius: 20,
                            padding: "24px 24px",
                            transition: "border-color 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor =
                              "rgba(255,60,0,0.35)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = "var(--rule)")
                          }
                        >
                          <div className="flex items-start gap-4">
                            {/* Step indicator */}
                            <div
                              className="f-mono shrink-0 flex items-center justify-center"
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: isDone
                                  ? "var(--jade)"
                                  : "var(--muted)",
                                border: isDone
                                  ? "none"
                                  : "1px solid var(--rule)",
                                color: isDone ? "var(--jade-fg)" : "var(--ink)",
                                fontSize: 12,
                              }}
                            >
                              {isDone ? (
                                <CheckCircle2 size={16} />
                              ) : (
                                String(i + 1).padStart(2, "0")
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3 mb-2">
                                <h4
                                  className="font-syne"
                                  style={{
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: "var(--ink)",
                                    margin: 0,
                                  }}
                                >
                                  {m.title}
                                </h4>
                                <div className="flex items-center gap-3 shrink-0">
                                  <span
                                    className="f-mono inline-flex items-center gap-1.5"
                                    style={{
                                      fontSize: 9,
                                      letterSpacing: "0.1em",
                                      textTransform: "uppercase",
                                      padding: "4px 10px",
                                      borderRadius: 999,
                                      border: `1px solid ${sColor(m.status)}`,
                                      color: sColor(m.status),
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: "50%",
                                        background: sColor(m.status),
                                      }}
                                    />
                                    {m.status}
                                  </span>
                                  <span
                                    className="f-mono"
                                    style={{
                                      fontSize: 14,
                                      color: "var(--ink)",
                                    }}
                                  >
                                    ${$N(m.amount)}
                                  </span>
                                </div>
                              </div>
                              <p
                                style={{
                                  fontSize: 13,
                                  lineHeight: 1.7,
                                  color: "var(--dim)",
                                  margin: 0,
                                  marginBottom: 6,
                                }}
                              >
                                {m.description}
                              </p>
                              <span
                                className="f-mono"
                                style={{
                                  fontSize: 10,
                                  color: "var(--dim)",
                                  textTransform: "uppercase",
                                }}
                              >
                                Expected: {m.expected}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Community Discussion */}
              {p.discussion.length > 0 && (
                <div>
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
                    Discussion · {p.discussion.length} comments
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {p.discussion.map((d: any, i: number) => (
                      <div
                        key={i}
                        className="t-colors"
                        style={{
                          background: "var(--white)",
                          border: "1px solid var(--rule)",
                          borderRadius: 20,
                          padding: "24px",
                          transition: "border-color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255,60,0,0.15)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "var(--rule)")
                        }
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="f-mono shrink-0 flex items-center justify-center"
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: "50%",
                              background: d.isCreator
                                ? "var(--jade)"
                                : "var(--muted)",
                              border: d.isCreator
                                ? "none"
                                : "1px solid var(--rule)",
                              color: d.isCreator
                                ? "var(--jade-fg)"
                                : "var(--ink)",
                              fontSize: 9,
                            }}
                          >
                            {d.author.slice(0, 2).toUpperCase()}
                          </div>
                          <span
                            className="f-mono"
                            style={{
                              fontSize: 12,
                              fontWeight: d.isCreator ? 600 : 400,
                              color: d.isCreator ? "var(--jade)" : "var(--ink)",
                            }}
                          >
                            {d.author}
                          </span>
                          {d.isCreator && (
                            <span
                              className="f-mono"
                              style={{
                                fontSize: 8,
                                letterSpacing: "0.08em",
                                padding: "3px 8px",
                                background: "var(--jade)",
                                color: "var(--jade-fg)",
                                borderRadius: 999,
                                textTransform: "uppercase",
                              }}
                            >
                              Creator
                            </span>
                          )}
                          <span
                            className="f-mono"
                            style={{
                              fontSize: 10,
                              color: "var(--dim)",
                              marginLeft: "auto",
                            }}
                          >
                            {d.time}
                          </span>
                        </div>
                        <p
                          className="md:pl-10"
                          style={{
                            fontSize: 13.5,
                            lineHeight: 1.7,
                            color: "var(--ink)",
                            margin: 0,
                          }}
                        >
                          {d.text}
                        </p>
                      </div>
                    ))}

                    {/* Comment box */}
                    <div
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 20,
                        padding: "24px",
                      }}
                    >
                      <label htmlFor="proposal-comment" className="sr-only">
                        Ask a question or leave a comment
                      </label>
                      <textarea
                        id="proposal-comment"
                        name="comment"
                        aria-label="Ask a question or leave a comment"
                        placeholder="Ask a question or leave a comment..."
                        className="f-mono"
                        style={{
                          width: "100%",
                          minHeight: 80,
                          border: "none",
                          outline: "none",
                          fontSize: 13,
                          fontFamily: "inherit",
                          resize: "none",
                          background: "transparent",
                          color: "var(--ink)",
                        }}
                      />
                      <div className="flex justify-end mt-3">
                        <button
                          className="f-mono inline-flex items-center gap-2 t-colors"
                          style={{
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "10px 22px",
                            borderRadius: 999,
                            background: "var(--jade)",
                            color: "var(--jade-fg)",
                            border: "none",
                            cursor: "pointer",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 24px -8px rgba(255,60,0,0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <Send size={12} />
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Parallax>

            {/* RIGHT COLUMN */}
            <Parallax
              offset={[100, -100]}
              className="flex flex-col gap-6 lg:sticky lg:top-[84px]"
            >
              {/* Governance / Voting Card */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  borderRadius: 24,
                  padding: "32px 24px",
                  overflow: "hidden",
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="f-mono inline-flex items-center gap-2"
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
                    Governance
                  </div>
                </div>

                {/* Vote bars */}
                <div className="mb-6">
                  <div
                    className="f-mono flex justify-between mb-2"
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    <span>Yes ({votes.forPct.toFixed(1)}%)</span>
                    <span>No ({votes.againstPct.toFixed(1)}%)</span>
                  </div>
                  <div
                    className="flex overflow-hidden"
                    style={{
                      height: 6,
                      borderRadius: 999,
                      background: "var(--muted)",
                    }}
                  >
                    <div
                      style={{
                        width: `${votes.forPct}%`,
                        background: "var(--jade)",
                        transition: "width 1s ease",
                      }}
                    />
                    <div
                      style={{
                        width: `${votes.againstPct}%`,
                        background: "#c0392b",
                        transition: "width 1s ease",
                      }}
                    />
                    <div
                      style={{
                        width: `${votes.abstainPct}%`,
                        background: "var(--dim)",
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Quorum + threshold */}
                <div
                  className="f-mono flex flex-col sm:flex-row sm:justify-between gap-2 mb-6"
                  style={{ fontSize: 10, color: "var(--dim)" }}
                >
                  <span>
                    Quorum:{" "}
                    {((votes.total / p.votes.quorumRequired) * 100).toFixed(1)}%
                  </span>
                  <span>Threshold: {p.votes.threshold}%</span>
                </div>

                {/* Vote buttons */}
                {isActiveVoting && step === "view" && (
                  <>
                    <div
                      className="f-mono text-center mb-5"
                      style={{
                        fontSize: 10,
                        color: "var(--dim)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Your Voting Power: {$N(currentUserGovernance.votingPower)}
                    </div>
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => {
                          setVote("Yes");
                          setStep("confirm");
                        }}
                        className="f-mono t-colors"
                        style={{
                          width: "100%",
                          padding: "14px",
                          borderRadius: 14,
                          background: "var(--jade)",
                          color: "var(--jade-fg)",
                          border: "none",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontSize: 11,
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px -8px rgba(255,60,0,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        Vote Yes
                      </button>
                      <button
                        onClick={() => {
                          setVote("No");
                          setStep("confirm");
                        }}
                        className="f-mono t-colors"
                        style={{
                          width: "100%",
                          padding: "14px",
                          borderRadius: 14,
                          background: "transparent",
                          color: "#c0392b",
                          border: "1px solid rgba(192,57,43,0.4)",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontSize: 11,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = "#c0392b")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(192,57,43,0.4)")
                        }
                      >
                        Vote No
                      </button>
                      <button
                        onClick={() => {
                          setVote("Abstain");
                          setStep("confirm");
                        }}
                        className="f-mono t-colors"
                        style={{
                          width: "100%",
                          padding: "14px",
                          borderRadius: 14,
                          background: "transparent",
                          color: "var(--dim)",
                          border: "1px solid var(--rule)",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontSize: 11,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(245,243,238,0.3)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "var(--rule)")
                        }
                      >
                        Abstain
                      </button>
                    </div>
                  </>
                )}

                {isActiveVoting && step === "confirm" && (
                  <div className="text-center" style={{ padding: "20px 0" }}>
                    <div
                      className="font-syne"
                      style={{ fontSize: 16, marginBottom: 6 }}
                    >
                      You are voting <strong>{vote}</strong>
                    </div>
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        color: "var(--dim)",
                        marginBottom: 24,
                        textTransform: "uppercase",
                      }}
                    >
                      Power used: {$N(currentUserGovernance.votingPower)}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setStep("view")}
                        className="f-mono t-colors"
                        style={{
                          flex: 1,
                          padding: "12px",
                          borderRadius: 12,
                          background: "transparent",
                          color: "var(--ink)",
                          border: "1px solid var(--rule)",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          fontSize: 10,
                          letterSpacing: "0.08em",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleVote}
                        className="f-mono t-colors"
                        style={{
                          flex: 1,
                          padding: "12px",
                          borderRadius: 12,
                          background: "var(--jade)",
                          color: "var(--jade-fg)",
                          border: "none",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          fontSize: 10,
                          letterSpacing: "0.08em",
                        }}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}

                {isActiveVoting && step === "result" && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 0",
                      borderRadius: 16,
                      border: "1px solid var(--jade)",
                      background: "rgba(255,60,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "var(--jade)",
                        color: "var(--jade-fg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 14px",
                      }}
                    >
                      <CheckCircle2 size={20} />
                    </div>
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 18,
                        color: "var(--jade)",
                        marginBottom: 6,
                      }}
                    >
                      Vote Cast Successfully
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--jade)" }}
                    >
                      TX: 0x8a9...f422
                    </div>
                  </div>
                )}

                {isApproved && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 0",
                      borderRadius: 16,
                      border: "1px solid var(--jade)",
                      background: "rgba(255,60,0,0.06)",
                    }}
                  >
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 18,
                        color: "var(--jade)",
                        marginBottom: 6,
                      }}
                    >
                      Proposal {p.status}
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--jade)" }}
                    >
                      Threshold Met & Executed
                    </div>
                  </div>
                )}

                {isRejected && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 0",
                      borderRadius: 16,
                      border: "1px solid #c0392b",
                      background: "rgba(192,57,43,0.05)",
                    }}
                  >
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 18,
                        color: "#c0392b",
                        marginBottom: 6,
                      }}
                    >
                      Proposal Rejected
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 10, color: "#c0392b" }}
                    >
                      Failed to meet threshold
                    </div>
                  </div>
                )}
              </div>

              {/* Creator Profile Card */}
              <div
                className="t-colors"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  borderRadius: 24,
                  padding: "28px 24px",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,60,0,0.25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--rule)")
                }
              >
                <div
                  className="f-mono mb-6"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                  }}
                >
                  Creator Profile
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={avatarUrl(creator.id)}
                    alt={creator.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "1px solid var(--rule)",
                      background: "var(--muted)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: 3,
                      }}
                    >
                      {creator.name}
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--jade)" }}
                    >
                      Reputation: {creator.reputation}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div
                    style={{
                      background: "var(--muted)",
                      borderRadius: 14,
                      padding: "16px",
                    }}
                  >
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        color: "var(--dim)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Funded
                    </div>
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 20,
                        fontWeight: 300,
                        color: "var(--ink)",
                      }}
                    >
                      {creator.proposalsFunded}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "var(--muted)",
                      borderRadius: 14,
                      padding: "16px",
                    }}
                  >
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 9,
                        color: "var(--dim)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Completion
                    </div>
                    <div
                      className="f-mono"
                      style={{
                        fontSize: 20,
                        fontWeight: 300,
                        color: "var(--ink)",
                      }}
                    >
                      {creator.completionRate}%
                    </div>
                  </div>
                </div>
                <button
                  className="f-mono t-colors w-full flex items-center justify-center gap-2"
                  style={{
                    padding: "12px",
                    borderRadius: 14,
                    background: "var(--muted)",
                    border: "1px solid var(--rule)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    cursor: "pointer",
                    color: "var(--ink)",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--jade)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule)")
                  }
                >
                  View Full Profile <ArrowUpRight size={12} />
                </button>
              </div>

              {/* Treasury Impact Card */}
              {p.treasuryImpact && (
                <div
                  className="t-colors"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--rule)",
                    borderRadius: 24,
                    padding: "28px 24px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,60,0,0.25)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule)")
                  }
                >
                  <div
                    className="f-mono mb-6"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    Treasury Impact
                  </div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="flex justify-between">
                      <span style={{ fontSize: 13, color: "var(--dim)" }}>
                        Requested
                      </span>
                      <span
                        className="f-mono"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        ${$N(funding.requested)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontSize: 13, color: "var(--dim)" }}>
                        Release Model
                      </span>
                      <span
                        className="f-mono"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        {p.treasuryImpact.releaseModel}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: "var(--dim)",
                      margin: 0,
                      paddingTop: 16,
                      borderTop: "1px solid var(--rule)",
                    }}
                  >
                    If approved, funds are locked in an escrow contract. Funds
                    are released proportionally as the creator submits proof of
                    completed milestones.
                  </p>
                </div>
              )}

              {/* Supporting Links Card */}
              {p.links.length > 0 && (
                <div
                  className="t-colors"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--rule)",
                    borderRadius: 24,
                    padding: "28px 24px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,60,0,0.25)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule)")
                  }
                >
                  <div
                    className="f-mono mb-5"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    Supporting Links
                  </div>
                  <div className="flex flex-col gap-3">
                    {p.links.map((link: any) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="f-mono flex items-center gap-2 t-colors group"
                        style={{
                          fontSize: 12,
                          color: "var(--ink)",
                          textDecoration: "none",
                          padding: "12px 16px",
                          borderRadius: 12,
                          background: "var(--muted)",
                          border: "1px solid transparent",
                          transition: "border-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--jade)";
                          e.currentTarget.style.color = "var(--jade)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "transparent";
                          e.currentTarget.style.color = "var(--ink)";
                        }}
                      >
                        <ExternalLink size={13} />
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </Parallax>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
