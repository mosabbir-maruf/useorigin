import {
  Percent,
  Users,
  Clock,
  Link2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import { statusColor } from "./utils";

const stats = [
  { icon: Percent, v: "60%", l: "Approval threshold" },
  { icon: Users, v: "500", l: "Minimum quorum" },
  { icon: Clock, v: "14 days", l: "Voting window" },
  { icon: Link2, v: "100%", l: "On-chain" },
];

const activity = [
  { t: "Increase quorum threshold to 750 votes", s: "Voting", d: "3d left" },
  {
    t: "Add Education category to funding taxonomy",
    s: "Approved",
    d: "Passed",
  },
  {
    t: "Reduce milestone verification window to 7 days",
    s: "Voting",
    d: "8d left",
  },
  {
    t: "Allocate 5% of treasury to emergency grants",
    s: "Voting",
    d: "11d left",
  },
  {
    t: "Treasury rebalance: increase Film allocation",
    s: "Voting",
    d: "13d left",
  },
];

export default function Governance() {
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
            "radial-gradient(50% 60% at 100% 0%, rgba(255,60,0,0.14), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <Parallax
          offset={[40, -40]}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-8 lg:mb-16"
        >
          <div className="md:w-7/12">
            <div
              className="f-mono inline-flex items-center gap-2"
              style={{
                fontSize: 9,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--dim)",
                marginBottom: 24,
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
              DAO Governance
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(30px,7vw,60px)",
                lineHeight: 0.98,
                color: "var(--ink)",
                fontWeight: 300,
              }}
            >
              Community-governed,
              <br className="hidden sm:inline" />
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                fully on-chain
              </em>
            </h2>
          </div>
          <div className="md:w-4/12 flex flex-col justify-end">
            <div
              style={{
                width: 40,
                height: 1,
                background: "var(--jade)",
                marginBottom: 20,
              }}
            />
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--dim)",
              }}
            >
              Every token holder has proportional voting power. No editorial
              board, no committee — execution is enforced by smart contracts.
            </p>
          </div>
        </Parallax>

        <Parallax offset={[80, -80]}>
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr gap-3 sm:gap-4 lg:gap-6">
            {/* live governance feed — large bento tile */}
            <div
              className="col-span-2 lg:col-span-2 lg:row-span-2 p-3.5 sm:p-6 md:p-8"
              style={{
                background: "var(--white)",
                border: "1px solid var(--rule)",
                borderRadius: 24,
              }}
            >
              <div className="sm:hidden">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className="f-mono flex items-center gap-2"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] inline-block" />
                    Active governance
                  </div>
                  <a
                    href="#"
                    className="f-mono t-colors inline-flex items-center gap-1"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    All <ArrowUpRight size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {activity.map((e, i) => (
                    <div
                      key={i}
                      className="group grid grid-cols-[1fr_auto] gap-2 items-center t-colors cursor-pointer"
                      style={{
                        padding: "12px 12px",
                        background: "var(--muted)",
                        borderRadius: 14,
                        border: "1px solid transparent",
                      }}
                      onMouseEnter={(ev) =>
                        (ev.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(ev) =>
                        (ev.currentTarget.style.borderColor = "transparent")
                      }
                    >
                      <div className="min-w-0">
                        <div className="flex items-start gap-2 min-w-0 mb-6">
                          <span
                            className="f-mono shrink-0"
                            style={{
                              fontSize: 10,
                              color: "var(--dim)",
                              marginTop: 2,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              lineHeight: 1.35,
                              color: "var(--ink)",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {e.t}
                          </span>
                        </div>
                        <span
                          className="f-mono inline-flex items-center gap-1"
                          style={{
                            fontSize: 8,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            padding: "4px 8px",
                            borderRadius: 999,
                            border: `1px solid ${statusColor(e.s)}`,
                            color: statusColor(e.s),
                          }}
                        >
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: statusColor(e.s),
                            }}
                          />
                          {e.s}
                        </span>
                      </div>

                      <div className="flex flex-col items-end justify-between self-stretch">
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1"
                          style={{ color: "var(--dim)", marginTop: 2 }}
                        />
                        <span
                          className="f-mono"
                          style={{
                            fontSize: 9,
                            color: "var(--dim)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {e.d}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flex items-center justify-between gap-6 flex-wrap mb-4">
                  <div
                    className="f-mono flex items-center gap-2"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] inline-block" />
                    Active governance — Q3 2026
                  </div>
                  <a
                    href="#"
                    className="f-mono t-colors flex items-center gap-1.5"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      textDecoration: "none",
                    }}
                  >
                    View all proposals <ArrowUpRight size={13} />
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {activity.map((e, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-between gap-3 sm:gap-6 t-colors cursor-pointer"
                      style={{
                        padding: "12px 14px",
                        background: "var(--muted)",
                        borderRadius: 14,
                        border: "1px solid transparent",
                      }}
                      onMouseEnter={(ev) =>
                        (ev.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.35)")
                      }
                      onMouseLeave={(ev) =>
                        (ev.currentTarget.style.borderColor = "transparent")
                      }
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="f-mono shrink-0"
                          style={{ fontSize: 10, color: "var(--dim)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            lineHeight: 1.35,
                            color: "var(--ink)",
                          }}
                          className="truncate"
                        >
                          {e.t}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <span
                          className="f-mono inline-flex items-center gap-1.5"
                          style={{
                            fontSize: 9,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            padding: "5px 10px",
                            borderRadius: 999,
                            border: `1px solid ${statusColor(e.s)}`,
                            color: statusColor(e.s),
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: statusColor(e.s),
                            }}
                          />
                          {e.s}
                        </span>
                        <span
                          className="f-mono"
                          style={{
                            fontSize: 10,
                            color: "var(--dim)",
                            width: 56,
                            textAlign: "right",
                          }}
                        >
                          {e.d}
                        </span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                          style={{ color: "var(--dim)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`p-3.5 sm:p-5 md:p-7 t-colors ${i === 0 || i === 3 ? "col-span-2 sm:col-span-1" : "col-span-1"}`}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  borderRadius: 20,
                }}
              >
                <s.icon
                  size={18}
                  strokeWidth={1.5}
                  style={{ color: "var(--jade)", marginBottom: 16 }}
                />
                <div className="f-mono text-xl sm:text-2xl md:text-[28px] text-[var(--ink)] font-light mb-1">
                  {s.v}
                </div>
                <div
                  className="f-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
}
