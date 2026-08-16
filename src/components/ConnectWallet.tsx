import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "@/components/ui/parallax";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

type ConnectionState =
  "disconnected" | "connecting" | "connected" | "wrong-network" | "error";

const WALLETS = [
  {
    name: "MetaMask",
    desc: "Browser extension",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="MetaMask"
        width="24"
        height="24"
        loading="lazy"
        decoding="async"
        style={{ display: "block" }}
      />
    ),
  },
  {
    name: "WalletConnect",
    desc: "Mobile wallet QR code",
    icon: (
      <img
        src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue%20(Default)/Icon.svg"
        alt="WalletConnect"
        width="24"
        height="24"
        loading="lazy"
        decoding="async"
        style={{ display: "block" }}
      />
    ),
  },
  {
    name: "Coinbase Wallet",
    desc: "Coinbase Wallet app",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <rect width="24" height="24" rx="4" fill="#0052FF" />
        <path
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
          fill="white"
        />
        <path
          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
          fill="#0052FF"
        />
      </svg>
    ),
  },
];

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [connState, setConnState] = useState<ConnectionState>("disconnected");
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = (wallet: string) => {
    setSelectedWallet(wallet);
    setConnState("connecting");
    // Simulate connection flow
    setTimeout(() => {
      // Simulate 10% chance of error, 10% chance of wrong network, 80% success
      const r = Math.random();
      if (r < 0.1) setConnState("error");
      else if (r < 0.2) setConnState("wrong-network");
      else setConnState("connected");
    }, 1500);
  };

  // Force specific states for demonstration/testing
  const forceState = (s: ConnectionState) => setConnState(s);

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
        title="Connect Wallet"
        description="Connect your Web3 wallet to Origin. Participate in governance, vote on proposals, and manage your treasury contributions."
        path="/connect"
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
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-50%",
            left: "-10%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.05), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <Parallax
          offset={[60, -60]}
          className="max-w-[1440px] mx-auto px-6 md:px-10 relative"
          style={{
            paddingTop: 100,
            paddingBottom: 60,
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
            Authentication
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
            Unlock your{" "}
            <em
              className="font-instrument"
              style={{
                fontStyle: "italic",
                color: "var(--jade)",
                paddingRight: "8px",
              }}
            >
              Access
            </em>{" "}
            <br />
            to Origin
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
            Connect your wallet to participate in Origin governance, submit
            proposals, and access your decentralized creator funding activity.
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
          {/* The Connect Wallet States */}

          {connState === "disconnected" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {WALLETS.map((w) => (
                <div
                  key={w.name}
                  onClick={() => handleConnect(w.name)}
                  className="t-colors flex gap-4 justify-between items-center"
                  style={{
                    padding: "24px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--pit-rule)",
                    cursor: "pointer",
                    borderRadius: 20,
                    transition:
                      "background 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,60,0,0.35)";
                    e.currentTarget.style.background = "rgba(255,60,0,0.04)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--pit-rule)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "var(--pit)",
                        border: "1px solid var(--pit-rule)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {w.icon}
                    </div>
                    <div>
                      <div
                        className="font-syne"
                        style={{
                          fontSize: 18,
                          fontWeight: 300,
                          marginBottom: 4,
                          color: "var(--pit-text)",
                        }}
                      >
                        {w.name}
                      </div>
                      <div
                        className="f-mono"
                        style={{ fontSize: 11, color: "var(--pit-dim)" }}
                      >
                        {w.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trust & Security minimalist footer under options */}
              <div
                className="flex items-center justify-center gap-2"
                style={{ marginTop: 32, opacity: 0.7 }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--pit-dim)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span style={{ fontSize: 13, color: "var(--pit-dim)" }}>
                  Origin never has access to your private keys.
                </span>
              </div>
            </div>
          )}

          {connState === "connecting" && (
            <div
              className="p-8 md:p-12"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--pit-rule)",
                textAlign: "center",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "2px solid var(--pit-rule)",
                  borderTopColor: "var(--jade)",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 24px",
                }}
              />
              <h2
                className="font-syne"
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  marginBottom: 8,
                  color: "var(--pit-text)",
                }}
              >
                Connecting {selectedWallet}...
              </h2>
              <p
                className="f-mono"
                style={{
                  fontSize: 11,
                  color: "var(--pit-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Please approve the connection in your wallet
              </p>
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {connState === "wrong-network" && (
            <div
              className="p-8 md:p-12"
              style={{
                background: "rgba(192, 57, 43, 0.05)",
                border: "1px solid rgba(192, 57, 43, 0.3)",
                textAlign: "center",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(192, 57, 43, 0.1)",
                  color: "#c0392b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 24,
                }}
              >
                !
              </div>
              <h2
                className="font-syne"
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  marginBottom: 12,
                  color: "#e74c3c",
                }}
              >
                Unsupported Network
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--pit-dim)",
                  marginBottom: 32,
                  maxWidth: 320,
                  margin: "0 auto 32px",
                }}
              >
                Your wallet is connected to an unsupported network. Please
                switch to Ethereum Mainnet to continue.
              </p>
              <button
                onClick={() => handleConnect(selectedWallet!)}
                className="f-mono t-colors"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "#c0392b",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 999,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Switch Network
              </button>
              <div style={{ marginTop: 24 }}>
                <button
                  onClick={() => setConnState("disconnected")}
                  className="f-mono"
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--pit-dim)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Disconnect
                </button>
              </div>
            </div>
          )}

          {connState === "error" && (
            <div
              className="p-8 md:p-12"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--pit-rule)",
                textAlign: "center",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--pit-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 20,
                }}
              >
                ✕
              </div>
              <h2
                className="font-syne"
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  marginBottom: 12,
                  color: "var(--pit-text)",
                }}
              >
                Unable to Connect
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--pit-dim)",
                  marginBottom: 32,
                  maxWidth: 320,
                  margin: "0 auto 32px",
                }}
              >
                The connection request was rejected or failed. Please check your
                wallet and try again.
              </p>
              <button
                onClick={() => handleConnect(selectedWallet!)}
                className="f-mono t-colors"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "var(--jade)",
                  color: "var(--jade-fg)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 999,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Try Again
              </button>
              <div style={{ marginTop: 24 }}>
                <button
                  onClick={() => setConnState("disconnected")}
                  className="f-mono"
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--pit-dim)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {connState === "connected" && (
            <div
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
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--pit)",
                    border: "1px solid var(--pit-rule)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {WALLETS.find((w) => w.name === selectedWallet)?.icon}
                </div>
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 4,
                      color: "var(--pit-text)",
                    }}
                  >
                    0x7A3F...92D1
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--jade)",
                      }}
                    />
                    <span
                      className="f-mono"
                      style={{
                        fontSize: 10,
                        color: "var(--pit-dim)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Ethereum Mainnet
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      color: "var(--pit-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}
                  >
                    Balance
                  </div>
                  <div
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      color: "var(--pit-text)",
                      fontWeight: 300,
                    }}
                  >
                    4.82 ETH
                  </div>
                </div>
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      color: "var(--pit-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}
                  >
                    Voting Power
                  </div>
                  <div
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      color: "var(--pit-text)",
                      fontWeight: 300,
                    }}
                  >
                    1,240
                  </div>
                </div>
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      color: "var(--pit-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}
                  >
                    Participation
                  </div>
                  <div
                    className="font-syne"
                    style={{
                      fontSize: 24,
                      color: "var(--pit-text)",
                      fontWeight: 300,
                    }}
                  >
                    87%
                  </div>
                </div>
                <div>
                  <div
                    className="f-mono"
                    style={{
                      fontSize: 9,
                      color: "var(--pit-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}
                  >
                    Status
                  </div>
                  <div
                    className="f-mono inline-flex items-center gap-1.5"
                    style={{
                      fontSize: 9,
                      padding: "5px 12px",
                      background: "transparent",
                      border: "1px solid var(--jade)",
                      color: "var(--jade)",
                      borderRadius: 999,
                      textTransform: "uppercase",
                    }}
                  >
                    Verified
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <button
                  onClick={() => navigate("/governance")}
                  className="f-mono t-colors"
                  style={{
                    width: "100%",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "16px",
                    background: "var(--jade)",
                    color: "var(--jade-fg)",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 999,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Continue to Origin
                </button>
                <button
                  onClick={() => setConnState("disconnected")}
                  className="f-mono t-colors"
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "transparent",
                    color: "var(--pit-dim)",
                    border: "1px solid var(--pit-rule)",
                    cursor: "pointer",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    borderRadius: 999,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--pit-dim)";
                    e.currentTarget.style.color = "var(--pit-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--pit-rule)";
                    e.currentTarget.style.color = "var(--pit-dim)";
                  }}
                >
                  Disconnect
                </button>
              </div>
            </div>
          )}

          {/* Hidden Dev Controls for easy state testing */}
          <div
            style={{
              marginTop: 60,
              paddingTop: 20,
              borderTop: "1px dashed var(--pit-rule)",
              opacity: 0.3,
              display: "flex",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {["disconnected", "wrong-network", "error", "connected"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => forceState(s as any)}
                  style={{ fontSize: 9, color: "var(--pit-dim)" }}
                >
                  {s}
                </button>
              ),
            )}
          </div>
        </div>
      </Parallax>

      {/* Footer */}
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}
