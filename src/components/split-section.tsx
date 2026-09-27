import { Eyebrow } from "@/components/ui";

const contributedMembers = ["Temi", "Dami", "You"];

export function SplitSection() {
  return (
    <section id="split" className="split-section section-space">
      <div className="page-width feature-grid">
        <div className="feature-copy">
          <Eyebrow>
            <span className="section-number">04</span> SPLIT THE NIGHT
          </Eyebrow>
          <h2 className="font-heading">
            Big plans.
            <br />
            <span className="lime-text">Shared costs.</span>
          </h2>
          <p className="lead-copy">
            The table is for everyone.
            <br />
            The money chase shouldn’t be for one person.
          </p>
          <p>
            We’re building group pools with a dedicated account for each
            collection, so everyone can see the target and who’s chipped in.
          </p>
          <ul className="feature-list lime-checks">
            <li>Contribute from a linked bank account or your wallet</li>
            <li>Keep the plan moving in your pool’s group chat</li>
            <li>Missed deadline? Contributions return to your wallet</li>
          </ul>
        </div>
        <PoolArt />
      </div>
    </section>
  );
}

function PoolArt() {
  return (
    <figure className="pool-art feature-art">
      <figcaption className="preview-label">
        SHARED COSTS, MADE CLEAR · EXAMPLE POOL
      </figcaption>
      <div className="pool-card">
        <div className="pool-card-top">
          <span>THE ROOFTOP SQUAD</span>
          <span aria-hidden="true">↗</span>
        </div>
        <h3>A table for the crew.</h3>
        <p className="pool-amount">
          ₦120,000 <span>/ ₦160,000</span>
        </p>
        <div className="pool-progress">
          <span />
        </div>
        <div className="pool-progress-label">
          <span>3 of 4 shares in</span>
          <span>75%</span>
        </div>
        <div className="pool-members">
          {contributedMembers.map((name) => (
            <div key={name}>
              <span>
                <i>{name[0]}</i>
                {name}
              </span>
              <span>
                ₦40,000 <b>✓</b>
              </span>
            </div>
          ))}
          <div className="pool-pending">
            <span>
              <i>+</i>One more share
            </span>
            <span>₦40,000</span>
          </div>
        </div>
        <div className="pool-note">
          <span aria-hidden="true">↳</span> One shared plan. Everyone’s
          contribution visible.
        </div>
      </div>
      <span className="pool-sticker">
        MORE MEMORIES.
        <br />
        LESS “SEND YOUR OWN.”
      </span>
    </figure>
  );
}
