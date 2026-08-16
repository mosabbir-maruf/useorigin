import { transactions } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";
import { $N, statusColor } from "@/lib/format";

export default function TreasuryTransactions() {
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
            "radial-gradient(45% 55% at 0% 20%, rgba(255,60,0,0.08), transparent 70%)",
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
            Transactions
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
            Transaction{" "}
            <em
              className="font-instrument"
              style={{ fontStyle: "italic", color: "var(--jade)" }}
            >
              History
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
              gridTemplateColumns: "100px 180px 1fr 100px 80px 120px 100px",
              gap: "16px",
              padding: "16px 24px",
              background: "var(--muted)",
              borderBottom: "1px solid var(--rule)",
              alignItems: "center",
            }}
          >
            {[
              "Date",
              "Type",
              "Project",
              "Amount",
              "Asset",
              "Status",
              "TX ID",
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
                  textAlign: h === "Status" ? "center" : "left",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {transactions.map((t, i) => (
            <div
              key={t.id}
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
                  style={{ marginBottom: 8 }}
                >
                  <div>
                    <div
                      className="font-syne"
                      style={{
                        fontSize: 16,
                        color: "var(--ink)",
                        marginBottom: 4,
                      }}
                    >
                      {t.project}
                    </div>
                    <div
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--dim)" }}
                    >
                      {t.date}
                    </div>
                  </div>
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 8,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                    }}
                  >
                    {t.type}
                  </span>
                </div>

                <div
                  className="f-mono"
                  style={{
                    fontSize: 13,
                    color:
                      t.type === "Deposit" || t.type === "Refund"
                        ? "var(--jade)"
                        : "var(--ink)",
                    marginBottom: 8,
                  }}
                >
                  {t.type === "Deposit" || t.type === "Refund" ? "+" : "-"}$
                  {$N(t.amount)}
                </div>

                <div
                  className="f-mono"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      color: "var(--dim)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Asset
                  </span>
                  <span style={{ color: "var(--ink)" }}>{t.asset}</span>
                </div>

                <div
                  className="flex items-center justify-between gap-3"
                  style={{ borderTop: "1px solid var(--rule)", paddingTop: 8 }}
                >
                  <span
                    className="f-mono inline-flex items-center gap-1.5"
                    style={{
                      fontSize: 8,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: statusColor(t.status),
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: statusColor(t.status),
                        flexShrink: 0,
                      }}
                    />
                    {t.status}
                  </span>
                  <a
                    href="#"
                    className="f-mono t-colors"
                    style={{
                      fontSize: 10,
                      color: "var(--dim)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--jade)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--dim)")
                    }
                  >
                    {t.id}
                  </a>
                </div>
              </div>

              <div
                className="hidden xl:grid"
                style={{
                  gridTemplateColumns: "100px 180px 1fr 100px 80px 120px 100px",
                  padding: "24px 24px",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  className="f-mono"
                  style={{ fontSize: 11, color: "var(--dim)" }}
                >
                  {t.date}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 999,
                      border: "1px solid var(--rule)",
                      color: "var(--ink)",
                    }}
                  >
                    {t.type}
                  </span>
                </div>
                <div
                  className="font-syne"
                  style={{ fontSize: 16, color: "var(--ink)" }}
                >
                  {t.project}
                </div>
                <div
                  className="f-mono"
                  style={{
                    fontSize: 13,
                    color:
                      t.type === "Deposit" || t.type === "Refund"
                        ? "var(--jade)"
                        : "var(--ink)",
                  }}
                >
                  {t.type === "Deposit" || t.type === "Refund" ? "+" : "-"}$
                  {$N(t.amount)}
                </div>
                <div
                  className="f-mono"
                  style={{ fontSize: 11, color: "var(--dim)" }}
                >
                  {t.asset}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="f-mono inline-flex items-center gap-1.5"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: statusColor(t.status),
                      padding: "4px 10px",
                      borderRadius: 999,
                      border: `1px solid ${statusColor(t.status)}`,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: statusColor(t.status),
                        flexShrink: 0,
                      }}
                    />
                    {t.status}
                  </span>
                </div>
                <div
                  className="f-mono"
                  style={{ fontSize: 11, color: "var(--dim)" }}
                >
                  <a
                    href="#"
                    className="t-colors"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--jade)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--dim)")
                    }
                  >
                    {t.id}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Parallax>
      </div>
    </section>
  );
}
