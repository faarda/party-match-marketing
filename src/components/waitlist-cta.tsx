"use client";

import type { FormEvent, ReactNode } from "react";
import { Arrow } from "@/components/ui";
import { useWaitlist, waitlistCtaClass } from "@/components/waitlist-modal";
import { cn } from "@/lib/cn";

export function WaitlistLink({
  children = "Join the waitlist",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { openWaitlist } = useWaitlist();
  return (
    <button
      type="button"
      className={cn(waitlistCtaClass, className)}
      onClick={() => openWaitlist()}
    >
      {children}
      <Arrow diagonal />
    </button>
  );
}

export function WaitlistTextLink({ children }: { children: ReactNode }) {
  const { openWaitlist } = useWaitlist();
  return (
    <button
      type="button"
      className="mt-[22px] inline-flex cursor-pointer items-center gap-5 border-b border-current bg-transparent p-0 py-1.5 text-xs font-[650] hover:text-pink sm:mt-7 sm:text-sm"
      onClick={() => openWaitlist()}
    >
      {children} <Arrow diagonal />
    </button>
  );
}

export function WaitlistTeaserForm() {
  const { openWaitlist } = useWaitlist();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(
      new FormData(event.currentTarget).get("email") ?? "",
    ).trim();
    openWaitlist({ email });
  }

  return (
    <form
      className="mt-[25px]"
      aria-label="Join the waitlist"
      aria-describedby="signup-description"
      onSubmit={onSubmit}
    >
      <label
        htmlFor="waitlist-email"
        className="mb-[9px] block text-[11px] font-semibold"
      >
        Your email address
      </label>
      <div className="flex min-h-[54px] rounded-[10px] border border-[#b890a0] bg-[#f8dbe5] p-[5px]">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="min-w-0 flex-1 border-0 bg-transparent p-[9px] text-[13px] text-[#24111e] outline-none placeholder:text-[#806773]"
        />
        <button
          type="submit"
          aria-label="Continue to waitlist form"
          className="grid w-[46px] shrink-0 cursor-pointer place-items-center rounded-[8px] border-0 bg-pink text-night hover:bg-pink-hover"
        >
          <Arrow />
        </button>
      </div>
    </form>
  );
}

export function WaitlistNavButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openWaitlist } = useWaitlist();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openWaitlist()}
    >
      {children}
    </button>
  );
}
