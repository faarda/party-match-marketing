import { Eyebrow, Star, StatusDot } from "@/components/ui";
import { WaitlistTeaserForm } from "@/components/waitlist-cta";
import { cn } from "@/lib/cn";
import { pageWidth } from "@/lib/styles";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="bg-[#f5c7d8] py-[61px] text-[#24111e] scheme-light md:py-[95px]"
      aria-labelledby="waitlist-title"
    >
      <div
        className={cn(
          pageWidth,
          "grid grid-cols-1 items-center gap-[35px] sm:grid-cols-[1.15fr_1fr] sm:gap-10 md:gap-[60px] lg:gap-[110px]",
        )}
      >
        <div>
          <Eyebrow>
            <StatusDot /> LAGOS, YOU’RE FIRST.
          </Eyebrow>
          <h2
            id="waitlist-title"
            className="font-heading text-[clamp(38px,12vw,48px)] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-[43px] md:text-[clamp(40px,5.3vw,77px)]"
          >
            Your next
            <br />
            great night
            <br />
            starts <span className="text-[#b52459]">here.</span>
          </h2>
          <p className="mt-6 text-[13px] sm:mt-[30px] sm:text-sm">
            New places. Familiar energy. People you’re glad you met.
            <br />
            Party Match is coming to Lagos.
          </p>
        </div>
        <div className="border-t border-[#d7a8bb] pt-[29px] sm:border-0 sm:pt-2.5">
          <Star className="mb-[35px] hidden w-[55px] text-[#b52459] sm:block" />
          <h3 className="text-[23px] font-semibold tracking-[-0.045em] sm:text-xl md:text-[23px]">
            Get ready to get outside.
          </h3>
          <p
            id="signup-description"
            className="mt-[17px] max-w-none text-[13px] text-[#644751] md:max-w-[330px]"
          >
            Leave your email and we’ll save you a spot. Lagos is first.
          </p>
          <WaitlistTeaserForm />
        </div>
      </div>
    </section>
  );
}
