import { Arrow, Eyebrow, Star, TextLink } from "@/components/ui";

export function DiscoverSection() {
  return (
    <section id="discover" className="feature-section section-space">
      <div className="page-width feature-grid">
        <div className="feature-copy">
          <Eyebrow>
            <span className="section-number">01</span> DISCOVER
          </Eyebrow>
          <h2 className="font-heading">
            Your kind
            <br />
            of <span className="pink-text">outside.</span>
          </h2>
          <p className="lead-copy">
            From a rooftop link-up to the last song at the club. Find a night
            that feels like you.
          </p>
          <p>
            Explore what’s happening now, today or next weekend. Pick your party
            type and look around your current location—or the neighbourhood
            you’re heading to.
          </p>
          <ul className="feature-list">
            <li>Club nights, day parties, beach hangs and more</li>
            <li>See who’s going and mark your interest</li>
            <li>Get a feel for the night through its timeline and reviews</li>
          </ul>
          <TextLink href="#waitlist">Find your next night</TextLink>
        </div>
        <DiscoveryArt />
      </div>
    </section>
  );
}

function DiscoveryArt() {
  return (
    <figure className="discovery-art feature-art">
      <figcaption className="preview-label">
        A LITTLE LOOK AT WHAT’S COMING · ILLUSTRATION
      </figcaption>
      <div className="discovery-top">
        <span>
          Out in Lagos <span aria-hidden="true">↗</span>
        </span>
        <span className="location-tag">⌖ Lekki, Lagos</span>
      </div>
      <div className="art-tabs">
        <span className="active">Tonight</span>
        <span>This weekend</span>
        <span>Upcoming</span>
      </div>
      <div className="poster-stack">
        <div className="party-poster">
          <div className="poster-top">
            <span>THE NIGHT IS YOURS</span>
            <span>✳</span>
          </div>
          <div className="poster-orbits" />
          <strong className="font-heading">
            AFTER
            <br />
            HOURS<span>on the rooftop.</span>
          </strong>
          <div className="poster-foot">
            <span>ROOFTOP · LAGOS</span>
            <span>09 PM — LATE</span>
          </div>
        </div>
        <div className="mini-poster">
          <span>
            THE
            <br />
            WEEKEND
            <br />
            IS CALLING.
          </span>
          <Star />
        </div>
      </div>
      <div className="discovery-caption">
        <div>
          <strong>One city. So many ways to go out.</strong>
          <span>Find the one with your name on it.</span>
        </div>
        <span className="circle-arrow">
          <Arrow diagonal />
        </span>
      </div>
    </figure>
  );
}
