import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m50 0 8 31 27-16-16 27 31 8-31 8 16 27-27-16-8 31-8-31-27 16 16-27L0 50l31-8-16-27 27 16Z" />
    </svg>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-[23px] flex items-center gap-2.5 text-[9px] font-[650] leading-normal tracking-[0.15em] sm:mb-7 md:text-[11px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function WaitlistLink({
  children = "Join the waitlist",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={cn(
        "inline-flex min-h-[49px] items-center justify-center gap-[30px] rounded-[10px] bg-pink px-5 py-[15px] text-xs font-bold text-night transition-[background,transform] duration-[180ms] hover:-translate-y-0.5 hover:bg-pink-hover sm:min-h-[54px] sm:px-6 sm:py-[18px] sm:text-sm",
        className,
      )}
      href="#waitlist"
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}

export function Brand({
  width,
  height,
  className = "",
  imageClassName = "",
}: {
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <a
      className={cn("inline-flex shrink-0", className)}
      href="#"
      aria-label="Party Match home"
    >
      <Image
        src="/images/partymatch-logo-wordmark-pink-white.svg"
        alt="Party Match"
        width={width}
        height={height}
        className={cn("h-auto", imageClassName)}
      />
    </a>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="mt-[22px] inline-flex items-center gap-5 border-b border-current py-1.5 text-xs font-[650] hover:text-pink sm:mt-7 sm:text-sm"
      href={href}
    >
      {children} <Arrow diagonal />
    </a>
  );
}

export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full bg-pink shadow-[0_0_0_4px_#ff3d811b]",
        className,
      )}
    />
  );
}
