import { useState } from "react";
import TreasuryOverview from "./treasury/TreasuryOverview";
import TreasuryActivity from "./treasury/TreasuryActivity";
import FundingCommitments from "./treasury/FundingCommitments";
import TreasuryTransactions from "./treasury/TreasuryTransactions";
import TreasuryTransparency from "./treasury/TreasuryTransparency";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

export default function Treasury() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <SEO
        title="Treasury"
        description="Track Origin's decentralized treasury in real-time. View balances, allocations, and transaction history across the protocol."
        path="/treasury"
      />
      <TreasuryOverview />
      <TreasuryActivity />
      <FundingCommitments />
      <TreasuryTransactions />
      <TreasuryTransparency />
      <Footer />
    </div>
  );
}
