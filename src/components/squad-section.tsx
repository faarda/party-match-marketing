import { Eyebrow, Star, TextLink } from "@/components/ui";

export function SquadSection() {
  return (
    <section id="squad" className="squad-section section-space">
      <div className="page-width feature-grid reverse-feature">
        <SquadArt />
        <div className="feature-copy">
          <Eyebrow>
            <span className="section-number">02</span> SQUAD
          </Eyebrow>
          <h2 className="font-heading">
            Your friends
            <br />
            can’t make it.
            <br />
            <span className="pink-text">Your night can.</span>
          </h2>
          <p className="lead-copy">
            Find people who already have the same party in mind.
          </p>
          <p>
            Opt into Squad for a party, connect through mutual likes and start a
            conversation. Make a plan, find people to share a table with or talk
            through how you’ll get there.
          </p>
          <p>
            Every connection starts with somewhere you both want to be. That’s
            one less awkward introduction.
          </p>
          <TextLink href="#how-it-works">
            See how a night comes together
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function SquadArt() {
  return (
    <figure className="squad-art feature-art">
      <figcaption className="preview-label">
        SQUAD ENERGY · ILLUSTRATIVE CONVERSATION
      </figcaption>
      <div className="squad-heading">
        <span className="font-heading">
          Same plan.
          <br />
          New people.
        </span>
        <Star />
      </div>
      <div className="chat-bubble chat-one">
        <span className="chat-avatar">T</span>
        <div>
          <small>TEMI</small>
          <p>Who’s up for a rooftop night? 👀</p>
        </div>
      </div>
      <div className="chat-bubble chat-two">
        <span className="chat-avatar">D</span>
        <div>
          <small>DAMI</small>
          <p>I’m in. Let’s get a table.</p>
        </div>
      </div>
      <div className="chat-bubble chat-three">
        <span className="chat-avatar">Y</span>
        <div>
          <small>YOU</small>
          <p>Okay, we’re actually doing this. ✨</p>
        </div>
      </div>
      <div className="squad-footer">
        <span className="squad-line" />
        <span>THE GROUP CHAT MADE IT OUTSIDE.</span>
      </div>
    </figure>
  );
}
