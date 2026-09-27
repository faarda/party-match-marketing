import { Eyebrow, Star } from "@/components/ui";

const steps = [
  [
    "Find your night",
    "Pick a party by the place, the day and the kind of energy you’re after.",
  ],
  [
    "Find your people",
    "RSVP, choose Squad or Vibe, and connect with others going to the same party.",
  ],
  [
    "Make it happen",
    "Chat through the plan, pool shared costs and give the group chat a destination.",
  ],
  [
    "Keep the story going",
    "Join the party’s conversation. Afterwards, share what you thought of the crowd, music, value and security.",
  ],
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="how-section light-section section-space"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Eyebrow>FROM “ANY PLANS?” TO “I’M OUTSIDE”</Eyebrow>
            <h2 className="font-heading">
              A good night.
              <br />A simple plan.
            </h2>
          </div>
          <Star className="how-star" />
        </div>
        <ol className="steps">
          {steps.map(([title, copy], index) => (
            <li key={title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
