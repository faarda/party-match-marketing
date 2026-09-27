import Image from "next/image";
import { Eyebrow, Star, StatusDot, WaitlistLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import { pageWidth } from "@/lib/styles";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[740px] overflow-hidden sm:min-h-[705px] md:min-h-[680px] lg:min-h-[705px] xl:min-h-[810px]"
      aria-labelledby="hero-title"
    >
      <Image
        className="-z-[3] object-cover object-[54%_center] sm:object-[62%_center] md:object-[60%_center] lg:object-[center_48%]"
        src="/images/party-match-hero.webp"
        alt="Four friends laughing together outside, drinks in hand."
        fill
        preload
        sizes="100vw"
      />
      <div
        className={cn(
          "absolute inset-0 -z-[2]",
          "bg-[linear-gradient(0deg,rgba(5,6,9,0.8)_0%,rgba(5,6,9,0.2)_35%,rgba(5,6,9,0.6)_70%,rgba(5,6,9,0.67)_100%),linear-gradient(90deg,rgba(5,6,9,0.53),rgba(5,6,9,0.1))]",
          "sm:bg-[linear-gradient(90deg,rgba(5,6,9,0.84),rgba(5,6,9,0.31)),linear-gradient(0deg,rgba(5,6,9,0.9),transparent_65%)]",
          "md:bg-[linear-gradient(90deg,rgba(5,6,9,0.89)_0%,rgba(5,6,9,0.71)_38%,rgba(5,6,9,0.1)_80%),linear-gradient(0deg,rgba(5,6,9,0.85)_0%,transparent_38%,rgba(5,6,9,0.18)_100%)]",
        )}
      />
      <div
        className={cn(
          pageWidth,
          "relative pt-[43px] pb-[195px] sm:pt-[60px] sm:pb-[116px] md:pt-[69px] xl:pt-[100px]",
        )}
      >
        <Eyebrow className="mb-[26px] md:mb-[29px]">
          <StatusDot /> COMING TO LAGOS · 18+
        </Eyebrow>
        <h1
          id="hero-title"
          className="font-heading max-w-[1120px] text-[clamp(35px,8vw,49px)] font-[650] leading-[1.22] tracking-[-0.065em] sm:text-[7.1vw] sm:leading-[1.18] sm:tracking-[-0.06em] md:text-[5.2vw] lg:text-[clamp(42px,5.15vw,78px)]"
        >
          Find the party.
          <br />
          Find your <span className="text-pink">people.</span>
        </h1>
        <p className="mt-[23px] text-[17px] leading-normal font-medium sm:mt-7 sm:text-xl">
          The night starts with a plan.
          <br />
          The best part is who you find along the way.
        </p>
        <p className="mt-4 max-w-[300px] text-xs leading-[1.7] text-[#e5e2e5] sm:max-w-[420px] sm:text-sm sm:text-[#d2d0d3]">
          Discover what’s on, link up with a squad, catch a vibe and split the
          night. All around the same party.
        </p>
        <div className="mt-[23px] flex flex-col items-start gap-4 sm:mt-7 sm:flex-row sm:items-center sm:gap-[22px]">
          <WaitlistLink />
          <span className="text-[10px] leading-[1.65] text-[#d3d0d1] sm:text-[11px]">
            Good nights are coming.
            <br className="hidden sm:inline" /> Signups opening soon.
          </span>
        </div>
      </div>
      <div
        className={cn(
          pageWidth,
          "absolute right-0 bottom-[25px] left-0 flex items-center justify-between gap-5 text-[8px] font-[550] tracking-[0.09em] sm:bottom-7 sm:gap-0 sm:text-[10px]",
        )}
      >
        <span>LAGOS, THIS ONE’S FOR YOU.</span>
        <a
          href="#the-problem"
          className="flex items-center gap-2.5 text-[9px] tracking-normal sm:gap-5 sm:text-xs"
        >
          Meet your next night out{" "}
          <span className="text-[19px] sm:text-[22px]" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
      <div
        className="absolute right-[25px] bottom-[87px] size-[105px] rotate-12 text-pink sm:right-[5%] sm:bottom-[90px] md:bottom-[95px] md:right-[5.5%] md:size-[138px]"
        aria-hidden="true"
      >
        <Star className="size-full" />
        <span className="absolute inset-0 grid place-content-center text-center text-[10px] leading-[1.25] font-extrabold text-night md:text-[13px]">
          OUTSIDE
          <br />
          TOGETHER.
        </span>
      </div>
    </section>
  );
}

export function Ticker() {
  return (
    <div
      className="font-heading flex items-center justify-start gap-[22px] overflow-hidden bg-pink px-6 py-[18px] text-[10px] font-[650] tracking-[-0.02em] whitespace-nowrap text-night sm:gap-[26px] sm:py-[22px] sm:text-[11px] md:justify-around md:gap-7 md:px-[35px] md:py-6 md:text-[13px]"
      aria-hidden="true"
    >
      <span>GOOD MUSIC</span>
      <Star className="size-[18px] shrink-0 sm:size-[22px]" />
      <span>YOUR PEOPLE</span>
      <Star className="size-[18px] shrink-0 sm:size-[22px]" />
      <span>ONE MORE NIGHT</span>
      <Star className="size-[18px] shrink-0 sm:size-[22px]" />
      <span>LESS “WHO’S COMING?”</span>
      <Star className="size-[18px] shrink-0 sm:size-[22px]" />
    </div>
  );
}
