import { Arrow, Eyebrow, Star } from "@/components/ui";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="waitlist-section"
      aria-labelledby="waitlist-title"
    >
      <div className="page-width waitlist-inner">
        <div className="waitlist-copy">
          <Eyebrow>
            <span className="status-dot" /> LAGOS, YOU’RE FIRST.
          </Eyebrow>
          <h2 id="waitlist-title" className="font-heading">
            Your next
            <br />
            great night
            <br />
            starts <span>here.</span>
          </h2>
          <p>
            New places. Familiar energy. People you’re glad you met.
            <br />
            Party Match is coming to Lagos.
          </p>
        </div>
        <div className="waitlist-form-area">
          <Star className="waitlist-star" />
          <h3>Get ready to get outside.</h3>
          <p id="signup-status" className="signup-status">
            Signups opening soon.
          </p>
          <p id="signup-description">
            We’re getting the guest list ready. Check back when registration
            opens to leave your email.
          </p>
          <form
            aria-label="Waitlist signup preview"
            aria-describedby="signup-status signup-description signup-note"
          >
            <label htmlFor="waitlist-email">Your email address</label>
            <div className="form-row">
              <input
                id="waitlist-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                disabled
                autoComplete="email"
              />
              <button
                type="submit"
                disabled
                aria-label="Join waitlist — signups opening soon"
              >
                <Arrow />
              </button>
            </div>
            <p id="signup-note">
              This form is a preview. Email addresses aren’t collected or saved.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
