import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "@/components/ui/parallax";
import {
  Github,
  Instagram,
  Linkedin,
  Globe,
} from "@/components/ui/social-icons";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

export default function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Custom Dropdown State
  const [subject, setSubject] = useState("Proposal Assistance");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const SUBJECTS = [
    "Proposal Assistance",
    "Technical Support",
    "Partnership",
    "Other",
  ];

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
        title="Contact"
        description="Get in touch with the Origin team. Reach out for proposal assistance, technical support, or partnership inquiries."
        path="/contact"
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
            Support & Inquiries
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
            Reach the{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Team
            </em>{" "}
            <br />
            behind Origin
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
            Have a question about a proposal, need technical support, or want to
            collaborate? Send us a message and we'll get back to you.
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
                Message Sent
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
                Thank you for reaching out. A member of the Origin core team
                will respond to your inquiry shortly.
              </p>
              <button
                onClick={() => navigate("/")}
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
                Return Home
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
                  Send a Message
                </h2>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  {/* Name and Email side-by-side on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="f-mono"
                        htmlFor="contact-name"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        required
                        type="text"
                        placeholder="Alice"
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
                        htmlFor="contact-email"
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--pit-dim)",
                          marginBottom: 12,
                        }}
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        required
                        type="email"
                        placeholder="alice@example.com"
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
                  </div>

                  {/* Subject Dropdown (matching SubmitProject dropdown style) */}
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
                      Subject
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
                        {subject}
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
                          {SUBJECTS.map((sub) => (
                            <div
                              key={sub}
                              onClick={() => {
                                setSubject(sub);
                                setIsDropdownOpen(false);
                              }}
                              className="t-colors"
                              style={{
                                padding: "12px 16px",
                                borderRadius: 8,
                                cursor: "pointer",
                                background:
                                  subject === sub
                                    ? "rgba(255,255,255,0.04)"
                                    : "transparent",
                                color:
                                  subject === sub
                                    ? "var(--jade)"
                                    : "var(--pit-dim)",
                              }}
                              onMouseEnter={(e) => {
                                if (subject !== sub) {
                                  e.currentTarget.style.background =
                                    "rgba(255,255,255,0.02)";
                                  e.currentTarget.style.color =
                                    "var(--pit-text)";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (subject !== sub) {
                                  e.currentTarget.style.background =
                                    "transparent";
                                  e.currentTarget.style.color =
                                    "var(--pit-dim)";
                                }
                              }}
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label
                      className="f-mono"
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--pit-dim)",
                        marginBottom: 12,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="How can we help?"
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
                        (e.currentTarget.style.borderColor = "var(--pit-rule)")
                      }
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 40,
                  paddingTop: 32,
                  borderTop: "1px solid var(--pit-rule)",
                }}
              >
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Socials placed right inside the form container at the bottom */}
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: "1px dashed var(--pit-rule)",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 24,
                }}
              >
                {/* Social Links */}
                <div style={{ display: "flex", gap: 16 }}>
                  <a
                    href="https://github.com/mosabbir-maruf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-colors hover:text-[var(--jade)]"
                    style={{ color: "var(--pit-dim)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mosabbir-maruf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-colors hover:text-[var(--jade)]"
                    style={{ color: "var(--pit-dim)" }}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mosabbir_maruf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-colors hover:text-[var(--jade)]"
                    style={{ color: "var(--pit-dim)" }}
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://mosabbir.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-colors hover:text-[var(--jade)]"
                    style={{ color: "var(--pit-dim)" }}
                  >
                    <Globe size={20} />
                  </a>
                </div>
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
