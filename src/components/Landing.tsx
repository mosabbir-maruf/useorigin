import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Hero from "./landing/Hero";
import Ticker from "./landing/Ticker";
import Features from "./landing/Features";
import HowItWorks from "./landing/HowItWorks";
import Carousel from "./landing/Carousel";
import Governance from "./landing/Governance";
import TreasuryTable from "./landing/TreasuryTable";
import Testimonials from "./landing/Testimonials";
import FAQ from "./landing/FAQ";
import CTA from "./landing/CTA";
import Footer from "./landing/Footer";

export default function Landing() {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <SEO />
      <Hero />

      <div ref={contentRef}>
        <Features />
        <HowItWorks />
        <Carousel open={(id: string) => navigate(`/proposal/${id}`)} />
        <Governance />
        <Ticker />
        <TreasuryTable />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
