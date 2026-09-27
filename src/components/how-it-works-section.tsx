import { Eyebrow, Star } from "@/components/ui";
import { cn } from "@/lib/cn";
import { lightSection, pageWidth, sectionSpace } from "@/lib/styles";

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
    <section id="how-it-works" className={cn(lightSection, sectionSpace)}>
      <div className={pageWidth}>
        <div className="flex items-center justify-between">
          <div>
            <Eyebrow>FROM “ANY PLANS?” TO “I’M OUTSIDE”</Eyebrow>
            <h2 className="font-heading text-[35px] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-[clamp(35px,4vw,58px)]">
              A good night.
              <br />A simple plan.
            </h2>
          </div>
          <Star className="mb-[7px] w-[45px] self-end text-[#db2e6c] sm:mb-0 sm:w-[90px] sm:self-auto md:mr-5" />
        </div>
        <ol className="mt-9 grid list-none grid-cols-2 gap-7 p-0 sm:mt-[60px] sm:gap-[35px] md:grid-cols-4 md:gap-0">
          {steps.map(([title, copy], index) => (
            <li
              key={title}
              className="border-t border-[#c9c5c3] pt-[18px] pr-2.5 sm:pt-[25px] sm:pr-[30px]"
            >
              <span className="text-[11px] text-[#b62a5d]">0{index + 1}</span>
              <h3 className="mt-5 text-[15px] font-[650] tracking-[-0.03em] sm:mt-[30px] sm:text-lg">
                {title}
              </h3>
              <p className="mt-[13px] max-w-none text-xs text-[#656069] sm:text-[13px] md:max-w-[240px]">
                {copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
