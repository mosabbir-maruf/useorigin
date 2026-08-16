import { Parallax } from "@/components/ui/parallax";
import { useState } from "react";

const RankBadge = ({ rank }: { rank: number }) => {
  if (rank === 1) {
    return (
      <div
        style={{
          position: "relative",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            filter: "drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))",
          }}
        >
          <path
            d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
            fill="rgba(245, 158, 11, 0.1)"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <path
            d="M20 7L23.5 14.5L31 15.5L25.5 21L27 28.5L20 24.5L13 28.5L14.5 21L9 15.5L16.5 14.5L20 7Z"
            fill="#F59E0B"
            opacity="0.3"
          />
        </svg>
        <span
          className="f-mono"
          style={{ fontSize: 13, color: "#F59E0B", fontWeight: 700, zIndex: 1 }}
        >
          1
        </span>
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div
        style={{
          position: "relative",
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            filter: "drop-shadow(0 0 4px rgba(148, 163, 184, 0.3))",
          }}
        >
          <path
            d="M18 2L31.8564 10V26L18 34L4.14359 26V10L18 2Z"
            fill="rgba(148, 163, 184, 0.1)"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
        </svg>
        <span
          className="f-mono"
          style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600, zIndex: 1 }}
        >
          2
        </span>
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div
        style={{
          position: "relative",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            filter: "drop-shadow(0 0 4px rgba(217, 119, 6, 0.3))",
          }}
        >
          <path
            d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z"
            fill="rgba(217, 119, 6, 0.1)"
            stroke="#D97706"
            strokeWidth="1"
          />
        </svg>
        <span
          className="f-mono"
          style={{ fontSize: 11, color: "#D97706", fontWeight: 600, zIndex: 1 }}
        >
          3
        </span>
      </div>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <circle
          cx="14"
          cy="14"
          r="13"
          stroke="var(--rule)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
      <span
        className="f-mono"
        style={{ fontSize: 10, color: "var(--dim)", zIndex: 1 }}
      >
        {rank}
      </span>
    </div>
  );
};

const Avatar = ({ name }: { name: string }) => {
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = hash % 360;
  const hue2 = (hash * 2) % 360;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`grad-${name}`} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor={`hsl(${hue1}, 70%, 60%)`} />
          <stop offset="100%" stopColor={`hsl(${hue2}, 70%, 40%)`} />
        </linearGradient>
      </defs>
      <rect width="24" height="24" fill={`url(#grad-${name})`} />
      <circle cx="12" cy="12" r="6" fill="#ffffff" opacity="0.3" />
      <circle cx="16" cy="8" r="3" fill="#ffffff" opacity="0.4" />
    </svg>
  );
};

