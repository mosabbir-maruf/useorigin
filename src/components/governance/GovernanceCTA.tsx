import { Parallax } from "@/components/ui/parallax";

export default function GovernanceCTA() {
  return (
    <section
      style={{
        background: "var(--pit)",
        borderTop: "1px solid var(--rule)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 60% at 20% 0%, rgba(255,60,0,0.12), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 60% at 80% 100%, rgba(255,60,0,0.12), transparent 70%)",
          }}
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <Parallax
          offset={[60, -60]}
          className="flex flex-col items-center justify-center text-center"
        >
          <div
            className="f-mono inline-flex items-center gap-4 mb-8"
            style={{
              fontSize: 10,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--pit-dim)",
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--jade)" }} />
            Get Involved
            <span style={{ width: 24, height: 1, background: "var(--jade)" }} />
          </div>

          <h2
            className="font-syne"
            style={{
              fontSize: "clamp(48px,6.5vw,96px)",
              lineHeight: 0.88,
              color: "var(--pit-text)",
              fontWeight: 300,
              marginBottom: 24,
              maxWidth: 800,
            }}
          >
            Participate in
            <br />
            <em
              className="font-instrument"
              style={{ fontStyle: "italic", color: "var(--jade)" }}
            >
              Governance
            </em>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--pit-dim)",
              maxWidth: 440,
              marginBottom: 48,
            }}
          >
            Review proposals, cast your vote, and help decide how the creator
            treasury is allocated.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              className="f-mono t-colors"
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "16px 32px",
                background: "var(--jade)",
                color: "var(--jade-fg)",
                border: "none",
                cursor: "pointer",
                borderRadius: 999,
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 24px -8px rgba(255,60,0,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Active Proposals
            </button>
            <button
              className="f-mono t-colors"
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "15px 32px",
                background: "transparent",
                color: "var(--pit-text)",
                border: "1px solid var(--pit-rule)",
                cursor: "pointer",
                borderRadius: 999,
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--jade)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--pit-rule)")
              }
            >
              Create Proposal
            </button>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
