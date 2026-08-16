import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  proposals,
  calculateFunding,
  calculateVotes,
  getCreator,
} from "@/data/mockData";
import { $N, landingStatusColor } from "@/lib/format";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";

export default function Carousel({ open }: { open: (id: string) => void }) {
  const items = useMemo(
    () =>
      proposals.filter(
        (p) => p.status === "Active Voting" || p.status === "Approved",
      ),
    [],
  );
  const [ref, api] = useEmblaCarousel({ align: "start", dragFree: true });
  const [canP, setCanP] = useState(false);
  const [canN, setCanN] = useState(true);

  const sync = useCallback(() => {
    if (!api) return;
    setCanP(api.canScrollPrev());
    setCanN(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", sync);
    api.on("reInit", sync);
    sync();
  }, [api, sync]);

  return (
    <Section
      gradient="radial-gradient(40% 70% at 0% 100%, rgba(255,60,0,0.10), transparent 70%)"
      containerClassName="max-w-[1440px] mx-auto py-12 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden relative"
    >
        <Parallax offset={[40, -40]}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-8 lg:mb-16">
            <div className="md:w-7/12">
              <div
                className="f-mono flex items-center gap-2 mb-6"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] inline-block" />
                Live — currently in voting
              </div>
              <h2
                className="font-syne"
                style={{
                  fontSize: "clamp(36px,4vw,60px)",
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
                  proposals
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
                  marginBottom: 24,
                }}
              >
                Browse the latest projects submitted by creators, review their
                milestones, and cast your vote on-chain to decide what gets
                funded.
              </p>
              <div className="hidden sm:flex gap-2">
                <button
                  onClick={() => api?.scrollPrev()}
                  disabled={!canP}
                  className="w-11 h-11 flex items-center justify-center rounded-full border t-colors"
                  style={{
                    borderColor: canP ? "var(--ink)" : "var(--rule)",
                    color: canP ? "var(--ink)" : "var(--rule)",
                    cursor: canP ? "pointer" : "default",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => api?.scrollNext()}
                  disabled={!canN}
                  className="w-11 h-11 flex items-center justify-center rounded-full border t-colors"
                  style={{
                    borderColor: canN ? "var(--ink)" : "var(--rule)",
                    color: canN ? "var(--ink)" : "var(--rule)",
                    cursor: canN ? "pointer" : "default",
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax offset={[60, -60]}>
          <div className="embla overflow-visible" ref={ref}>
            <div className="embla__container flex gap-6">
              {items.map((p) => {
                const funding = calculateFunding(p);
                const votes = calculateVotes(p);
                const creator = getCreator(p.creatorId);

                return (
                  <div
                    key={p.id}
                    className="embla__slide shrink-0"
                    style={{ width: "clamp(280px, 85vw, 420px)" }}
                  >
                    <div
                      onClick={() => open(p.id)}
                      className="cursor-pointer h-[480px] flex flex-col group t-colors"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--rule)",
                        borderRadius: 24,
                        overflow: "hidden",
                        transition:
                          "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,60,0,0.4)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                          "0 24px 48px -24px rgba(255,60,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="flex-1 p-6 sm:p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: landingStatusColor(p.status) }}
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
                        </div>

                        <h3
                          className="font-instrument"
                          style={{
                            fontSize: 26,
                            lineHeight: 1.15,
                            fontWeight: 300,
                            color: "var(--ink)",
                            marginBottom: 16,
                          }}
                        >
                          {p.title}
                        </h3>

                        <p
                          style={{
                            fontSize: 13,
                            lineHeight: 1.7,
                            color: "var(--dim)",
                            flex: 1,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {p.shortDescription}
                        </p>

                        <div className="mt-6">
                          <div className="flex justify-between mb-2">
                            <span
                              className="f-mono"
                              style={{
                                fontSize: 10,
                                color: "var(--ink)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                              }}
                            >
                              Funded
                            </span>
                            <span
                              className="f-mono"
                              style={{
                                fontSize: 10,
                                color: "var(--dim)",
                                letterSpacing: "0.04em",
                              }}
                            >
                              {Math.round(funding.progress)}% of $
                              {$N(funding.requested)}
                            </span>
                          </div>
                          <div
                            className="h-[5px] w-full overflow-hidden rounded-full"
                            style={{ background: "var(--muted)" }}
                          >
                            <div
                              className="h-full transition-all duration-1000 rounded-full"
                              style={{
                                width: `${Math.round(funding.progress)}%`,
                                background: "var(--jade)",
                              }}
                            />
                          </div>
                        </div>

                        <div
                          className="mt-5 grid grid-cols-2 gap-4 pt-5 border-t border-dashed"
                          style={{ borderColor: "var(--rule)" }}
                        >
                          {[
                            { l: "Ask", v: `$${$N(funding.requested)}` },
                            { l: "Support", v: `${votes.forPct.toFixed(0)}%` },
                          ].map((s) => (
                            <div key={s.l}>
                              <div
                                className="f-mono"
                                style={{
                                  fontSize: 9,
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: "var(--dim)",
                                  marginBottom: 4,
                                }}
                              >
                                {s.l}
                              </div>
                              <div
                                className="f-mono"
                                style={{ fontSize: 16, color: "var(--ink)" }}
                              >
                                {s.v}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className="p-4 px-8 flex justify-between items-center transition-colors duration-300 group-hover:opacity-90"
                        style={{
                          background: "var(--muted)",
                          borderTop: "1px solid var(--rule)",
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="f-mono flex items-center justify-center w-6 h-6 rounded-full"
                            style={{
                              background: "var(--white)",
                              border: "1px solid var(--rule)",
                              fontSize: 9,
                              color: "var(--ink)",
                            }}
                          >
                            {creator.initials}
                          </div>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: "var(--ink)",
                            }}
                          >
                            {creator.name}
                          </span>
                        </div>
                        <span
                          className="f-mono flex items-center gap-1"
                          style={{
                            fontSize: 10,
                            color: "var(--dim)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          Ends {p.deadline}{" "}
                          <ArrowUpRight
                            size={12}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Parallax>
    </Section>
  );
}
