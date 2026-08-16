import { useState } from "react";
import { Parallax } from "@/components/ui/parallax";
import { faqs } from "@/data/mockData";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
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
            "radial-gradient(40% 55% at 0% 0%, rgba(255,60,0,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-20">
          <Parallax offset={[40, -40]}>
            <div
              className="f-mono inline-flex items-center gap-2"
              style={{
                fontSize: 9,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--dim)",
                marginBottom: 18,
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
              FAQ
            </div>
            <h2
              className="font-syne"
              style={{
                fontSize: "clamp(32px,3.5vw,52px)",
                lineHeight: 0.95,
                fontWeight: 300,
                color: "var(--ink)",
                marginBottom: 20,
              }}
            >
              Questions,
              <br />
              <em
                className="font-instrument"
                style={{ fontStyle: "italic", color: "var(--jade)" }}
              >
                answered
              </em>
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "var(--dim)",
                maxWidth: 300,
              }}
            >
              Can't find what you're looking for? Reach out on the forum or read
              the full documentation.
            </p>
          </Parallax>

          <Parallax offset={[80, -80]} className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="t-colors"
                  style={{
                    background: "var(--white)",
                    border: `1px solid ${
                      isOpen ? "rgba(255,60,0,0.35)" : "var(--rule)"
                    }`,
                    borderRadius: 18,
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left p-4 sm:p-5 md:py-5 md:px-6"
                  >
                    <span
                      className="font-syne"
                      style={{
                        fontSize: "clamp(15px,2vw,18px)",
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      className="flex items-center justify-center rounded-full shrink-0 transition-transform duration-300"
                      style={{
                        width: 32,
                        height: 32,
                        background: isOpen ? "var(--jade)" : "var(--muted)",
                        color: isOpen ? "var(--jade-fg)" : "var(--ink)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={15} />
                    </span>
                  </button>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 300ms ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6"
                        style={{
                          fontSize: 14,
                          lineHeight: 1.75,
                          color: "var(--dim)",
                          maxWidth: 640,
                        }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Parallax>
        </div>
      </div>
    </section>
  );
}
