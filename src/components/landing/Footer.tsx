import { ArrowUpRight } from "lucide-react";
import { Github, Instagram, Linkedin, Globe } from "@/components/ui/social-icons";

const MARQUEE_ITEMS = [
  { type: "text", val: "DECENTRALIZED TREASURY" },
  { type: "img", val: "/assets/gfx/asset5.avif" },
  { type: "text", val: "COMMUNITY GOVERNED" },
  { type: "img", val: "/assets/gfx/asset6.avif" },
  { type: "text", val: "ORIGIN PROTOCOL" },
  { type: "img", val: "/assets/gfx/asset7.webp" },
  { type: "text", val: "WEB3 NATIVE" },
  { type: "img", val: "/assets/gfx/asset8.avif" },
];

const FOOTER_COLUMNS = [
  {
    h: "Product",
    links: [
      { label: "Explore Proposals", href: "/explore" },
      { label: "Governance", href: "/governance" },
      { label: "Treasury", href: "/treasury" },
      { label: "Submit a Proposal", href: "/submit" },
    ],
  },
  {
    h: "Discover",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--pit)",
        borderTop: "1px solid var(--pit-rule)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid var(--pit-rule)",
          borderTop: "1px solid var(--pit-rule)",
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "40px 0",
          background: "var(--pit)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 60, 0, 0.03), transparent 70%)",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              animation: "marquee 40s linear infinite",
            }}
          >
            {/* Duplicate the array to allow for seamless 50% translation loop */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 80,
                  paddingRight: 80,
                }}
              >
                {MARQUEE_ITEMS.map((item, j) => (
                  <div
                    key={j}
                    className="group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.type === "text" ? (
                      <span
                        className="font-syne"
                        style={{
                          fontSize: 13,
                          letterSpacing: "0.2em",
                          color: "var(--pit-text)",
                          whiteSpace: "nowrap",
                          userSelect: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <span style={{ color: "var(--jade)", fontSize: 16 }}>
                          ✦
                        </span>
                        {item.val}
                      </span>
                    ) : (
                      <img
                        src={item.val}
                        alt="partner"
                        loading="lazy"
                        decoding="async"
                        className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out"
                        style={{
                          height: 32,
                          width: "auto",
                          maxWidth: 200,
                          objectFit: "contain",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(255,60,0,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative">
        {/* newsletter strip */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
          style={{
            padding: "36px 0 40px",
            borderBottom: "1px solid var(--pit-rule)",
          }}
        >
          <div className="text-left w-full md:w-auto">
            <div
              className="f-mono inline-flex items-center gap-2"
              style={{
                fontSize: 9,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--jade)",
                marginBottom: 10,
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
              Stay in the loop
            </div>
            <h3
              className="font-syne"
              style={{
                fontSize: "clamp(20px,7vw,32px)",
                lineHeight: 1.08,
                fontWeight: 300,
                color: "var(--pit-text)",
                maxWidth: 560,
              }}
            >
              <span className="block sm:inline">Governance updates,</span>{" "}
              <span className="block sm:inline">
                straight to your{" "}
                <em
                  className="font-instrument"
                  style={{ fontStyle: "italic", color: "var(--jade)" }}
                >
                  inbox.
                </em>
              </span>
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row w-full md:w-auto md:min-w-[440px] items-stretch sm:items-center gap-3 sm:gap-2 sm:p-1.5 sm:bg-[rgba(255,255,255,0.05)] sm:border sm:border-[var(--pit-rule)] sm:rounded-full"
          >
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address for newsletter
            </label>
            <input
              id="footer-newsletter"
              name="email"
              aria-label="Email address for newsletter"
              autoComplete="email"
              type="email"
              required
              placeholder="you@wallet.eth"
              className="f-mono outline-none flex-1 min-w-0 md:w-[220px] px-5 py-3.5 sm:px-4 sm:py-2.5 bg-[rgba(255,255,255,0.05)] sm:bg-transparent border border-[var(--pit-rule)] sm:border-none rounded-full sm:rounded-none"
              style={{
                fontSize: 13,
                color: "var(--pit-text)",
              }}
            />
            <button
              type="submit"
              className="font-syne t-colors flex justify-center items-center gap-1.5 shrink-0 px-6 py-3.5 sm:px-5 sm:py-2.5"
              style={{
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "var(--jade)",
                color: "var(--jade-fg)",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe <ArrowUpRight size={13} />
            </button>
          </form>
        </div>

        {/* link columns */}
        <div
          className="grid grid-cols-2 md:grid-cols-[1.4fr_repeat(2,1fr)] gap-8 md:gap-10"
          style={{ padding: "56px 0" }}
        >
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-5">
              <img
                src="/logo.png"
                alt="Origin Logo"
                loading="lazy"
                decoding="async"
                className="w-7 h-7 object-contain -mr-1.5 translate-y-px"
              />
              <span
                style={{ color: "var(--pit-text)" }}
                className="font-bold text-xl tracking-tighter font-syne leading-none pt-1"
              >
                rigin
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "var(--pit-dim)",
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              A community-governed treasury connecting independent creators with
              decentralized, milestone-gated funding.
            </p>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {[
                {
                  Icon: Github,
                  href: "https://github.com/mosabbir-maruf",
                  title: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/mosabbir-maruf",
                  title: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/mosabbir_maruf",
                  title: "Instagram",
                },
                {
                  Icon: Globe,
                  href: "https://mosabbir.pages.dev",
                  title: "Portfolio",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.title}
                  className="t-colors"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    color: "var(--pit-dim)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--jade)";
                    e.currentTarget.style.background = "rgba(255,60,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--pit-dim)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <item.Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.h}>
              <div
                className="f-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--jade)",
                  marginBottom: 20,
                }}
              >
                {col.h}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 13 }}
              >
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="t-colors flex items-center gap-1.5 group"
                    style={{
                      fontSize: 13,
                      color: "var(--pit-text)",
                      opacity: 0.75,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--jade)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--pit-text)";
                      e.currentTarget.style.opacity = "0.75";
                    }}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ padding: "24px 0", borderTop: "1px solid var(--pit-rule)" }}
        >
          <span
            className="f-mono text-center md:text-left"
            style={{
              fontSize: 9,
              letterSpacing: "0.16em",
              color: "var(--pit-dim)",
            }}
          >
            © 2026 Origin. All rights reserved.
          </span>
          <span
            className="f-mono text-center md:text-right"
            style={{
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--pit-dim)",
            }}
          >
            Built by{" "}
            <a
              href="https://mosabbir.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="t-colors hover:text-[var(--jade)] transition-colors"
              style={{ textDecoration: "none", color: "var(--pit-text)" }}
            >
              Mosabbir Maruf
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
