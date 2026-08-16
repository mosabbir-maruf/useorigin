import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "@/components/ui/parallax";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

const CATEGORIES = [
  "DeFi",
  "Infrastructure",
  "Public Goods",
  "Tooling",
  "Other",
];
const STEPS = [1, 2, 3];

export default function SubmitProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Custom Dropdown State
  const [category, setCategory] = useState("DeFi");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--pit)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SEO
        title="Submit Project"
        description="Submit your project proposal for community-governed funding through the Origin decentralized treasury."
        path="/submit"
      />

      {/* ── Hero Header ── */}
      <section
        style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}
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

        <Parallax
          offset={[60, -60]}
          className="max-w-[1440px] mx-auto px-6 md:px-10 relative"
          style={{
            paddingTop: 100,
            paddingBottom: 24,
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
            Grant Application
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
            Pitch your{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Project
            </em>{" "}
            <br />
            to the Origin
          </h1>

          <p
            className="animate-fadeIn animation-delay-300"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--pit-dim)",
              maxWidth: 560,
            }}
          >
            Propose your project for funding through the Origin decentralized
            treasury. Submissions are reviewed by token holders.
          </p>
        </Parallax>
      </section>

      {/* Main Content */}
      <Parallax
        offset={[80, -80]}
        className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-10 relative z-10"
        style={{
          paddingBottom: 100,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 640 }}>
          {isSuccess ? (
            <div
              className="animate-fadeIn p-8 md:p-12"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--pit-rule)",
                textAlign: "center",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "var(--jade)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 32px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2
                className="font-syne"
                style={{
                  fontSize: 32,
                  fontWeight: 300,
                  marginBottom: 16,
                  color: "var(--pit-text)",
                }}
              >
                Proposal Submitted
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--pit-dim)",
                  marginBottom: 40,
                  maxWidth: 400,
                  margin: "0 auto 40px",
                }}
              >
                Your project proposal has been successfully submitted to the
                Origin treasury for community review.
              </p>
              <button
                onClick={() => navigate("/explore")}
                className="f-mono t-colors"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "16px 32px",
                  background: "var(--jade)",
                  color: "var(--jade-fg)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 999,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Explore Proposals
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--pit-rule)",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 40,
                }}
              >
                {STEPS.map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: 2,
                      background: step >= s ? "var(--jade)" : "var(--pit-rule)",
                      transition: "background 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="animate-fadeIn">
                  <h2
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      marginBottom: 24,
                      color: "var(--pit-text)",
                    }}
                  >
                    Project Basics
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-name"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Project Name
                      </label>
                      <input
                        id="sp-name"
                        name="projectName"
                        required
                        type="text"
                        placeholder="e.g. Aura Network"
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-summary"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        One-line Summary
                      </label>
                      <input
                        id="sp-summary"
                        name="summary"
                        required
                        type="text"
                        placeholder="Brief description of what you are building"
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="f-mono"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Category
                      </label>
                      <div style={{ position: "relative", zIndex: 50 }}>
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="t-colors"
                          style={{
                            width: "100%",
                            background: "var(--pit)",
                            border: `1px solid ${
                              isDropdownOpen ? "var(--jade)" : "var(--pit-rule)"
                            }`,
                            padding: "16px 20px",
                            borderRadius: 12,
                            color: "var(--pit-text)",
                            fontSize: 16,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          {category}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              transform: isDropdownOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                              color: "var(--pit-dim)",
                            }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>

                        {isDropdownOpen && (
                          <div
                            style={{
                              position: "absolute",
                              top: "calc(100% + 8px)",
                              left: 0,
                              width: "100%",
                              background: "var(--pit)",
                              border: "1px solid var(--pit-rule)",
                              borderRadius: 12,
                              padding: "8px",
                              zIndex: 51,
                              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.8)",
                            }}
                          >
                            {CATEGORIES.map((cat) => (
                              <div
                                key={cat}
                                onClick={() => {
                                  setCategory(cat);
                                  setIsDropdownOpen(false);
                                }}
                                className="t-colors"
                                style={{
                                  padding: "12px 16px",
                                  borderRadius: 8,
                                  cursor: "pointer",
                                  background:
                                    category === cat
                                      ? "rgba(255,255,255,0.04)"
                                      : "transparent",
                                  color:
                                    category === cat
                                      ? "var(--jade)"
                                      : "var(--pit-dim)",
                                }}
                                onMouseEnter={(e) => {
                                  if (category !== cat) {
                                    e.currentTarget.style.background =
                                      "rgba(255,255,255,0.02)";
                                    e.currentTarget.style.color =
                                      "var(--pit-text)";
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (category !== cat) {
                                    e.currentTarget.style.background =
                                      "transparent";
                                    e.currentTarget.style.color =
                                      "var(--pit-dim)";
                                  }
                                }}
                              >
                                {cat}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fadeIn">
                  <h2
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      marginBottom: 24,
                      color: "var(--pit-text)",
                    }}
                  >
                    Funding Details
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-amount"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Requested Amount (USDC)
                      </label>
                      <input
                        id="sp-amount"
                        name="amount"
                        required
                        type="number"
                        placeholder="50,000"
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-proposal"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Detailed Proposal
                      </label>
                      <textarea
                        id="sp-proposal"
                        name="proposal"
                        required
                        placeholder="Outline your milestones, team background, and how the funds will be used..."
                        rows={5}
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                          resize: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fadeIn">
                  <h2
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      marginBottom: 24,
                      color: "var(--pit-text)",
                    }}
                  >
                    Links & Assets
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-website"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Website URL
                      </label>
                      <input
                        id="sp-website"
                        name="website"
                        type="url"
                        placeholder="https://"
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="sp-github"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        GitHub Repository
                      </label>
                      <input
                        id="sp-github"
                        name="github"
                        type="url"
                        placeholder="https://github.com/..."
                        style={{
                          width: "100%",
                          background: "var(--pit)",
                          border: "1px solid var(--pit-rule)",
                          padding: "16px 20px",
                          borderRadius: 12,
                          color: "var(--pit-text)",
                          fontSize: 16,
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--jade)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--pit-rule)")
                        }
                      />
                    </div>
                    <div
                      style={{
                        padding: "20px",
                        border: "1px dashed var(--pit-rule)",
                        borderRadius: 12,
                        textAlign: "center",
                        background: "var(--pit)",
                      }}
                    >
                      <span
                        className="f-mono"
                        style={{
                          fontSize: 10,
                          color: "var(--pit-dim)",
                          textTransform: "uppercase",
                        }}
                      >
                        Drag & Drop Pitch Deck (PDF)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 40,
                  paddingTop: 32,
                  borderTop: "1px solid var(--pit-rule)",
                }}
              >
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="f-mono t-colors"
                    style={{
                      padding: "14px 24px",
                      background: "transparent",
                      border: "1px solid var(--pit-rule)",
                      color: "var(--pit-text)",
                      borderRadius: 999,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--pit-dim)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--pit-rule)")
                    }
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="f-mono t-colors"
                    style={{
                      padding: "14px 32px",
                      background: "var(--jade)",
                      color: "var(--jade-fg)",
                      border: "none",
                      borderRadius: 999,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.9")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="f-mono t-colors"
                    style={{
                      padding: "14px 32px",
                      background: "var(--jade)",
                      color: "var(--jade-fg)",
                      border: "none",
                      borderRadius: 999,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      cursor: isSubmitting ? "wait" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Project"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </Parallax>

      {/* Footer */}
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}
