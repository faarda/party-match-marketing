import { DiscoverSection } from "@/components/discover-section";
import { FaqSection } from "@/components/faq-section";
import { Hero, Ticker } from "@/components/hero";
import { HostsSection } from "@/components/hosts-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProblemSection } from "@/components/problem-section";
import { Reveal } from "@/components/reveal";
import { SafetySection } from "@/components/safety-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplitSection } from "@/components/split-section";
import { SquadSection } from "@/components/squad-section";
import { TimelineSection } from "@/components/timeline-section";
import { VibeSection } from "@/components/vibe-section";
import { WaitlistProvider } from "@/components/waitlist-modal";
import { WaitlistSection } from "@/components/waitlist-section";

export default function Home() {
  return (
    <WaitlistProvider>
      <a
        href="#main"
        className="fixed top-[-100px] left-5 z-50 bg-white px-[22px] py-3.5 text-night focus:top-5"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Reveal>
          <Ticker />
        </Reveal>
        <ProblemSection />
        <Reveal>
          <DiscoverSection />
        </Reveal>
        <Reveal>
          <SquadSection />
        </Reveal>
        <Reveal>
          <VibeSection />
        </Reveal>
        <Reveal>
          <SplitSection />
        </Reveal>
        <Reveal>
          <TimelineSection />
        </Reveal>
        <Reveal>
          <HowItWorksSection />
        </Reveal>
        <Reveal>
          <HostsSection />
        </Reveal>
        <Reveal>
          <SafetySection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <WaitlistSection />
        </Reveal>
      </main>
      <Reveal>
        <SiteFooter />
      </Reveal>
    </WaitlistProvider>
  );
}
