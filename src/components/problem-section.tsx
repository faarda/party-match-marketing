"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { lightSection, pageWidth, sectionSpace } from "@/lib/styles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Piece =
  | { type: "text"; value: string; accent?: boolean }
  | { type: "emoji"; glyph: string; label: string; punct?: string };

const headline: Piece[] = [
  { type: "text", value: "If you’ve ever wondered where to go" },
  { type: "emoji", glyph: "📍", label: "where to go", punct: "," },
  { type: "text", value: " felt lonely at a party" },
  { type: "emoji", glyph: "🪩", label: "at a party" },
  { type: "text", value: " or wanted to split bills" },
  { type: "emoji", glyph: "💸", label: "split bills" },
  { type: "text", value: " — " },
  { type: "text", value: "Party Match is for you", accent: true },
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      const section = sectionRef.current;
      if (!heading || !section) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const words = heading.querySelectorAll<HTMLElement>("[data-word]");
      const emojiUnits =
        heading.querySelectorAll<HTMLElement>("[data-emoji-unit]");
      const units = heading.querySelectorAll<HTMLElement>(
        "[data-word], [data-emoji-unit]",
      );

      gsap.set(words, { opacity: 0.18 });
      gsap.set(emojiUnits, { opacity: 0, scale: 0 });
      gsap.set(heading, { scale: 0.94 });

      const tl = gsap.timeline();

      units.forEach((unit, index) => {
        const at = index * 0.1;
        if (unit.hasAttribute("data-emoji-unit")) {
          tl.to(
            unit,
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(2.2)",
            },
            at,
          );
          return;
        }

        tl.to(unit, { opacity: 1, duration: 0.35, ease: "none" }, at);
      });

      tl.to(heading, { scale: 1.06, duration: tl.duration(), ease: "none" }, 0);

      ScrollTrigger.create({
        trigger: section,
        animation: tl,
        start: "top top",
        end: "+=180%",
        scrub: 0.6,
        invalidateOnRefresh: true,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="the-problem" className="bg-night">
      <div
        className={cn(
          lightSection,
          sectionSpace,
          "sticky top-0 z-[1] motion-reduce:static",
        )}
      >
        <h2
          ref={headingRef}
          className={cn(
            pageWidth,
            "font-heading origin-center text-center text-[clamp(32px,4.8vw,58px)] font-[650] leading-[1.2] tracking-[-0.055em] will-change-transform",
          )}
        >
          {headline.map((piece, index) => {
            if (piece.type === "emoji") {
              return (
                <span
                  key={`emoji-${index}`}
                  data-emoji-unit
                  className="ml-[0.22em] inline-flex origin-center items-baseline whitespace-nowrap will-change-transform"
                >
                  <span
                    role="img"
                    aria-label={piece.label}
                    className="inline-block translate-y-[0.08em] text-[1.12em]"
                  >
                    {piece.glyph}
                  </span>
                  {piece.punct ? (
                    <span className="-ml-[0.16em] tracking-normal">
                      {piece.punct}
                    </span>
                  ) : null}
                </span>
              );
            }

            return piece.value.split(/(\s+)/).map((token, tokenIndex) => {
              if (token === "" || /^\s+$/.test(token)) {
                return (
                  <span key={`space-${index}-${tokenIndex}`}>{token}</span>
                );
              }

              return (
                <span
                  key={`word-${index}-${tokenIndex}`}
                  data-word
                  data-accent={piece.accent ? "" : undefined}
                  className={piece.accent ? "text-[#ce235f]" : undefined}
                >
                  {token}
                </span>
              );
            });
          })}
        </h2>
      </div>
      <div
        className="h-[180vh] motion-reduce:hidden"
        aria-hidden="true"
      />
    </section>
  );
}
