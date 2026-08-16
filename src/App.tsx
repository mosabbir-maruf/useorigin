import { useState, useEffect, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import Landing from "@/components/Landing";

const Explore = lazy(() => import("@/components/Explore"));
const Governance = lazy(() => import("@/components/Governance"));
const ProposalDetails = lazy(() => import("@/components/ProposalDetails"));
const Treasury = lazy(() => import("@/components/Treasury"));
const ConnectWallet = lazy(() => import("@/components/ConnectWallet"));
const SubmitProject = lazy(() => import("@/components/SubmitProject"));
const Contact = lazy(() => import("@/components/Contact"));
const NotFound = lazy(() => import("@/components/NotFound"));

function RouteFallback() {
  return (
    <div
      style={{
        background: "var(--cream)",
        color: "var(--dim)",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="f-mono" style={{ fontSize: 10, letterSpacing: "0.2em" }}>
        Loading…
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        lenis?.resize();
        lenis?.scrollTo(el, { offset: 0, duration: 1.2 });
      }, 100);
      return () => clearTimeout(t);
    }
    lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname, location.hash, lenis]);

  const go = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Proposals", path: "/explore" },
    { label: "Governance", path: "/governance" },
    { label: "Treasury", path: "/treasury" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        minHeight: "100vh",
      }}
    >
      {/* ── Nav ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl transition-all duration-300"
        style={{
          background: "rgba(3,7,18,0.8)",
          borderBottom: "1px solid var(--pit-rule)",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              className="group flex items-center transition-transform duration-300 w-fit"
              style={{ transform: "scale(1)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src="/logo.png"
                alt="Origin Logo"
                width={40}
                height={40}
                decoding="async"
                className="w-8 h-8 md:w-10 md:h-10 object-contain -mr-2 translate-y-px"
              />
              <span className="text-white font-bold text-xl md:text-2xl tracking-tighter font-syne leading-none pt-1">
                rigin
              </span>
            </Link>
          </div>

          {/* Desktop Nav — segmented pill track */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <nav
              className="flex items-center gap-1 pointer-events-auto"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--pit-rule)",
                borderRadius: 999,
                padding: 4,
              }}
            >
              {navLinks.map((l) => {
                const active = location.pathname === l.path;
                return (
                  <Link
                    key={l.label}
                    to={l.path}
                    className="font-syne text-sm tracking-wide uppercase transition-all duration-300 flex items-center gap-2"
                    style={{
                      padding: "8px 18px",
                      borderRadius: 999,
                      color: active ? "#fff" : "rgba(255,255,255,0.5)",
                      background: active
                        ? "rgba(255,60,0,0.14)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {active && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--jade)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-3">
            <Link
              to="/submit"
              className="font-syne text-xs tracking-widest uppercase transition-all duration-300 flex items-center"
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                border: "1px solid var(--pit-rule)",
                color: "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--jade)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--pit-rule)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              Submit Project
            </Link>
            <Link
              to="/connect"
              className="px-6 py-2.5 rounded-full transition-all duration-300 font-syne text-xs tracking-widest uppercase font-medium flex items-center t-colors border-none"
              style={{
                background: "var(--jade)",
                color: "var(--jade-fg)",
                boxShadow: "0 0 0 rgba(255,60,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 28px -8px rgba(255,60,0,0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(255,60,0,0)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Connect Wallet
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-1 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center transition-colors"
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: isMenuOpen
                  ? "rgba(255,60,0,0.14)"
                  : "rgba(255,255,255,0.04)",
                color: isMenuOpen ? "var(--jade)" : "rgba(255,255,255,0.8)",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-[calc(100%+10px)] left-4 right-4 animate-fadeIn"
            style={{
              background: "var(--white)",
              border: "1px solid var(--rule)",
              borderRadius: 24,
              boxShadow: "0 24px 48px -12px rgba(0,0,0,0.6)",
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col p-3">
              {navLinks.map((l) => {
                const active = location.pathname === l.path;
                return (
                  <button
                    key={l.label}
                    onClick={() => go(l.path)}
                    className="text-left font-syne text-base tracking-wide uppercase transition-colors flex items-center gap-2"
                    style={{
                      padding: "14px 16px",
                      borderRadius: 14,
                      color: active ? "var(--jade)" : "var(--ink)",
                      background: active
                        ? "rgba(255,60,0,0.08)"
                        : "transparent",
                      fontWeight: active ? 500 : 400,
                    }}
                  >
                    {active && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--jade)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {l.label}
                  </button>
                );
              })}
              <div
                style={{
                  height: 1,
                  background: "var(--rule)",
                  margin: "8px 4px",
                }}
              />
              <button
                onClick={() => go("/submit")}
                className="text-left font-syne text-sm tracking-wide uppercase"
                style={{
                  padding: "14px 16px",
                  borderRadius: 14,
                  color: "var(--dim)",
                }}
              >
                Submit Project
              </button>
              <button
                onClick={() => go("/connect")}
                className="font-syne text-sm tracking-widest uppercase font-medium text-center w-full active:scale-95 transition-all t-colors border-none"
                style={{
                  padding: "16px",
                  borderRadius: 14,
                  marginTop: 8,
                  background: "var(--jade)",
                  color: "var(--jade-fg)",
                }}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/proposal/:id" element={<ProposalDetails />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/treasury" element={<Treasury />} />
            <Route path="/connect" element={<ConnectWallet />} />
            <Route path="/submit" element={<SubmitProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
