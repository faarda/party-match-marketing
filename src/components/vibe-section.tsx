import { Eyebrow, Star } from "@/components/ui";

export function VibeSection() {
  return (
    <section id="vibe" className="vibe-section section-space">
      <div className="page-width feature-grid">
        <div className="feature-copy">
          <Eyebrow>
            <span className="section-number">03</span> VIBE
          </Eyebrow>
          <h2 className="font-heading">
            Same party.
            <br />A little
            <br />
            <span className="vibe-outline">chemistry.</span>
          </h2>
          <p className="lead-copy">
            Maybe you came for the music.
            <br />
            Maybe you’ll meet someone worth staying for.
          </p>
          <p>
            Vibe is for singles open to a connection at a specific party. Choose
            it when you RSVP, see other people who’ve opted in, and let a mutual
            like start the conversation.
          </p>
          <p>
            Your choice, party by party. Go with Squad, Vibe or a little of
            both.
          </p>
        </div>
        <div className="vibe-art" aria-hidden="true">
          <div className="vibe-orbit orbit-one" />
          <div className="vibe-orbit orbit-two" />
          <div className="vibe-heart">♡</div>
          <span className="vibe-tag tag-one">SAME PLACE</span>
          <span className="vibe-tag tag-two">SAME ENERGY</span>
          <Star className="vibe-star" />
          <span className="vibe-small">
            A CONNECTION WITH A PLACE TO START.
          </span>
        </div>
      </div>
    </section>
  );
}
