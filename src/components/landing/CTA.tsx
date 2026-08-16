import { ArrowRight } from "lucide-react";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Section
      background="var(--pit)"
      color="var(--pit-text)"
      gradient="radial-gradient(60% 90% at 85% 100%, rgba(255,60,0,0.28), transparent 70%), radial-gradient(40% 60% at 10% 0%, rgba(255,60,0,0.12), transparent 70%)"
      containerClassName="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-24 md:py-32 relative"
    >
      <Parallax
        offset={[60, -60]}
        className="flex flex-col items-center text-center max-w-[600px] mx-auto"
      >
        <div
          className="f-mono flex items-center gap-2 mb-8"
          style={{
            fontSize: 9,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--pit-dim)",
          }}
        >
          <span style={{ width: 24, height: 1, background: "var(--jade)" }} />
          Join the treasury
          <span style={{ width: 24, height: 1, background: "var(--jade)" }} />
        </div>

        <h2
          className="w-full"
          style={{
            color: "var(--pit-text)",
            lineHeight: 1.02,
            marginBottom: 28,
          }}
        >
          <span
            className="block font-inter font-medium"
            style={{ fontSize: "clamp(32px,6vw,72px)" }}
          >
            Your project deserves
          </span>
          <span
            className="block font-instrument italic"
            style={{ fontSize: "clamp(32px,6vw,72px)", color: "var(--jade)" }}
          >
            funding, not favors.
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(14px,1.4vw,17px)",
            lineHeight: 1.7,
            color: "var(--pit-dim)",
            maxWidth: 520,
            marginBottom: 44,
          }}
        >
          Submit a proposal and let the community decide — transparent votes,
          milestone-gated escrow, and funds that only move when you deliver.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
          <button
            onClick={() => navigate("/explore")}
            className="w-full sm:w-auto justify-center group flex items-center gap-2 rounded-full font-syne t-colors"
            style={{
              fontSize: 13,
              letterSpacing: "0.06em",
              padding: "16px 32px",
              background: "var(--jade)",
              color: "var(--jade-fg)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 0 rgba(255,60,0,0)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 32px -8px rgba(255,60,0,0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(255,60,0,0)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Proposals
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => navigate("/submit")}
            className="w-full sm:w-auto justify-center rounded-full font-syne t-colors flex items-center"
            style={{
              fontSize: 13,
              letterSpacing: "0.06em",
              padding: "16px 32px",
              background: "transparent",
              color: "var(--pit-text)",
              border: "1px solid var(--pit-rule)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--jade)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--pit-rule)")
            }
          >
            Submit a Proposal
          </button>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          style={{
            paddingTop: 32,
            borderTop: "1px solid var(--pit-rule)",
            width: "100%",
            maxWidth: 620,
          }}
        >
          {[
            ["187", "Projects funded"],
            ["$1.8M", "Distributed"],
            ["92%", "Success rate"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div
                className="f-mono"
                style={{
                  fontSize: 22,
                  fontWeight: 300,
                  color: "var(--pit-text)",
                }}
              >
                {v}
              </div>
              <div
                className="f-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--pit-dim)",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </Parallax>
    </Section>
  );
}
