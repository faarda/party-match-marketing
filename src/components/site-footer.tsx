import { Arrow, Brand } from "@/components/ui";
import { WaitlistNavButton } from "@/components/waitlist-cta";
import { cn } from "@/lib/cn";
import { pageWidth } from "@/lib/styles";

export function SiteFooter() {
  return (
    <footer
      className={cn(
        pageWidth,
        "flex flex-wrap items-center justify-between gap-7 pt-[37px] sm:gap-[30px] sm:pt-[49px]",
      )}
    >
      <Brand
        width={205}
        height={33}
        className="w-full sm:w-auto"
        imageClassName="w-[173px] sm:w-[180px]"
      />
      <nav
        className="flex gap-[25px] text-[10px] sm:gap-7 sm:text-[11px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[7px] [&_a]:hover:text-pink [&_svg]:size-3"
        aria-label="Footer navigation"
      >
        <a href="#safety">Safety & privacy</a>
        <a href="#faq">FAQs</a>
        <WaitlistNavButton className="inline-flex cursor-pointer items-center gap-[7px] border-0 bg-transparent p-0 text-inherit hover:text-pink">
          Waitlist <Arrow diagonal />
        </WaitlistNavButton>
      </nav>
      <div className="mt-1 flex w-full flex-wrap items-center justify-between gap-5 border-t border-[#2d2931] py-6 text-[8px] text-[#99949f] sm:mt-5 sm:gap-0 sm:text-[9px]">
        <span>© {new Date().getFullYear()} Party Match</span>
        <span className="hidden tracking-[0.08em] sm:inline">
          Made for the nights you’ll talk about.
        </span>
        <a href="#" className="hover:text-pink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
