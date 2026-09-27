import { Eyebrow, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import { lightSection, pageWidth, sectionSpace } from "@/lib/styles";

export function ProblemSection() {
  return (
    <section id="the-problem" className={cn(lightSection, sectionSpace)}>
      <div
        className={cn(
          pageWidth,
          "grid grid-cols-1 items-center gap-[38px] sm:grid-cols-2 sm:gap-10 md:gap-[50px] lg:gap-[100px]",
        )}
      >
        <div>
          <Eyebrow>THE GROUP CHAT DESERVES BETTER</Eyebrow>
          <h2 className="font-heading text-[clamp(35px,8.7vw,49px)] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-[37px] md:text-[clamp(39px,4.3vw,64px)]">
            Lagos has
            <br />
            the parties.
            <br className="hidden sm:inline" />
            <span className="block text-[#ce235f] sm:inline">
              Let’s fix
              <br className="hidden sm:inline" /> the planning.
            </span>
          </h2>
        </div>
        <div className="max-w-[490px] pt-0 sm:pt-6">
          <p className="text-[20px] leading-normal font-medium sm:text-lg md:text-[21px]">
            The flyer’s on Instagram. The plan’s on WhatsApp. Your friends are
            still saying “we’ll see.”
          </p>
          <p className="mt-[22px] text-sm text-[#626169] sm:text-[15px]">
            And somehow, one person always ends up chasing the money. A good
            night shouldn’t take this much work to get started.
          </p>
          <div className="mt-6 h-0.5 w-[65px] bg-[#d4d0ce] sm:mt-[30px]" />
          <p className="mt-[22px] text-sm text-[#626169] sm:text-[15px]">
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
