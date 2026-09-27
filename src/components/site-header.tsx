import { Brand, WaitlistLink } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand width={220} height={33} />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#discover">The experience</a>
        <a href="#how-it-works">How it works</a>
        <a href="#hosts">For hosts</a>
      </nav>
      <WaitlistLink className="header-cta" />
    </header>
  );
}
