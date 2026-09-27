import Image from "next/image";
import type { ReactNode } from "react";

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
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function WaitlistLink({
  children = "Join the waitlist",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a className={`button ${className}`} href="#waitlist">
      {children}
      <Arrow diagonal />
    </a>
  );
}

export function Brand({ width, height }: { width: number; height: number }) {
  return (
    <a className="brand" href="#" aria-label="Party Match home">
      <Image
        src="/images/partymatch-logo-wordmark-pink-white.svg"
        alt="Party Match"
        width={width}
        height={height}
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
    <a className="text-link" href={href}>
      {children} <Arrow diagonal />
    </a>
  );
}
