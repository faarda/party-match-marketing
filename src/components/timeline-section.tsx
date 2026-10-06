import { Eyebrow, TextLink } from "@/components/ui";
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

const reviewScores = [
  { label: "Crowd", stars: 5 },
  { label: "Music", stars: 5 },
  { label: "Value", stars: 4 },
  { label: "Security", stars: 4 },
];

export function TimelineSection() {
  return (
    <section id="timeline" className={cn(sectionSpace, "bg-[#18151c]")}>
      <div className={cn(pageWidth, featureGrid)}>
        <TimelineArt />
        <div className={cn(featureCopy, "row-start-1 sm:row-auto")}>
          <Eyebrow>
            <span className={sectionNumber}>05</span> THE TIMELINE
          </Eyebrow>
          <h2 className={featureHeading}>
            Every party
            <br />
            has a <span className="text-pink">story.</span>
          </h2>
          <p className={featureLead}>
            Before, during and after: the whole night in one live conversation.
          </p>
          <p className={featureBody}>
            Ask who’s coming and what to wear before you go. Once it starts, see
            what it’s like right now from the people already there. After, read
            how it actually went.
          </p>
          <ul className={cn(featureList, "[&>li]:before:text-pink")}>
            <li>Pre-party questions, hype and polls to ask the crowd</li>
            <li>Live photos and posts, with the #hashtags trending tonight</li>
            <li>
              Reviews of the crowd, music, value and security from people who
              went
            </li>
            <li>Post anonymously when you’d rather not use your name</li>
          </ul>
          <p className={featureBody}>
            Went? Drop photos from the night in a recap. They’re gone in 24
            hours.
          </p>
          <TextLink href="#safety">How we keep it respectful</TextLink>
        </div>
      </div>
    </section>
  );
}

function TimelineArt() {
  return (
    <figure className="relative mx-[7px] mt-2.5 mb-0.5 min-w-0 pb-[33px] sm:mx-0 sm:my-0">
      <figcaption className={cn(previewLabel, "mb-[23px] text-center")}>
        ONE PARTY, ONE CONVERSATION · ILLUSTRATIVE TIMELINE
      </figcaption>
      <div className="-rotate-2 rounded-lg border border-[#3a3340] bg-[#211c26] p-[22px] sm:p-[18px] md:p-[22px] lg:p-[28px]">
        <div className="flex items-center justify-between text-[9px] tracking-[0.08em] text-[#cfc8d6]">
          <span>ROOFTOP AMAPIANO · LEKKI</span>
          <span className="flex items-center gap-1.5 text-pink">
            <span className="size-1.5 rounded-full bg-pink" /> LIVE
          </span>
        </div>
        <h3 className="mt-[18px] text-[23px] font-semibold tracking-[-0.03em] sm:text-[19px] md:text-[23px]">
          Live from the party
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] text-[#e4dde9] md:text-[10px]">
          <span className="rounded-full bg-[#3a2c3f] px-2.5 py-1">
            #amapiano · 12
          </span>
          <span className="rounded-full bg-[#2d2833] px-2.5 py-1">
            #rooftop · 7
          </span>
          <span className="rounded-full bg-[#2d2833] px-2.5 py-1">
            #dresscode · 4
          </span>
        </div>

        <div className="mt-[18px] [&>div]:border-t [&>div]:border-[#3a3340] [&>div]:py-3.5">
          <div>
            <PostMeta initial="T" name="Temi" phase="BEFORE" />
            <p className="mt-2 text-xs leading-[1.6] text-[#ece7f0] sm:text-[10px] md:text-xs">
              Who else is coming? Dress code? 👀
            </p>
          </div>
          <div>
            <PostMeta initial="D" name="Dami" phase="LIVE" live />
            <p className="mt-2 text-xs leading-[1.6] text-[#ece7f0] sm:text-[10px] md:text-xs">
              The DJ just switched to amapiano. Come up now. 🔥
            </p>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5" aria-hidden="true">
              <span className="h-14 rounded-[5px] bg-linear-to-br from-[#ff3d81] to-[#5b2a6e] md:h-16" />
              <span className="h-14 rounded-[5px] bg-linear-to-br from-[#f2a14a] to-[#7a2f4f] md:h-16" />
              <span className="h-14 rounded-[5px] bg-linear-to-br from-[#6c4bd1] to-[#1f1a2b] md:h-16" />
            </div>
          </div>
          <div>
            <PostMeta initial="?" name="Anonymous" phase="AFTER" />
            <div className="mt-2.5 grid max-w-[340px] grid-cols-2 gap-x-6 gap-y-1.5 text-[10px] text-[#cfc8d6] sm:text-[9px] md:text-[10px]">
              {reviewScores.map((score) => (
                <span
                  key={score.label}
                  className="flex items-center justify-between gap-2"
                >
                  {score.label}
                  <span
                    role="img"
                    aria-label={`${score.stars} out of 5`}
                    className="tracking-[0.1em] text-pink"
                  >
                    {"★".repeat(score.stars)}
                    <span className="text-[#4a4252]">
                      {"★".repeat(5 - score.stars)}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="absolute right-[-10px] bottom-[5px] rotate-6 bg-pink px-[18px] py-3.5 text-[9px] leading-normal font-bold text-white sm:px-[18px] sm:py-3 sm:text-[8px] md:px-[25px] md:py-[15px] md:text-[10px]">
        BEFORE. DURING.
        <br />
        AFTER.
      </span>
    </figure>
  );
}

function PostMeta({
  initial,
  name,
  phase,
  live = false,
}: {
  initial: string;
  name: string;
  phase: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2.5">
      <span className="flex items-center gap-2.5 text-xs font-medium sm:text-[10px] md:text-xs">
        <i className="grid size-[27px] place-items-center rounded-full bg-[#3a2c3f] text-[10px] not-italic text-[#f3dbe7]">
          {initial}
        </i>
        {name}
      </span>
      <span
        className={cn(
          "text-[8px] font-semibold tracking-[0.1em]",
          live ? "text-pink" : "text-[#8f8798]",
        )}
      >
        {phase}
      </span>
    </div>
  );
}
