import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernanceOverview from "./governance/GovernanceOverview";
import UserGovernanceInfo from "./governance/UserGovernanceInfo";
import Proposals from "./governance/Proposals";
import VotingHistory from "./governance/VotingHistory";
import GovernanceRules from "./governance/GovernanceRules";
import Delegation from "./governance/Delegation";
import GovernanceCTA from "./governance/GovernanceCTA";
import Footer from "./landing/Footer";
import SEO from "@/components/SEO";

export default function Governance() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <SEO
        title="Governance"
        description="Participate in Origin's decentralized governance. View voting power, delegate tokens, and shape the future of community-driven funding."
        path="/governance"
      />
      <GovernanceOverview />
      <UserGovernanceInfo />
      <Proposals open={(id: string) => navigate(`/proposal/${id}`)} />
      <VotingHistory />
      <Delegation />
      <GovernanceRules />
      <GovernanceCTA />
      <Footer />
    </div>
  );
}
