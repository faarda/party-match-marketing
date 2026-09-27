import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import { pageWidth } from "@/lib/styles";

export function SafetySection() {
  return (
    <section id="safety" className="pb-0 sm:pb-[55px]">
      <div
        className={cn(
          pageWidth,
          "grid grid-cols-1 gap-[29px] rounded-[6px] bg-[#1a181f] p-7 sm:grid-cols-2 sm:gap-[35px] sm:p-[34px] md:gap-[60px] md:p-[42px] lg:gap-[100px] lg:p-[58px]",
        )}
      >
        <div>
          <span
            className="mb-[13px] block text-[37px] text-pink sm:mb-[18px] sm:text-[44px]"
            aria-hidden="true"
          >
            ✳
          </span>
          <Eyebrow className="mb-4">YOUR NIGHT. YOUR CHOICE.</Eyebrow>
          <h2 className="font-heading text-[28px] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-[25px] md:text-[32px]">
            Good energy.
            <br />
            Clear boundaries.
          </h2>
          <p className="mt-5 max-w-none text-[13px] text-muted sm:max-w-80">
            Meeting new people should come with choices you understand. Here’s
            what we’re building around.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 sm:gap-[25px]">
          <div>
            <h3 className="text-sm font-semibold sm:text-[15px]">
              You choose how to show up.
            </h3>
            <p className="mt-2 text-xs text-muted">
              Opt into Squad or Vibe for each party. Use discovery controls to
              decide whether others can find your profile.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold sm:text-[15px]">
              Your location stays yours.
            </h3>
            <p className="mt-2 text-xs text-muted">
              Location helps surface nearby parties. Your precise location is
              never shown to other people.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold sm:text-[15px]">
              A way to speak up.
            </h3>
            <p className="mt-2 text-xs text-muted">
              Block and report from public profiles, and report posts on party
              timelines. Anonymous posts hide your name from other guests; the
              team can still review who posted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
