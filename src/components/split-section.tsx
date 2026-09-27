import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  featureBody,
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

const contributedMembers = ["Temi", "Dami", "You"];

export function SplitSection() {
  return (
    <section id="split" className={sectionSpace}>
      <div className={cn(pageWidth, featureGrid)}>
        <div className={featureCopy}>
          <Eyebrow>
            <span className={sectionNumber}>04</span> SPLIT THE NIGHT
          </Eyebrow>
          <h2 className={featureHeading}>
            Big plans.
            <br />
            <span className="text-lime">Shared costs.</span>
          </h2>
          <p className={featureLead}>
            Have more fun outside. Pool for the tickets, tables and drinks that
            make the night happen.
          </p>
          <p className={featureBody}>
            Chip in with your people before you go, or while you’re already at
            the party — so one person isn’t chasing the money, and everyone
            actually makes it out.
          </p>
          <ul className={cn(featureList, "[&>li]:before:text-lime")}>
            <li>Pool funds for tickets, tables, drinks and the rest of the night</li>
            <li>Pay in before you head out, or once you’re already there</li>
            <li>See who’s chipped in, without the group-chat chase</li>
          </ul>
        </div>
        <PoolArt />
      </div>
    </section>
  );
}

function PoolArt() {
  return (
    <figure className="relative mr-1.5 min-w-0 px-[5px] pt-0 pb-[33px] sm:mr-0 sm:px-3.5 sm:pt-[15px]">
      <figcaption className={cn(previewLabel, "mb-[23px] text-center")}>
        SHARED COSTS, MADE CLEAR · EXAMPLE POOL
      </figcaption>
      <div className="rotate-2 rounded-lg border border-[#384135] bg-[#1b201b] p-[25px] sm:p-[18px] md:p-[22px] lg:p-[30px]">
        <div className="flex items-center justify-between text-[9px] tracking-[0.08em] text-[#cbd2c5]">
          <span>THE ROOFTOP SQUAD</span>
          <span className="text-[23px] text-lime" aria-hidden="true">
            ↗
          </span>
        </div>
        <h3 className="mt-[25px] text-[23px] font-semibold tracking-[-0.03em] sm:text-[19px] md:text-[23px]">
          A table for the crew.
        </h3>
        <p className="mt-3.5 text-[28px] font-semibold tracking-[-0.04em] text-lime sm:text-2xl md:text-[30px]">
          ₦120,000{" "}
          <span className="text-xs font-normal tracking-normal text-[#adb2a7] sm:text-[10px] md:text-sm">
            / ₦160,000
          </span>
        </p>
        <div className="mt-[13px] h-1.5 overflow-hidden rounded-[10px] bg-[#3d4734]">
          <span className="block h-full w-3/4 bg-lime" />
        </div>
        <div className="mt-2.5 flex justify-between text-[10px] text-[#b8c0b2]">
          <span>3 of 4 shares in</span>
          <span>75%</span>
        </div>
        <div className="mt-[22px] [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2.5 [&>div]:border-t [&>div]:border-[#353d32] [&>div]:py-3 [&>div]:text-xs sm:[&>div]:text-[10px] md:[&>div]:text-xs">
          {contributedMembers.map((name) => (
            <div key={name}>
              <span className="flex items-center gap-2.5">
                <i className="grid size-[27px] place-items-center rounded-full bg-[#38432c] text-[10px] not-italic text-[#dfeccb]">
                  {name[0]}
                </i>
                {name}
              </span>
              <span className="flex items-center gap-2.5">
                ₦40,000 <b className="text-[10px] text-lime">✓</b>
              </span>
            </div>
          ))}
          <div className="text-[#a0a89b]">
            <span className="flex items-center gap-2.5">
              <i className="grid size-[27px] place-items-center rounded-full bg-[#38432c] text-[10px] not-italic text-[#dfeccb]">
                +
              </i>
              One more share
            </span>
            <span>₦40,000</span>
          </div>
        </div>
        <div className="mt-[15px] border-t border-[#353d32] pt-[19px] text-[9px] text-[#bac4b1] sm:text-[8px] md:text-[10px]">
          <span className="mr-[7px] text-lime" aria-hidden="true">
            ↳
          </span>{" "}
          One shared plan. Everyone’s contribution visible.
        </div>
      </div>
      <span className="absolute right-[-10px] bottom-[5px] -rotate-7 bg-lime px-[18px] py-3.5 text-[9px] leading-normal font-bold text-[#182111] sm:px-[18px] sm:py-3 sm:text-[8px] md:px-[25px] md:py-[15px] md:text-[10px]">
        MORE MEMORIES.
        <br />
        LESS “SEND YOUR OWN.”
      </span>
    </figure>
  );
}
