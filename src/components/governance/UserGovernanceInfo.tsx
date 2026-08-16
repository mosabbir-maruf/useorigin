import { currentUserGovernance } from "@/data/mockData";
import { Parallax } from "@/components/ui/parallax";

const $N = (n: number) => n.toLocaleString();

export default function UserGovernanceInfo() {
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
            "radial-gradient(45% 55% at 0% 20%, rgba(255,60,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-20 items-center">
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
              My Profile
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(32px,3.5vw,52px)",
                lineHeight: 0.92,
                fontWeight: 300,
                marginBottom: 20,
                color: "var(--ink)",
              }}
            >
              Your
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
                fontSize: 13,
                lineHeight: 1.76,
                color: "var(--dim)",
                marginBottom: 0,
              }}
            >
              Track your voting power, participation history, and active
              delegations.
            </p>
          </Parallax>

          <Parallax
            offset={[60, -60]}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6"
          >
            {[
              {
                l: "Current Voting Power",
                v: $N(currentUserGovernance.votingPower),
                cls: "col-span-2",
              },
              {
                l: "Delegated Voting Power",
                v: $N(currentUserGovernance.delegatedPower),
                cls: "col-span-1",
              },
              {
                l: "Total Votes Participated",
                v: currentUserGovernance.totalVotesParticipated,
                cls: "col-span-1",
              },
              {
                l: "Voting Participation Rate",
                v: `${currentUserGovernance.votingParticipationRate}%`,
                cls: "col-span-1",
              },
              {
                l: "Governance Reputation",
                v: "High",
                cls: "col-span-1",
              },
            ].map((s) => (
              <div
                key={s.l}
                className={`t-colors rounded-[20px] p-5 sm:px-6 sm:py-8 ${s.cls}`}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--rule)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
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
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </Parallax>
        </div>
      </div>
    </section>
  );
}
