import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  proposals,
  getCreator,
  calculateFunding,
  calculateVotes,
  avatarUrl,
  governanceStats,
} from "@/data/mockData";

import SEO from "@/components/SEO";
import { ArrowUpRight, Search } from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import TabChip from "@/components/ui/TabChip";
import Footer from "./landing/Footer";
import { $N, listStatusColor, statusTone } from "@/lib/format";

const CATS = [
  "All",
  "Creative Technology",
  "Hardware",
  "Writing",
  "Music",
  "Visual Art",
  "Open Source",
  "Research",
  "Education",
  "Gaming",
];
const STATS = ["All", "Active Voting", "Approved", "Funded", "Completed"];

export default function Explore() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [stat, setStat] = useState("All");
  const [sort, setSort] = useState<"newest" | "funded" | "votes">("newest");
  const [page, setPage] = useState(1);
  const PAGE = 8;

  const list = useMemo(() => {
    let r = [...proposals];
    if (q.trim()) {
      const lq = q.toLowerCase();
      r = r.filter(
        (p) =>
          p.title.toLowerCase().includes(lq) ||
          getCreator(p.creatorId).name.toLowerCase().includes(lq),
      );
    }
    if (cat !== "All") r = r.filter((p) => p.category === cat);
    if (stat !== "All") r = r.filter((p) => p.status === stat);
    if (sort === "funded")
      r.sort(
        (a, b) => calculateFunding(b).released - calculateFunding(a).released,
      );
    else if (sort === "votes")
      r.sort((a, b) => calculateVotes(b).total - calculateVotes(a).total);
    return r;
  }, [q, cat, stat, sort]);

  const visible = list.slice(0, page * PAGE);
  const hasMore = visible.length < list.length;

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <SEO
        title="Explore Proposals"
        description="Browse and vote on active community proposals. Discover projects seeking decentralized funding through the Origin treasury."
        path="/explore"
      />

      {/* ── Hero Header ── */}
      <section
        style={{
          background: "var(--pit)",
          borderBottom: "1px solid var(--rule)",
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
          className="max-w-[1440px] mx-auto px-6 md:px-10 relative pt-[40px] pb-[20px] md:pt-[100px] md:pb-[80px]"
          style={{
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
            Treasury Funding Proposals
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
            Explore the{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Proposals
            </em>{" "}
            <br />
            building Origin
          </h1>

          <p
            className="animate-fadeIn animation-delay-300 mb-8 md:mb-[64px]"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--pit-dim)",
              maxWidth: 560,
            }}
          >
            Browse, debate, and vote on the initiatives seeking funding from the
            Origin treasury. Your voice directs where the money goes.
          </p>

          <div className="animate-fadeIn animation-delay-400 flex justify-center w-full max-w-[800px] py-6 sm:py-8 border-y border-[rgba(255,255,255,0.08)] gap-2 sm:gap-12">
            <div className="text-center group cursor-default flex-1 min-w-0 px-1 sm:px-0">
              <div
                className="f-mono transition-colors duration-300"
                style={{
                  fontSize: "clamp(8px, 2vw, 10px)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Total Proposals
              </div>
              <div
                className="font-syne transition-transform duration-500 group-hover:scale-110"
                style={{
                  fontSize: "clamp(28px, 6vw, 40px)",
                  fontWeight: 300,
                  color: "var(--pit-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                {governanceStats.totalProposals}
              </div>
            </div>
            <div
              className="hidden sm:block"
              style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
            />
            <div className="text-center group cursor-default flex-1 min-w-0 px-1 sm:px-0">
              <div
                className="f-mono transition-colors duration-300 group-hover:text-[var(--jade)]"
                style={{
                  fontSize: "clamp(8px, 2vw, 10px)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Active Voting
              </div>
              <div
                className="font-syne transition-transform duration-500 group-hover:scale-110"
                style={{
                  fontSize: "clamp(28px, 6vw, 40px)",
                  fontWeight: 300,
                  color: "var(--jade)",
                  letterSpacing: "-0.02em",
                }}
              >
                {governanceStats.activeProposals}
              </div>
            </div>
            <div
              className="hidden sm:block"
              style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
            />
            <div className="text-center group cursor-default flex-1 min-w-0 px-1 sm:px-0">
              <div
                className="f-mono transition-colors duration-300"
                style={{
                  fontSize: "clamp(8px, 2vw, 10px)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                  marginBottom: 8,
                }}
              >
                Success Rate
              </div>
              <div
                className="font-syne transition-transform duration-500 group-hover:scale-110"
                style={{
                  fontSize: "clamp(28px, 6vw, 40px)",
                  fontWeight: 300,
                  color: "var(--pit-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                {governanceStats.proposalSuccessRate}%
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* ── Sticky Filter Bar (Desktop only) ── */}
      <div
        className="relative md:sticky z-40"
        style={{
          top: 68,
          background: "rgba(3, 7, 18, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Row 1: Huge Search + Sort */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-1 md:gap-6 w-full border-b border-[var(--rule)] pb-2 md:pb-4">
            <div style={{ position: "relative", flex: 1, width: "100%" }}>
              <Search
                className="w-4 h-4 md:w-6 md:h-6"
                style={{
                  position: "absolute",
                  left: 2,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--dim)",
                }}
              />
              <label htmlFor="explore-search" className="sr-only">
                Search proposals
              </label>
              <input
                id="explore-search"
                name="q"
                aria-label="Search proposals"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search proposals..."
                className="f-mono w-full py-2.5 pl-8 md:py-4 md:pl-12 text-[14px] md:text-[20px]"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--ink)",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 0 0 var(--jade)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Sort Tabs */}
            <div
              className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto pb-2 md:pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {(["newest", "funded", "votes"] as const).map((o) => (
                <TabChip key={o} active={sort === o} onClick={() => setSort(o)}>
                  {o}
                </TabChip>
              ))}
            </div>
          </div>

          {/* Row 2: Categories + Status */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 xl:gap-6 w-full mt-3 xl:mt-6 pb-4 xl:pb-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full xl:flex-1">
              {CATS.map((c) => (
                <TabChip
                  key={c}
                  active={cat === c}
                  onClick={() => {
                    setCat(c);
                    setPage(1);
                  }}
                >
                  {c}
                </TabChip>
              ))}
            </div>

            {/* Status Tabs */}
            <div
              className="flex flex-wrap xl:flex-nowrap items-center gap-2 w-full xl:w-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {STATS.map((s) => (
                <TabChip
                  key={s}
                  active={stat === s}
                  onClick={() => {
                    setStat(s);
                    setPage(1);
                  }}
                  activeTone={statusTone(s)}
                >
                  {s}
                </TabChip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
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
          className="max-w-[1440px] mx-auto px-6 md:px-10 relative"
          style={{ padding: "40px 40px 96px" }}
        >
          {list.length === 0 ? (
            <div style={{ padding: "100px 0", textAlign: "center" }}>
              <div
                className="font-syne"
                style={{
                  fontSize: 36,
                  fontWeight: 300,
                  color: "var(--dim)",
                  opacity: 0.4,
                }}
              >
                No results
              </div>
            </div>
          ) : (
            <>
              {/* Featured card — first result */}
              {visible[0] &&
                (() => {
                  const p = visible[0];
                  const creator = getCreator(p.creatorId);
                  const funding = calculateFunding(p);
                  const votes = calculateVotes(p);
                  return (
                    <Parallax
                      offset={[40, -40]}
                      key={p.id}
                      onClick={() => navigate(`/proposal/${p.id}`)}
                      className="t-colors cursor-pointer"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 24,
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        marginBottom: 16,
                        overflow: "hidden",
                        transition:
                          "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.4)";
                        e.currentTarget.style.boxShadow =
                          "0 24px 48px -24px rgba(255,60,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px]">
                        <div
                          style={{
                            padding: "32px 36px",
                            borderRight: "1px solid var(--rule)",
                          }}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="flex items-center gap-2">
                              <span
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: "50%",
                                  background: listStatusColor(p.status),
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
                                {p.status}
                              </span>
                            </div>
                            <span style={{ color: "var(--rule)" }}>·</span>
                            <span
                              className="f-mono"
                              style={{
                                fontSize: 9,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--dim)",
                              }}
                            >
                              {p.category}
                            </span>
                            {p.tags.slice(0, 2).map((t) => (
                              <span
                                key={t}
                                className="f-mono"
                                style={{
                                  fontSize: 9,
                                  letterSpacing: "0.14em",
                                  textTransform: "uppercase",
                                  padding: "3px 10px",
                                  background: "var(--muted)",
                                  color: "var(--dim)",
                                  borderRadius: 999,
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <h2
                            className="font-syne"
                            style={{
                              fontSize: "clamp(24px,3vw,40px)",
                              lineHeight: 1.05,
                              fontWeight: 300,
                              marginBottom: 14,
                              color: "var(--ink)",
                            }}
                          >
                            {p.title}
                          </h2>
                          <p
                            style={{
                              fontSize: 13,
                              lineHeight: 1.72,
                              color: "var(--dim)",
                              maxWidth: 520,
                              marginBottom: 20,
                            }}
                          >
                            {p.shortDescription}
                          </p>
                          <div className="flex items-center gap-3">
                            <img
                              src={avatarUrl(creator.id)}
                              alt={creator.name}
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                border: "1px solid var(--rule)",
                                background: "var(--muted)",
                              }}
                            />
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: "var(--ink)",
                              }}
                            >
                              {creator.name}
                            </span>
                            <span
                              className="f-mono"
                              style={{ fontSize: 10, color: "var(--dim)" }}
                            >
                              {creator.address}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: "32px 28px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <div
                              className="f-mono"
                              style={{
                                fontSize: 9,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "var(--dim)",
                                marginBottom: 6,
                              }}
                            >
                              Request
                            </div>
                            <div
                              className="f-mono"
                              style={{
                                fontSize: 36,
                                fontWeight: 300,
                                lineHeight: 1,
                                marginBottom: 4,
                                color: "var(--ink)",
                              }}
                            >
                              ${$N(funding.requested)}
                            </div>
                            <div
                              className="f-mono"
                              style={{
                                fontSize: 10,
                                color: "var(--dim)",
                                marginBottom: 20,
                              }}
                            >
                              USDC
                            </div>
                            <div
                              style={{
                                height: 5,
                                background: "var(--muted)",
                                position: "relative",
                                marginBottom: 8,
                                borderRadius: 999,
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  width: `${Math.min(100, funding.progress)}%`,
                                  background: "var(--jade)",
                                  borderRadius: 999,
                                  transition: "width 1s ease",
                                }}
                              />
                            </div>
                            <div
                              className="f-mono flex justify-between"
                              style={{ fontSize: 10, color: "var(--dim)" }}
                            >
                              <span>Released: ${$N(funding.released)}</span>
                              <span>{Math.round(funding.progress)}%</span>
                            </div>
                          </div>
                          <div
                            style={{
                              borderTop: "1px solid var(--rule)",
                              paddingTop: 20,
                              marginTop: 20,
                            }}
                          >
                            <div
                              className="flex overflow-hidden mb-2"
                              style={{
                                height: 4,
                                background: "var(--muted)",
                                borderRadius: 999,
                              }}
                            >
                              <div
                                style={{
                                  height: "100%",
                                  width: `${votes.forPct}%`,
                                  background: "#16a34a",
                                  borderRadius: "999px 0 0 999px",
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
                              className="f-mono flex justify-between"
                              style={{ fontSize: 10, color: "var(--dim)" }}
                            >
                              <span>
                                {$N(votes.for)} For · {votes.forPct.toFixed(0)}%
                              </span>
                              <span>{p.deadline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Parallax>
                  );
                })()}

              {/* Table — rest of results */}
              <Parallax
                offset={[60, -60]}
                style={{
                  border: "1px solid var(--rule)",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                {/* Table header */}
                <div
                  className="hidden md:grid"
                  style={{
                    gridTemplateColumns: "1fr 140px 100px 80px 100px",
                    padding: "10px 24px",
                    background: "var(--muted)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  {["Project", "Creator", "Requested", "Funded", "Status"].map(
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

                {visible.slice(1).map((p, i) => {
                  const creator = getCreator(p.creatorId);
                  const funding = calculateFunding(p);
                  return (
                    <div
                      key={p.id}
                      onClick={() => navigate(`/proposal/${p.id}`)}
                      className="t-colors cursor-pointer group grid grid-cols-2 md:grid-cols-[1fr_140px_100px_80px_100px] gap-3 md:gap-0 items-center"
                      style={{
                        padding: "16px 24px",
                        borderTop: i > 0 ? "1px solid var(--rule)" : "none",
                        background: "var(--white)",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,60,0,0.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "var(--white)")
                      }
                    >
                      <div className="col-span-2 md:col-span-1 mb-1 md:mb-0">
                        <div
                          className="f-mono"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--dim)",
                            marginBottom: 3,
                          }}
                        >
                          {p.category}
                        </div>
                        <div
                          className="font-syne flex items-center gap-2"
                          style={{
                            fontSize: 15,
                            fontWeight: 300,
                            lineHeight: 1.2,
                            color: "var(--ink)",
                          }}
                        >
                          {p.title}
                          <ArrowUpRight
                            size={13}
                            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                            style={{ color: "var(--jade)" }}
                          />
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--dim)" }}>
                        {creator.name}
                      </div>
                      <div
                        className="f-mono text-right md:text-left"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        ${$N(funding.requested)}
                      </div>
                      <div>
                        <div
                          style={{
                            height: 3,
                            background: "var(--muted)",
                            position: "relative",
                            marginBottom: 4,
                            borderRadius: 999,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              width: `${Math.min(100, funding.progress)}%`,
                              background: "var(--jade)",
                              borderRadius: 999,
                            }}
                          />
                        </div>
                        <div
                          className="f-mono"
                          style={{ fontSize: 9, color: "var(--dim)" }}
                        >
                          {Math.round(funding.progress)}%
                        </div>
                      </div>
                      <div className="flex items-center justify-end md:justify-start gap-2">
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: listStatusColor(p.status),
                            flexShrink: 0,
                          }}
                        />
                        <span
                          className="f-mono"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--dim)",
                          }}
                        >
                          {p.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Parallax>

              {/* Load more / All shown */}
              <div style={{ textAlign: "center", paddingTop: 48 }}>
                {hasMore ? (
                  <button
                    onClick={() => setPage((n) => n + 1)}
                    className="f-mono t-colors"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "14px 36px",
                      borderRadius: 999,
                      border: "1px solid var(--rule)",
                      background: "none",
                      cursor: "pointer",
                      color: "var(--ink)",
                      transition: "border-color 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--jade)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--rule)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Load more — {list.length - visible.length} remaining
                  </button>
                ) : (
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    All {list.length} shown
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
