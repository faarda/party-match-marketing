import { DiscoverSection } from "@/components/discover-section";
import { FaqSection } from "@/components/faq-section";
import { Hero, Ticker } from "@/components/hero";
import { HostsSection } from "@/components/hosts-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProblemSection } from "@/components/problem-section";
import { SafetySection } from "@/components/safety-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplitSection } from "@/components/split-section";
import { SquadSection } from "@/components/squad-section";
import { VibeSection } from "@/components/vibe-section";
import { WaitlistSection } from "@/components/waitlist-section";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Ticker />
        <ProblemSection />
        <DiscoverSection />
        <SquadSection />
        <VibeSection />
        <SplitSection />
        <HowItWorksSection />
        <HostsSection />
        <SafetySection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </>
  );
}
