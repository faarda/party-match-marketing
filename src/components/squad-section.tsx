import { Eyebrow, Star, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  featureBody,
  featureCopy,
  featureGrid,
  featureHeading,
  featureLead,
  pageWidth,
  previewLabel,
  sectionNumber,
  sectionSpace,
} from "@/lib/styles";

export function SquadSection() {
  return (
    <section
      id="squad"
      className={cn(sectionSpace, "bg-[#18151c]")}
    >
      <div className={cn(pageWidth, featureGrid)}>
        <SquadArt />
        <div className={cn(featureCopy, "row-start-1 sm:row-auto")}>
          <Eyebrow>
            <span className={sectionNumber}>02</span> SQUAD
          </Eyebrow>
          <h2 className={featureHeading}>
            Your friends
            <br />
            can’t make it?
            <br />
            <span className="text-pink">The Squad can</span>
          </h2>
          <p className={featureLead}>
            Find people who already have the same party in mind.
          </p>
          <p className={featureBody}>
            Opt into Squad for a party, connect through mutual likes and start a
            conversation. Make a plan, find people to share a table with or talk
            through how you’ll get there.
          </p>
          <p className={featureBody}>
            Every connection starts with somewhere you both want to be. That’s
            one less awkward introduction.
          </p>
          <TextLink href="#how-it-works">
            See how a night comes together
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function SquadArt() {
  return (
    <figure className="relative mx-[7px] mt-2.5 mb-0.5 min-h-[440px] min-w-0 -rotate-2 rounded-[5px] bg-[#e9e2ec] p-[25px] text-[#1c1324] sm:mx-0 sm:my-0 sm:min-h-[460px] sm:p-5 md:min-h-[480px] md:p-6 lg:p-8">
      <figcaption className={cn(previewLabel, "text-[#695d70]")}>
        SQUAD ENERGY · ILLUSTRATIVE CONVERSATION
      </figcaption>
      <div className="mt-[26px] flex items-start justify-between text-[28px] leading-[1.25] font-[650] tracking-[-0.045em] sm:text-[21px] md:text-2xl lg:text-[29px]">
        <span className="font-heading">
          Same plan.
          <br />
          New people.
        </span>
        <Star className="w-12 rotate-[10deg] text-[#b23e79] sm:w-10 md:w-[57px]" />
      </div>
      <div className="mt-[34px] flex w-fit max-w-full items-center gap-2.5 rounded-[10px_10px_10px_0] bg-white px-3 py-3 shadow-[0_5px_10px_#3b153509] sm:gap-2 md:gap-[11px] md:px-4 md:py-[13px]">
        <span className="grid size-[29px] shrink-0 place-items-center rounded-full bg-[#eadcf2] text-xs font-semibold sm:size-[25px] md:size-[34px]">
          T
        </span>
        <div>
          <small className="text-[7px] font-[650] tracking-[0.08em] text-[#65556b]">
            TEMI
          </small>
          <p className="text-[11px] leading-[1.6] sm:text-[9px] md:text-xs">
            Who’s up for a rooftop night? 👀
          </p>
        </div>
      </div>
      <div className="mt-[15px] ml-[19px] flex w-fit max-w-full rotate-3 items-center gap-2.5 rounded-[10px_10px_10px_0] bg-white px-3 py-3 shadow-[0_5px_10px_#3b153509] sm:ml-0 sm:gap-2 md:ml-[14px] md:gap-[11px] md:px-4 md:py-[13px] lg:ml-[35px]">
        <span className="grid size-[29px] shrink-0 place-items-center rounded-full bg-[#e9dccb] text-xs font-semibold sm:size-[25px] md:size-[34px]">
          D
        </span>
        <div>
          <small className="text-[7px] font-[650] tracking-[0.08em] text-[#65556b]">
            DAMI
          </small>
          <p className="text-[11px] leading-[1.6] sm:text-[9px] md:text-xs">
            I’m in. Let’s get a table.
          </p>
        </div>
      </div>
      <div className="mt-[19px] ml-auto flex w-fit max-w-full rotate-2 items-center gap-2.5 rounded-[10px_10px_0_10px] bg-[#f9a8c6] px-3 py-3 shadow-[0_5px_10px_#3b153509] sm:gap-2 md:gap-[11px] md:px-4 md:py-[13px]">
        <span className="grid size-[29px] shrink-0 place-items-center rounded-full bg-[#c94279] text-xs font-semibold text-white sm:size-[25px] md:size-[34px]">
          Y
        </span>
        <div>
          <small className="text-[7px] font-[650] tracking-[0.08em] text-[#65556b]">
            YOU
          </small>
          <p className="text-[11px] leading-[1.6] sm:text-[9px] md:text-xs">
            Okay, we’re actually doing this. ✨
          </p>
        </div>
      </div>
      <div className="mt-[39px] flex items-center gap-3 text-[7px] tracking-[0.08em] sm:text-[6px] md:text-[8px]">
        <span className="h-px w-[30px] bg-current" />
        <span>THE GROUP CHAT MADE IT OUTSIDE.</span>
      </div>
    </figure>
  );
}
