import { cn } from "@/lib/cn";
import { pageWidth, sectionSpace } from "@/lib/styles";

const faqs = [
  [
    "What is Party Match?",
    "Party Match is an upcoming app for going out in Lagos. It brings party discovery, people to go with, party-specific matching, conversations and shared costs together around the same event. Find your night, then find your people.",
  ],
  [
    "Can I download the app or sign up yet?",
    "The app isn’t out yet, and we haven’t announced a launch date. Join the waitlist on this page and we’ll tell you when Lagos is ready.",
  ],
  [
    "What’s the difference between Squad and Vibe?",
    "Squad is for finding people to go with, sharing a table or making plans together. Vibe is for singles open to meeting someone at a particular party. You choose Squad, Vibe or both for each party, and a mutual like opens a match chat.",
  ],
  [
    "How will splitting costs work?",
    "Pools are being built around a dedicated bank account for each group’s collection, with contributions visible to members. You’ll be able to contribute from a linked bank account or your wallet. Pools that miss their deadline refund to members’ wallets.",
  ],
  [
    "Do I have to use Vibe to join a party?",
    "No. Squad is for finding people to go out with, and Vibe is for singles open to a connection. You choose how you want to meet people at each party. You can also discover events and join the conversation without looking for a romantic match.",
  ],
  [
    "Can I list my own party?",
    "That’s part of the plan. Everyday hosts will have a simple way to post a house party, birthday or pop-up. Organizers and venues can apply for verification and create fuller listings, including recurring weekly nights with details for each date.",
  ],
  [
    "Who is Party Match for?",
    "Adults aged 18 and over who want to discover parties and meet people in Lagos. We’re starting with Lagos; other cities will have to wait a little longer.",
  ],
] as const;

export function FaqSection() {
  return (
    <section id="faq" className={sectionSpace}>
      <div
        className={cn(
          pageWidth,
          "grid grid-cols-1 gap-[30px] sm:grid-cols-[0.8fr_1.2fr] sm:gap-10 md:gap-[85px]",
        )}
      >
        <div>
          <h2 className="font-heading text-[39px] font-[650] leading-[1.17] tracking-[-0.055em] sm:text-4xl md:text-[clamp(35px,4vw,58px)]">
            Glad
            <br className="hidden sm:inline" /> you asked.
          </h2>
          <p className="mt-[17px] text-sm text-muted sm:mt-[25px]">
            The party hasn’t started yet.
            <br />
            Here’s what to know.
          </p>
        </div>
        <div className="border-t border-[#39363f]">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-[#39363f]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[15px] py-[21px] text-[13px] font-medium hover:text-pink sm:gap-[25px] sm:py-6 sm:text-xs md:text-sm [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  className="relative block size-3.5 shrink-0 before:absolute before:top-[7px] before:block before:h-px before:w-3.5 before:bg-pink after:absolute after:top-[7px] after:block after:h-px after:w-3.5 after:rotate-90 after:bg-pink after:transition-transform after:duration-[180ms] group-open:after:rotate-0"
                  aria-hidden="true"
                />
              </summary>
              <p className="pr-[17px] pb-[23px] text-[13px] text-muted sm:pr-10">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
