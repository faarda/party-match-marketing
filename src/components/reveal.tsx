"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function revealItems(root: HTMLElement) {
  const scope = root.querySelector("section, footer") ?? root;
  const nodes = [
    ...scope.querySelectorAll<HTMLElement>(
      "h2, h3, p, li, figure, form, details, nav, svg, a",
    ),
  ];

  return nodes.filter((node) => {
    if (node.closest("figure") && node.tagName !== "FIGURE") return false;
    if (node.closest("li") && node.tagName !== "LI") return false;
    if (node.closest("details") && node.tagName !== "DETAILS") return false;
    if (node.closest("form") && node.tagName !== "FORM") return false;
    if (node.tagName === "SVG" && node.closest("a, button, p, h2, h3, li")) {
      return false;
    }
    if (
      node.tagName === "A" &&
      node.closest("nav, figure, li, p, h2, h3, form, details")
    ) {
      return false;
    }
    return true;
  });
}

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const items = revealItems(el);
      const targets = items.length ? items : [...el.children];
      if (!targets.length) return;

      gsap.from(targets, {
        autoAlpha: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
