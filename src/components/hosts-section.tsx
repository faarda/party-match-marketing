import { Eyebrow, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import { pageWidth, sectionSpace } from "@/lib/styles";

export function HostsSection() {
  return (
    <section id="hosts" className={sectionSpace}>
      <div
        className={cn(
          pageWidth,
          "grid grid-cols-1 gap-[27px] sm:grid-cols-2 sm:gap-[45px] md:gap-[50px] lg:gap-[100px]",
        )}
      >
        <div>
          <Eyebrow>FOR THE PEOPLE WHO MAKE THE NIGHT</Eyebrow>
          <h2 className="font-heading text-[41px] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-[37px] md:text-[clamp(35px,4vw,58px)]">
            You bring
            <br />
            the <span className="text-pink">party.</span>
          </h2>
        </div>
        <div className="max-w-[500px] pt-0 sm:pt-[38px]">
          <p className="text-[19px] leading-normal font-medium md:text-[21px]">
            From your friend’s birthday to the city’s regular Friday spot.
            There’s room for your kind of night.
          </p>
          <p className="mt-5 text-sm text-muted">
            Anyone can create an event — ticketed or not. One-off nights or a
            weekly residency, with each date carrying its own itinerary.
          </p>
          <TextLink href="#waitlist">Be part of what’s coming</TextLink>
        </div>
      </div>
    </section>
  );
}
