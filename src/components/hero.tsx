"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow, Star, StatusDot } from "@/components/ui";
import { WaitlistLink } from "@/components/waitlist-cta";
import { cn } from "@/lib/cn";
import { pageWidth } from "@/lib/styles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function waitForImage(img: HTMLImageElement | null) {
  return new Promise<void>((resolve) => {
    if (img?.complete && img.naturalWidth > 0) {
      resolve();
      return;
    }
    const done = () => resolve();
    if (!img) {
      resolve();
      return;
    }
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const photo = photoRef.current;
      const overlay = overlayRef.current;
      const bar = barRef.current;
      const star = starRef.current;
      if (!section || !photo || !overlay || !bar || !star) return;

      const clearCover = () => {
        document.documentElement.classList.remove("overflow-hidden");
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(overlay, { autoAlpha: 0 });
        clearCover();
        return;
      }

      const header = document.querySelector("header");
      const copy = section.querySelectorAll<HTMLElement>("[data-hero-item]");
      const img = photo.querySelector("img");

      document.documentElement.classList.add("overflow-hidden");
      gsap.ticker.lagSmoothing(0);
      gsap.set(photo, {
        clipPath: "inset(50% 0% 50% 0%)",
        scale: 1.08,
      });
      gsap.set(bar, { width: "0%" });
      gsap.set([header, ...copy].filter(Boolean), { autoAlpha: 0, y: 20 });
      gsap.set(star, { autoAlpha: 0, rotation: 12 });

      const grow = gsap.to(bar, {
        width: "90%",
        duration: 1.2,
        ease: "power1.out",
      });

      let cancelled = false;
      let holdTimer = 0;
      const minHold = new Promise<void>((resolve) => {
        holdTimer = window.setTimeout(resolve, 550);
      });

      Promise.all([waitForImage(img), minHold]).then(() => {
        if (cancelled) return;
        grow.kill();

        const tl = gsap.timeline();
        tl.to(bar, { width: "100%", duration: 0.22, ease: "power2.out" });
        tl.to(overlay, {
          autoAlpha: 0,
          duration: 0.35,
          ease: "power1.out",
          onComplete: clearCover,
        });
        tl.to(
          photo,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.05,
            ease: "power2.inOut",
          },
          "<",
        );
        tl.to([header, ...copy].filter(Boolean), {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
        });
        const spin = gsap.to(star, {
          rotation: 28,
          duration: 1.1,
          ease: "power3.out",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.7,
          paused: true,
        });
        tl.to(star, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });
        tl.call(() => spin.play());
      });

      return () => {
        cancelled = true;
        window.clearTimeout(holdTimer);
        clearCover();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} aria-labelledby="hero-title">
      <div className="relative isolate min-h-[740px] overflow-hidden sm:min-h-[705px] md:min-h-[680px] lg:min-h-[705px] xl:min-h-[810px]">
      <div ref={photoRef} className="absolute inset-0 -z-[1] origin-center">
        <Image
          className="object-cover object-[54%_center] sm:object-[62%_center] md:object-[60%_center] lg:object-[center_48%]"
          src="/images/party-match-hero.webp"
          alt="Four friends laughing together outside, drinks in hand."
          fill
          preload
          placeholder="empty"
          sizes="100vw"
        />
        <div
          className={cn(
            "absolute inset-0",
            "bg-[linear-gradient(0deg,rgba(5,6,9,0.8)_0%,rgba(5,6,9,0.2)_35%,rgba(5,6,9,0.6)_70%,rgba(5,6,9,0.67)_100%),linear-gradient(90deg,rgba(5,6,9,0.53),rgba(5,6,9,0.1))]",
            "sm:bg-[linear-gradient(90deg,rgba(5,6,9,0.84),rgba(5,6,9,0.31)),linear-gradient(0deg,rgba(5,6,9,0.9),transparent_65%)]",
            "md:bg-[linear-gradient(90deg,rgba(5,6,9,0.89)_0%,rgba(5,6,9,0.71)_38%,rgba(5,6,9,0.1)_80%),linear-gradient(0deg,rgba(5,6,9,0.85)_0%,transparent_38%,rgba(5,6,9,0.18)_100%)]",
          )}
        />
      </div>
      <div
        className={cn(
          pageWidth,
          "relative pt-[117px] pb-[195px] sm:pt-[140px] sm:pb-[116px] md:pt-[149px] lg:pt-[167px] xl:pt-[198px]",
        )}
      >
        <div data-hero-item>
          <Eyebrow className="mb-[26px] md:mb-[29px]">
            <StatusDot /> COMING TO LAGOS · 18+
          </Eyebrow>
        </div>
        <h1
          id="hero-title"
          data-hero-item
          className="font-heading max-w-[1120px] text-[clamp(35px,8vw,49px)] font-[650] leading-[1.22] tracking-[-0.065em] sm:text-[7.1vw] sm:leading-[1.18] sm:tracking-[-0.06em] md:text-[5.2vw] lg:text-[clamp(42px,5.15vw,78px)]"
        >
          Find the party.
          <br />
          Find your <span className="text-pink">people.</span>
        </h1>
        <p
          data-hero-item
          className="mt-[23px] text-[17px] leading-normal font-medium sm:mt-7 sm:text-xl"
        >
          Discover what’s near you, link up with a squad,
          <br />
          catch a vibe and split bills for the night.
        </p>
        <div data-hero-item className="mt-[23px] sm:mt-7">
          <WaitlistLink />
        </div>
      </div>
      <div
        data-hero-item
        className={cn(
          pageWidth,
          "absolute right-0 bottom-[25px] left-0 sm:bottom-7",
        )}
      >
        <a
          href="#the-problem"
          className="flex items-center gap-2.5 text-[9px] font-[550] tracking-normal sm:gap-5 sm:text-xs"
        >
          Meet your next night out{" "}
          <span className="text-[19px] sm:text-[22px]" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
      <div
        ref={starRef}
        className="absolute right-[25px] bottom-[87px] size-[125px] rotate-12 text-pink sm:right-[5%] sm:bottom-[90px] md:right-[5.5%] md:bottom-[95px] md:size-[170px]"
        aria-hidden="true"
      >
        <Star className="size-full" />
        <span className="absolute inset-0 grid place-content-center text-center text-[8px] leading-[1.2] font-extrabold text-night md:text-[10px]">
          OUTSIDE
          <br />
          TOGETHER.
        </span>
      </div>
      </div>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 grid place-items-center bg-night"
        aria-hidden="true"
      >
        <div className="h-0.5 w-[min(220px,42vw)] overflow-hidden bg-white/15">
          <div ref={barRef} className="h-full w-0 bg-pink" />
        </div>
      </div>
    </section>
  );
}

const tickerItems = ["Great Events", "Your People", "Magical Memories"];

function TickerGroup() {
  return (
    <div className="flex items-center gap-[22px] px-[22px] sm:gap-[26px] sm:px-[26px] md:gap-7 md:px-7">
      {Array.from({ length: 6 }, (_, copy) =>
        tickerItems.map((label) => (
          <span
            key={`${copy}-${label}`}
            className="flex items-center gap-[22px] sm:gap-[26px] md:gap-7"
          >
            <span>{label}</span>
            <Star className="size-[18px] shrink-0 sm:size-[22px]" />
          </span>
        )),
      )}
    </div>
  );
}

export function Ticker() {
  return (
    <div
      className="font-heading overflow-hidden bg-pink py-[18px] text-[10px] font-[650] tracking-[-0.02em] whitespace-nowrap text-night uppercase sm:py-[22px] sm:text-[11px] md:py-6 md:text-[13px]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
