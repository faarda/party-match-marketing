import Image from "next/image";
import { Eyebrow, Star, WaitlistLink } from "@/components/ui";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero-photo"
        src="/images/party-match-hero.webp"
        alt="Four friends laughing together outside, drinks in hand."
        fill
        preload
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <Eyebrow>
          <span className="status-dot" /> COMING TO LAGOS · 18+
        </Eyebrow>
        <h1 id="hero-title" className="font-heading">
          Find the party.
          <br />
          Find your <span>people.</span>
        </h1>
        <p className="hero-description">
          The night starts with a plan.
          <br />
          The best part is who you find along the way.
        </p>
        <p className="hero-detail">
          Discover what’s on, link up with a squad, catch a vibe and split the
          night. All around the same party.
        </p>
        <div className="hero-action">
          <WaitlistLink />
          <span>
            Good nights are coming.
            <br /> Signups opening soon.
          </span>
        </div>
      </div>
      <div className="hero-bottom page-width">
        <span>LAGOS, THIS ONE’S FOR YOU.</span>
        <a href="#the-problem">
          Meet your next night out <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-sticker" aria-hidden="true">
        <Star />
        <span>
          OUTSIDE
          <br />
          TOGETHER.
        </span>
      </div>
    </section>
  );
}

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <span>GOOD MUSIC</span>
      <Star />
      <span>YOUR PEOPLE</span>
      <Star />
      <span>ONE MORE NIGHT</span>
      <Star />
      <span>LESS “WHO’S COMING?”</span>
      <Star />
    </div>
  );
}
