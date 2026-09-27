import { Eyebrow, Star } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  featureCopy,
  featureGrid,
  featureHeading,
  featureLead,
  pageWidth,
  sectionNumber,
  sectionSpace,
} from "@/lib/styles";

export function VibeSection() {
  return (
    <section
      id="vibe"
      className={cn(sectionSpace, "overflow-hidden bg-pink text-[#21101b]")}
    >
      <div className={cn(pageWidth, featureGrid, "gap-5 sm:gap-9")}>
        <div className={featureCopy}>
          <Eyebrow>
            <span className={cn(sectionNumber, "border-[#21101b]/[0.38]")}>
              03
            </span>{" "}
            VIBE
          </Eyebrow>
          <h2 className={featureHeading}>
            Same party.
            <br />A little
            <br />
            <span className="text-white">chemistry.</span>
          </h2>
          <p className={cn(featureLead, "text-[#351124]")}>
            Maybe you came for the music.
            <br />
            Maybe you’ll meet someone worth staying for.
          </p>
          <p className="mt-[17px] text-sm text-[#351124] sm:text-xs md:text-sm">
            Vibe is for singles open to a connection at a specific party. Choose
            it when you RSVP, see other people who’ve opted in, and let a mutual
            like start the conversation.
          </p>
          <p className="mt-[17px] text-sm text-[#351124] sm:text-xs md:text-sm">
            Your choice, party by party. Go with Squad, Vibe or a little of
            both.
          </p>
        </div>
        <div
          className="relative mx-auto min-h-[370px] w-full max-w-[390px] sm:mx-0 sm:min-h-[390px] sm:max-w-none md:min-h-[460px]"
          aria-hidden="true"
        >
          <div className="absolute top-8 left-[9%] h-[265px] w-[190px] -rotate-[28deg] rounded-full border-2 border-[#351124] bg-[#ee3473] sm:top-[58px] sm:h-[250px] sm:w-40 md:h-[290px] md:w-[210px] lg:h-[330px] lg:w-[250px]" />
          <div className="absolute top-8 right-[9%] h-[265px] w-[190px] rotate-[28deg] rounded-full border-2 border-[#351124] bg-[#ff88b044] sm:top-[58px] sm:h-[250px] sm:w-40 md:h-[290px] md:w-[210px] lg:h-[330px] lg:w-[250px]" />
          <div className="absolute top-[90px] left-1/2 -translate-x-1/2 -rotate-[9deg] text-[140px] leading-none text-[#351124] sm:top-[118px] sm:text-[120px] md:top-[125px] md:text-[150px]">
            ♡
          </div>
          <span className="absolute top-[70px] left-0 -rotate-10 border border-[#351124] bg-[#fbeae5] px-4 py-3 text-[10px] font-bold tracking-[0.07em] shadow-[5px_5px_0_#351124] sm:px-[11px] sm:py-[11px] sm:text-[9px] md:top-[92px] md:px-[21px] md:py-3.5 md:text-xs">
            SAME PLACE
          </span>
          <span className="absolute right-0 bottom-[54px] rotate-7 border border-[#351124] bg-[#fbeae5] px-4 py-3 text-[10px] font-bold tracking-[0.07em] shadow-[5px_5px_0_#351124] sm:bottom-[73px] sm:px-[11px] sm:py-[11px] sm:text-[9px] md:bottom-20 md:px-[21px] md:py-3.5 md:text-xs">
            SAME ENERGY
          </span>
          <Star className="absolute top-0 right-[11%] w-[49px] sm:top-[18px] sm:w-[60px]" />
          <span className="absolute bottom-0 block w-full text-center text-[8px] tracking-[0.12em]">
            A CONNECTION WITH A PLACE TO START.
          </span>
        </div>
      </div>
    </section>
  );
}
