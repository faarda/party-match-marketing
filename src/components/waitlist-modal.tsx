"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { Arrow, Eyebrow, Star, StatusDot } from "@/components/ui";
import { cn } from "@/lib/cn";
import { LAGOS_SIDES, PARTY_TYPES, type LagosSide } from "@/lib/waitlist";

export const waitlistCtaClass =
  "inline-flex min-h-[49px] cursor-pointer items-center justify-center gap-[30px] rounded-[10px] bg-pink px-5 py-[15px] text-xs font-bold text-night transition-[background,transform] duration-[180ms] hover:-translate-y-0.5 hover:bg-pink-hover sm:min-h-[54px] sm:px-6 sm:py-[18px] sm:text-sm";

const fieldClass =
  "w-full rounded-[10px] border border-[#d9cfd4] bg-white px-4 py-[13px] text-[13px] text-ink outline-none placeholder:text-[#9a8a91] focus:border-pink";

type WaitlistPrefill = {
  email?: string;
};

type WaitlistContextValue = {
  openWaitlist: (prefill?: WaitlistPrefill) => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return ctx;
}

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  location: "" as "" | LagosSide,
  parties: [] as string[],
};

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openTick, setOpenTick] = useState(0);

  const closeWaitlist = useCallback(() => {
    setOpen(false);
  }, []);

  const openWaitlist = useCallback((prefill?: WaitlistPrefill) => {
    setForm({
      ...emptyForm,
      email: prefill?.email?.trim() ?? "",
    });
    setSubmitted(false);
    setError("");
    setOpen(true);
    setOpenTick((tick) => tick + 1);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeWaitlist();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current
      ?.querySelector<HTMLInputElement>('input[name="name"]')
      ?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, openTick, closeWaitlist]);

  return (
    <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist }}>
      {children}
      {open ? (
        <WaitlistDialog
          panelRef={panelRef}
          form={form}
          setForm={setForm}
          submitted={submitted}
          setSubmitted={setSubmitted}
          error={error}
          setError={setError}
          onClose={closeWaitlist}
        />
      ) : null}
    </WaitlistContext.Provider>
  );
}

function WaitlistDialog({
  panelRef,
  form,
  setForm,
  submitted,
  setSubmitted,
  error,
  setError,
  onClose,
}: {
  panelRef: RefObject<HTMLDivElement | null>;
  form: typeof emptyForm;
  setForm: (next: typeof emptyForm) => void;
  submitted: boolean;
  setSubmitted: (next: boolean) => void;
  error: string;
  setError: (next: string) => void;
  onClose: () => void;
}) {
  const titleId = useId();
  const errorId = useId();
  const [submitting, setSubmitting] = useState(false);

  function toggleParty(party: string) {
    setError("");
    setForm({
      ...form,
      parties: form.parties.includes(party)
        ? form.parties.filter((item) => item !== party)
        : [...form.parties, party],
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    if (!form.location) {
      setError("Pick mainland or island.");
      return;
    }
    if (form.parties.length === 0) {
      setError("Pick at least one kind of party.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(body?.error ?? "Could not join the waitlist. Try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError(
        "Could not reach the server. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[80] isolate flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Dismiss waitlist form"
        className="absolute inset-0 z-0 cursor-pointer border-0 bg-[#0b0b10]/82"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="waitlist-dialog relative z-10 max-h-[min(92dvh,760px)] w-full max-w-[520px] isolate overflow-y-auto rounded-[16px] bg-[#f6f4f1] text-ink shadow-[0_24px_80px_#05060ab8] scheme-light"
      >
        <div className="relative px-5 py-6 sm:px-8 sm:py-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close waitlist form"
            className="absolute top-4 right-4 grid size-9 cursor-pointer place-items-center rounded-full border-0 bg-[#ece8e3] text-ink hover:bg-[#e2ddd6]"
          >
            <CloseIcon />
          </button>

          {submitted ? (
            <div className="flex flex-col items-start pt-2 pr-8">
              <Star className="mb-5 w-11 text-pink" />
              <h2
                id={titleId}
                className="font-heading text-[28px] font-[650] leading-[1.15] tracking-[-0.05em] sm:text-[32px]"
              >
                You’re on the list.
              </h2>
              <p className="mt-4 max-w-[340px] text-[13px] text-[#5c5660] sm:text-sm">
                We’ll be in touch when Party Match is ready for Lagos.
              </p>
              <button
                type="button"
                onClick={onClose}
                className={cn(waitlistCtaClass, "mt-7")}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <Eyebrow className="mb-4 pr-10 sm:mb-5">
                <StatusDot /> LAGOS WAITLIST
              </Eyebrow>
              <h2
                id={titleId}
                className="font-heading max-w-[16ch] pr-8 text-[28px] font-[650] leading-[1.15] tracking-[-0.05em] sm:text-[32px]"
              >
                Get on the list.
              </h2>
              <p className="mt-3 max-w-[380px] text-[13px] text-[#5c5660] sm:text-sm">
                Lagos is first. Tell us a bit about you and how you like to go
                out.
              </p>

              <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
                <label className="block text-[11px] font-semibold">
                  Name
                  <input
                    className={cn(fieldClass, "mt-2")}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    disabled={submitting}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                  />
                </label>
                <label className="block text-[11px] font-semibold">
                  Email
                  <input
                    className={cn(fieldClass, "mt-2")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    disabled={submitting}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                  />
                </label>
                <label className="block text-[11px] font-semibold">
                  Phone number
                  <input
                    className={cn(fieldClass, "mt-2")}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0803 000 0000"
                    required
                    value={form.phone}
                    disabled={submitting}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                  />
                </label>

                <fieldset className="min-w-0">
                  <legend className="text-[11px] font-semibold">
                    Where in Lagos?
                  </legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {LAGOS_SIDES.map((side) => {
                      const selected = form.location === side.value;
                      return (
                        <label
                          key={side.value}
                          className={cn(
                            "flex min-h-[46px] cursor-pointer items-center justify-center rounded-[10px] border text-[13px] font-semibold transition-colors",
                            selected
                              ? "border-pink bg-pink text-night"
                              : "border-[#d9cfd4] bg-white hover:border-pink",
                          )}
                        >
                          <input
                            className="sr-only"
                            type="radio"
                            name="location"
                            value={side.value}
                            checked={selected}
                            disabled={submitting}
                            onChange={() => {
                              setError("");
                              setForm({ ...form, location: side.value });
                            }}
                          />
                          {side.label}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset className="min-w-0">
                  <legend className="text-[11px] font-semibold">
                    What parties do you like?
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {PARTY_TYPES.map((party) => {
                      const selected = form.parties.includes(party);
                      return (
                        <label
                          key={party}
                          className={cn(
                            "inline-flex cursor-pointer items-center rounded-full border px-3 py-2 text-[12px] font-semibold transition-colors",
                            selected
                              ? "border-pink bg-pink text-night"
                              : "border-[#d9cfd4] bg-white hover:border-pink",
                          )}
                        >
                          <input
                            className="sr-only"
                            type="checkbox"
                            name="parties"
                            value={party}
                            checked={selected}
                            disabled={submitting}
                            onChange={() => toggleParty(party)}
                          />
                          {party}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {error ? (
                  <p
                    id={errorId}
                    className="text-[12px] font-medium text-[#b52459]"
                    role="alert"
                  >
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className={cn(
                    waitlistCtaClass,
                    "mt-1 w-full gap-4 disabled:cursor-wait disabled:opacity-70",
                  )}
                  aria-describedby={error ? errorId : undefined}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? "Joining…" : "Join the waitlist"}
                  {submitting ? null : <Arrow diagonal />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
