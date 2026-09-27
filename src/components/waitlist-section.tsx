import { Arrow, Eyebrow, Star, StatusDot } from "@/components/ui";
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
          <p id="signup-status" className="mt-[17px] text-[13px] font-[650]">
            Signups opening soon.
          </p>
          <p
            id="signup-description"
            className="mt-1.5 max-w-none text-[13px] text-[#644751] md:max-w-[330px]"
          >
            We’re getting the guest list ready. Check back when registration
            opens to leave your email.
          </p>
          <form
            className="mt-[25px]"
            aria-label="Waitlist signup preview"
            aria-describedby="signup-status signup-description signup-note"
          >
            <label
              htmlFor="waitlist-email"
              className="mb-[9px] block text-[11px] font-semibold"
            >
              Your email address
            </label>
            <div className="flex min-h-[54px] rounded border border-[#b890a0] bg-[#f8dbe5] p-[5px]">
              <input
                id="waitlist-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                disabled
                autoComplete="email"
                className="min-w-0 flex-1 cursor-not-allowed border-0 bg-transparent p-[9px] text-[13px] text-[#775864] opacity-100 placeholder:text-[#806773] placeholder:opacity-100"
              />
              <button
                type="submit"
                disabled
                aria-label="Join waitlist — signups opening soon"
                className="grid w-[46px] shrink-0 cursor-not-allowed place-items-center rounded-[3px] border-0 bg-[#a77d8d] text-[#f8e6ee]"
              >
                <Arrow />
              </button>
            </div>
            <p id="signup-note" className="mt-3 text-[10px] text-[#644751]">
              This form is a preview. Email addresses aren’t collected or saved.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
