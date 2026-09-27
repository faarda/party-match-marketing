import { Arrow, Brand } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="site-footer page-width">
      <Brand width={205} height={30} />
      <span>Made for the nights you’ll talk about.</span>
      <nav aria-label="Footer navigation">
        <a href="#safety">Safety & privacy</a>
        <a href="#faq">FAQs</a>
        <a href="#waitlist">
          Waitlist <Arrow diagonal />
        </a>
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Party Match</span>
        <span>COMING TO LAGOS · 18+</span>
        <a href="#">Back to top ↑</a>
      </div>
    </footer>
  );
}
