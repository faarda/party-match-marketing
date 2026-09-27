import { Brand, WaitlistLink } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex min-h-[74px] items-center justify-between gap-[15px] bg-transparent px-5 py-[18px] sm:min-h-20 sm:gap-5 sm:px-6 sm:py-[19px] md:gap-5 lg:min-h-[98px] lg:gap-[30px] lg:px-[4%] lg:py-6">
      <Brand
        width={220}
        height={33}
        imageClassName="w-[143px] sm:w-[170px] md:w-[180px] lg:w-[210px]"
      />
      <nav
        className="hidden gap-5 text-[13px] md:flex lg:gap-[34px] [&_a]:text-[#dddbe1] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:text-pink"
        aria-label="Main navigation"
      >
        <a href="#discover">The experience</a>
        <a href="#how-it-works">How it works</a>
        <a href="#hosts">For hosts</a>
      </nav>
      <WaitlistLink className="min-h-[37px] gap-[9px] px-[11px] py-2.5 text-[10px] sm:min-h-10 sm:gap-[15px] sm:px-3.5 sm:py-[11px] sm:text-[11px] md:min-h-11 md:gap-[26px] md:px-[19px] md:py-3 md:text-xs [&_svg]:size-3.5 sm:[&_svg]:size-[17px]" />
    </header>
  );
}