export default function Delegation() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20 items-center">
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
              Voting Power
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 0.92,
                fontWeight: 300,
                marginBottom: 24,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Delegate
              <br />
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                your votes
              </em>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--dim)",
                marginBottom: 40,
                maxWidth: 400,
              }}
            >
              Delegate your voting power to trusted community members.
            </p>

            <div
              className="t-colors relative overflow-hidden"
              style={{
                marginBottom: 32,
                padding: "28px",
                background:
                  "linear-gradient(145deg, var(--white), var(--muted))",
                border: "1px solid var(--rule)",
                borderRadius: 24,
                boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)",
                transition:
                  "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--jade)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px -10px rgba(255, 60, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--rule)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px -10px rgba(0,0,0,0.05)";
              }}
            >
              {/* Decorative background shape */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  opacity: 0.05,
                  transform: "rotate(15deg)",
                  color: "var(--ink)",
                }}
              >
                <path
                  d="M60 0L111.962 30V90L60 120L8.03848 90V30L60 0Z"
                  fill="currentColor"
                />
              </svg>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(255, 60, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--jade)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    My Delegated Power
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 8 }}
                >
                  <div
                    className="font-syne"
                    style={{
                      fontSize: 40,
                      fontWeight: 300,
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}
                  >
                    4,250
                  </div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 12,
                      color: "var(--dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    VP
                  </div>
                </div>
              </div>
            </div>

            <button
              className="f-mono t-colors group flex items-center justify-center gap-3"
              style={{
                width: "100%",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "18px 28px",
                background: "var(--jade)",
                color: "var(--jade-fg)",
                border: "1px solid var(--jade)",
                cursor: "pointer",
                borderRadius: 16,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
              Find a Delegate
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transition: "transform 0.3s ease" }}
                className="group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="t-colors"
            style={{
              border: "1px solid var(--rule)",
              background: "var(--white)",
              padding: "40px",
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
              className="font-syne"
              style={{
                fontSize: 24,
                fontWeight: 300,
                marginBottom: 32,
                color: "var(--ink)",
              }}
            >
              Top Delegates
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                {
                  name: "origin-steward.eth",
                  votes: "1.2M",
                  participation: "98%",
                  reputation: "High",
                },
                {
                  name: "0x81ff...3b04",
                  votes: "850K",
                  participation: "94%",
                  reputation: "High",
                },
                {
                  name: "creator-fund.eth",
                  votes: "620K",
                  participation: "88%",
                  reputation: "Good",
                },
                {
                  name: "0x3f4a...c82e",
                  votes: "410K",
                  participation: "91%",
                  reputation: "Good",
                },
              ].map((d, i) => {
                const rank = i + 1;
                const isTop1 = rank === 1;
                const isExpanded = expandedIndex === i;
                return (
                  <div
                    key={d.name}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === i ? null : i)
                    }
                    className="t-colors group flex flex-col sm:grid sm:grid-cols-[1fr_80px_80px_80px] w-full items-start sm:items-center gap-0 sm:gap-4 cursor-pointer sm:cursor-default"
                    style={{
                      padding: isTop1 ? "20px" : "16px",
                      background: isTop1
                        ? "rgba(255,60,0,0.02)"
                        : "transparent",
                      borderRadius: 16,
                      border: isTop1
                        ? "1px solid rgba(255,60,0,0.1)"
                        : "1px solid var(--rule)",
                      transition: "all 0.3s ease",
                      transform:
                        isTop1 &&
                        typeof window !== "undefined" &&
                        window.innerWidth >= 640
                          ? "scale(1.02)"
                          : "scale(1)",
                    }}
                    onMouseEnter={(e) => {
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth >= 640
                      ) {
                        e.currentTarget.style.background = isTop1
                          ? "rgba(255,60,0,0.04)"
                          : "rgba(255,60,0,0.03)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.15)";
                        e.currentTarget.style.transform = isTop1
                          ? "scale(1.03)"
                          : "scale(1.01)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth >= 640
                      ) {
                        e.currentTarget.style.background = isTop1
                          ? "rgba(255,60,0,0.02)"
                          : "transparent";
                        e.currentTarget.style.borderColor = isTop1
                          ? "rgba(255,60,0,0.1)"
                          : "var(--rule)";
                        e.currentTarget.style.transform = isTop1
                          ? "scale(1.02)"
                          : "scale(1)";
                      }
                    }}
                  >
                    {/* Shared Left / Mobile Header */}
                    <div className="flex items-center justify-between w-full sm:w-auto">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <RankBadge rank={rank} />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <Avatar name={d.name} />
                          <span
                            className="truncate max-w-[120px] sm:max-w-[200px]"
                            style={{
                              fontSize: isTop1 ? 16 : 14,
                              fontWeight: isTop1 ? 600 : 500,
                              color: "var(--ink)",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {d.name}
                          </span>
                        </div>
                      </div>

                      {/* Mobile Expand / Collapse Icon + Power */}
                      <div className="flex sm:hidden items-center gap-3">
                        <div className="text-right">
                          <div className="f-mono text-[9px] text-[var(--dim)] mb-[2px] uppercase">
                            Power
                          </div>
                          <div
                            className="f-mono text-[13px] font-medium"
                            style={{ color: isTop1 ? "#F59E0B" : "var(--ink)" }}
                          >
                            {d.votes}
                          </div>
                        </div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--dim)"
                          strokeWidth="2"
                          style={{
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile Expanded Secondary Stats */}
                    <div
                      className="flex sm:hidden flex-col gap-3 w-full overflow-hidden"
                      style={{
                        maxHeight: isExpanded ? 200 : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                        paddingTop: isExpanded ? 16 : 0,
                        borderTop: isExpanded
                          ? "1px dashed var(--rule)"
                          : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div className="flex justify-between items-center w-full px-2">
                        <span className="f-mono text-[10px] text-[var(--dim)] uppercase">
                          Activity
                        </span>
                        <span className="f-mono text-[13px] text-[var(--ink)]">
                          {d.participation}
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full px-2">
                        <span className="f-mono text-[10px] text-[var(--dim)] uppercase">
                          Reputation
                        </span>
                        <span className="f-mono text-[13px] text-[var(--ink)]">
                          {d.reputation}
                        </span>
                      </div>
                    </div>

                    {/* Desktop Stats */}
                    <div className="hidden sm:block text-right">
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 9,
                          color: "var(--dim)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        Power
                      </div>
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 13,
                          color: isTop1 ? "#F59E0B" : "var(--ink)",
                          fontWeight: isTop1 ? 500 : 400,
                        }}
                      >
                        {d.votes}
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 9,
                          color: "var(--dim)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        Activity
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        {d.participation}
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div
                        className="f-mono"
                        style={{
                          fontSize: 9,
                          color: "var(--dim)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        Rep
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 13, color: "var(--ink)" }}
                      >
                        {d.reputation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
