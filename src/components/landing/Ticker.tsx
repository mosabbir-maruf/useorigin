import { proposals, calculateFunding } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $N } from "@/lib/format";

export default function Ticker() {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center pointer-events-none -mt-20 -mb-8 md:-mt-[30px] md:-mb-[90px]"
      style={{
        minHeight: "200px",
        zIndex: 20,
      }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[2.6deg] md:-rotate-[1deg] w-[110vw] pointer-events-auto">
        <div
          style={{
            background: "var(--jade)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 40px -10px rgba(255,60,0,0.4)",
          }}
        >
          <Parallax axis="x" offset={[0, -1000]}>
            <div
              className="ticker-run"
              style={{
                padding: "10px 0",
                display: "flex",
                width: "max-content",
              }}
            >
              {[...proposals, ...proposals, ...proposals, ...proposals].map(
                (p, i) => {
                  const funding = calculateFunding(p);
                  return (
                    <span
                      key={i}
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--jade-fg)",
                        opacity: 0.8,
                        padding: "0 40px",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <span style={{ opacity: 0.4 }}>◆</span>
                      {p.title}
                      <span style={{ opacity: 0.4 }}>·</span>$
                      {$N(funding.requested)} USDC
                    </span>
                  );
                },
              )}
            </div>
          </Parallax>
          <Parallax axis="x" offset={[-1000, 0]}>
            <div
              className="ticker-run-reverse"
              style={{
                padding: "10px 0",
                display: "flex",
                width: "max-content",
                borderTop: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {[...proposals, ...proposals, ...proposals, ...proposals].map(
                (p, i) => {
                  const funding = calculateFunding(p);
                  return (
                    <span
                      key={i}
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--jade-fg)",
                        opacity: 0.8,
                        padding: "0 40px",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <span style={{ opacity: 0.4 }}>◆</span>
                      {p.title}
                      <span style={{ opacity: 0.4 }}>·</span>$
                      {$N(funding.requested)} USDC
                    </span>
                  );
                },
              )}
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
