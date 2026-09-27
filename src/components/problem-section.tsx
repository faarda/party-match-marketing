import { Eyebrow, TextLink } from "@/components/ui";

export function ProblemSection() {
  return (
    <section
      id="the-problem"
      className="problem-section light-section section-space"
    >
      <div className="page-width problem-grid">
        <div>
          <Eyebrow>THE GROUP CHAT DESERVES BETTER</Eyebrow>
          <h2 className="font-heading">
            Lagos has
            <br />
            the parties.
            <br />
            <span className="pink-text">
              Let’s fix
              <br /> the planning.
            </span>
          </h2>
        </div>
        <div className="problem-right">
          <p className="lead-copy">
            The flyer’s on Instagram. The plan’s on WhatsApp. Your friends are
            still saying “we’ll see.”
          </p>
          <p>
            And somehow, one person always ends up chasing the money. A good
            night shouldn’t take this much work to get started.
          </p>
          <div className="problem-rule" />
          <p>
            We’re bringing the whole night together: the place, the people, the
            conversation and the shared costs. So “we should go out” has
            somewhere to go.
          </p>
          <TextLink href="#discover">Here’s how we’ll get you outside</TextLink>
        </div>
      </div>
    </section>
  );
}
