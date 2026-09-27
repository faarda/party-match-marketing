import { Eyebrow } from "@/components/ui";

const faqs = [
  [
    "What is Party Match?",
    "Party Match is an upcoming app for going out in Lagos. It brings party discovery, people to go with, party-specific matching, conversations and shared costs together around the same event. Find your night, then find your people.",
  ],
  [
    "Can I download the app or sign up yet?",
    "Not yet. Party Match is coming to Lagos, and we haven’t announced a launch date. Waitlist registration is also opening soon. The email form on this page is a preview and cannot collect or save your address.",
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
    <section id="faq" className="faq-section section-space">
      <div className="page-width faq-grid">
        <div>
          <Eyebrow>A FEW THINGS BEFORE WE GO</Eyebrow>
          <h2 className="font-heading">
            Glad
            <br /> you asked.
          </h2>
          <p>
            The party hasn’t started yet.
            <br />
            Here’s what to know.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
