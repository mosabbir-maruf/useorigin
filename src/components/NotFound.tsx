import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 text-center animate-fadeIn relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 68px)", background: "var(--pit)" }}
    >
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />

      {/* Ambient glow — matches hero */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,60,0,0.05), transparent 70%)",
        }}
      />

      {/* Massive 404 text with integrated SVG as the '0' */}
      <div className="relative z-10 flex items-center justify-center mb-12 select-none">
        <span
          className="font-syne font-bold tracking-tighter"
          style={{
            fontSize: "clamp(5rem, 22vw, 20rem)",
            lineHeight: 0.8,
            color: "var(--jade)",
          }}
        >
          4
        </span>

        <div
          className="relative flex items-center justify-center mx-2 md:mx-6"
          style={{
            width: "clamp(60px, 20vw, 210px)",
            height: "clamp(60px, 20vw, 210px)",
          }}
        >
          {/* Spinning dotted orbit ring */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            fill="none"
            className="absolute inset-0 origin-center animate-[spin_30s_linear_infinite]"
          >
            <circle
              cx="100"
              cy="100"
              r="98"
              stroke="var(--pit-rule)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="var(--jade)"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="2 6"
            />
          </svg>
          {/* Logo as the "0" */}
          <img
            src="/logo.png"
            alt="Origin Logo"
            className="relative z-10 animate-[spin_20s_linear_infinite]"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
              filter: "drop-shadow(0 0 30px rgba(255,60,0,0.4))",
            }}
          />
        </div>

        <span
          className="font-syne font-bold tracking-tighter"
          style={{
            fontSize: "clamp(5rem, 22vw, 20rem)",
            lineHeight: 0.8,
            color: "var(--jade)",
          }}
        >
          4
        </span>
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <h2
          className="font-syne text-2xl md:text-4xl font-bold tracking-tight mb-6"
          style={{ color: "var(--pit-text)" }}
        >
          Page not found.
        </h2>
        <p
          className="mb-10 text-xs md:text-sm leading-relaxed f-mono"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--pit-dim)",
          }}
        >
          The signal was lost. This sector is empty.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-syne text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 t-colors"
          style={{
            background: "var(--jade)",
            color: "var(--jade-fg)",
            boxShadow: "0 10px 30px -10px rgba(255,60,0,0.4)",
          }}
        >
          <ArrowLeft size={16} />
          Back to Origin
        </Link>
      </div>
    </div>
  );
}
