import { Arrow, Eyebrow, Star, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  featureCopy,
  featureGrid,
  featureHeading,
  featureLead,
  featureList,
  pageWidth,
  previewLabel,
  sectionNumber,
  sectionSpace,
} from "@/lib/styles";

export function DiscoverSection() {
  return (
    <section id="discover" className={sectionSpace}>
      <div className={cn(pageWidth, featureGrid)}>
        <div className={featureCopy}>
          <Eyebrow>
            <span className={sectionNumber}>01</span> DISCOVER
          </Eyebrow>
          <h2 className={featureHeading}>
            Your kind
            <br />
            of <span className="text-pink">outside.</span>
          </h2>
          <p className={featureLead}>
            Explore what’s happening now, today or next weekend. Pick your party
            type and look around a location
          </p>
          <ul className={cn(featureList, "[&>li]:before:text-pink")}>
            <li>Club nights, day parties, beach hangs and more</li>
            <li>See who’s going and mark your interest</li>
            <li>Get a feel for the night through its timeline and reviews</li>
          </ul>
          <TextLink href="#waitlist">Find your next night</TextLink>
        </div>
        <DiscoveryArt />
      </div>
    </section>
  );
}

function DiscoveryArt() {
  return (
    <figure className="relative mx-[7px] mt-2.5 mb-0.5 min-w-0 rotate-2 rounded-lg border border-[#343139] bg-[#15141b] p-[22px] sm:mx-0 sm:my-0 sm:p-4 md:p-6">
      <figcaption className={previewLabel}>
        A LITTLE LOOK AT WHAT’S COMING · ILLUSTRATION
      </figcaption>
      <div className="mt-6 flex items-center justify-between gap-[5px] text-lg font-semibold sm:gap-4 sm:text-sm md:text-[19px]">
        <span>
          Out in Lagos{" "}
          <span className="ml-1 text-pink" aria-hidden="true">
            ↗
          </span>
        </span>
        <span className="rounded-[20px] border border-[#48434c] px-[9px] py-[7px] text-[8px] whitespace-nowrap sm:px-1.5 sm:py-1.5 sm:text-[7px] md:px-3 md:py-2 md:text-[9px]">
          ⌖ Lekki, Lagos
        </span>
      </div>
      <div className="mt-5 flex gap-1.5 text-[9px] text-[#b6b0bb] sm:gap-[3px] sm:text-[8px] md:gap-2 md:text-[9px]">
        <span className="rounded-[20px] bg-pink px-2.5 py-[7px] font-bold text-night sm:px-1.5 md:px-3">
          Tonight
        </span>
        <span className="rounded-[20px] px-2.5 py-[7px] sm:px-1.5 md:px-3">
          This weekend
        </span>
        <span className="rounded-[20px] px-2.5 py-[7px] sm:px-1.5 md:px-3">
          Upcoming
        </span>
      </div>
      <div className="relative mt-[22px] pr-[37px]">
        <div className="relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[3px] bg-[#e8543e] p-[17px] text-[#311327] sm:aspect-[0.86] sm:p-3.5 md:aspect-[1.16] md:p-5">
          <div className="flex items-center justify-between text-[7px] font-[750] tracking-[0.07em] sm:text-[6px] md:text-[8px]">
            <span>THE NIGHT IS YOURS</span>
            <span className="text-[29px]">✳</span>
          </div>
          <div className="absolute top-[-20px] right-[-56px] -z-[1] size-[220px] rounded-full border-[35px] border-[#fbc67d] opacity-75 shadow-[0_0_0_19px_#e8543e,0_0_0_39px_#fbc67d]" />
          <strong className="font-heading text-[37px] leading-[1.05] tracking-[-0.08em] sm:text-3xl md:text-[clamp(32px,3.8vw,55px)]">
            AFTER
            <br />
            HOURS
            <span className="mt-2 block font-sans text-lg font-medium tracking-[-0.04em]">
              on the rooftop.
            </span>
          </strong>
          <div className="flex items-center justify-between text-[7px] font-[750] tracking-[0.07em] sm:text-[6px] md:text-[8px]">
            <span>ROOFTOP · LAGOS</span>
            <span>09 PM — LATE</span>
          </div>
        </div>
        <div className="absolute inset-y-2.5 right-0 left-1/2 flex rotate-7 flex-col justify-between bg-[#c7b3ed] p-5 text-2xl leading-none font-extrabold text-[#321843]">
          <span>
            THE
            <br />
            WEEKEND
            <br />
            IS CALLING.
          </span>
          <Star className="w-[95px]" />
        </div>
      </div>
      <div className="mt-[25px] flex items-center justify-between gap-3">
        <div>
          <strong className="block text-[11px] sm:text-[10px] md:text-xs">
            One city. So many ways to go out.
          </strong>
          <span className="text-[9px] text-[#aaa5b0] sm:text-[8px] md:text-[10px]">
            Find the one with your name on it.
          </span>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#48434c]">
          <Arrow diagonal />
        </span>
      </div>
    </figure>
  );
}
