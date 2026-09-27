import { Eyebrow } from "@/components/ui";

export function SafetySection() {
  return (
    <section id="safety" className="safety-section">
      <div className="page-width safety-inner">
        <div className="safety-intro">
          <span className="safety-symbol" aria-hidden="true">
            ✳
          </span>
          <Eyebrow>YOUR NIGHT. YOUR CHOICE.</Eyebrow>
          <h2 className="font-heading">
            Good energy.
            <br />
            Clear boundaries.
          </h2>
          <p>
            Meeting new people should come with choices you understand. Here’s
            what we’re building around.
          </p>
        </div>
        <div className="safety-details">
          <div>
            <h3>You choose how to show up.</h3>
            <p>
              Opt into Squad or Vibe for each party. Use discovery controls to
              decide whether others can find your profile.
            </p>
          </div>
          <div>
            <h3>Your location stays yours.</h3>
            <p>
              Location helps surface nearby parties. Your precise location is
              never shown to other people.
            </p>
          </div>
          <div>
            <h3>A way to speak up.</h3>
            <p>
              Block and report from public profiles, and report posts on party
              timelines. Anonymous posts hide your name from other guests; the
              team can still review who posted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
