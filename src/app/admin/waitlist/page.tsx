import type { Metadata } from "next";
import { createServiceClient } from "@/lib/supabase";
import { LAGOS_SIDES, PARTY_TYPES } from "@/lib/waitlist";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Waitlist signups — Party Match",
  robots: { index: false, follow: false },
};

type Signup = {
  name: string;
  email: string;
  phone: string;
  location: string;
  parties: string[] | null;
  created_at?: string | null;
  updated_at?: string | null;
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  dateStyle: "medium",
  timeStyle: "short",
});

function signedUpAt(signup: Signup) {
  const value = signup.created_at ?? signup.updated_at;
  return value ? dateFormat.format(new Date(value)) : "—";
}

function sideLabel(value: string) {
  return LAGOS_SIDES.find((side) => side.value === value)?.label ?? value;
}

export default async function WaitlistAdminPage() {
  const { data, error } = await createServiceClient()
    .from("party_match_waitlist")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("waitlist read failed", error.message);
  }

  const signups = (data ?? []) as Signup[];
  const sideCounts = LAGOS_SIDES.map((side) => ({
    label: side.label,
    count: signups.filter((signup) => signup.location === side.value).length,
  }));
  const partyCounts = PARTY_TYPES.map((party) => ({
    label: party,
    count: signups.filter((signup) => signup.parties?.includes(party)).length,
  })).sort((a, b) => b.count - a.count);

  return (
    <main className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-10 sm:py-14">
      <h1 className="font-heading text-[clamp(26px,5vw,40px)] font-[650] tracking-[-0.04em]">
        Waitlist signups
      </h1>

      {error ? (
        <p className="mt-6 rounded-xl border border-pink/40 bg-pink/10 p-4 text-sm">
          Could not load signups. Check the server logs.
        </p>
      ) : (
        <>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[{ label: "Total", count: signups.length }, ...sideCounts].map(
              (stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <dt className="text-xs text-muted">{stat.label}</dt>
                  <dd className="font-heading mt-1 text-2xl font-[650]">
                    {stat.count}
                  </dd>
                </div>
              ),
            )}
          </dl>

          <ul className="mt-4 flex flex-wrap gap-2 text-xs">
            {partyCounts.map((party) => (
              <li
                key={party.label}
                className="rounded-full border border-white/10 px-3 py-1.5 text-muted"
              >
                {party.label}{" "}
                <span className="font-semibold text-paper">{party.count}</span>
              </li>
            ))}
          </ul>

          {signups.length === 0 ? (
            <p className="mt-10 text-sm text-muted">No signups yet.</p>
          ) : (
            <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead className="bg-white/[0.04] text-xs text-muted">
                  <tr>
                    {[
                      "Name",
                      "Email",
                      "Phone",
                      "Side",
                      "Parties",
                      "Signed up",
                    ].map((heading) => (
                      <th key={heading} className="px-4 py-3 font-medium">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {signups.map((signup) => (
                    <tr key={signup.email} className="align-top">
                      <td className="px-4 py-3 font-medium">{signup.name}</td>
                      <td className="px-4 py-3">
                        <a
                          className="underline decoration-white/30 underline-offset-2 hover:text-pink"
                          href={`mailto:${signup.email}`}
                        >
                          {signup.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <a
                          className="hover:text-pink"
                          href={`tel:${signup.phone}`}
                        >
                          {signup.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        {sideLabel(signup.location)}
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {signup.parties?.join(", ") || "—"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-muted">
                        {signedUpAt(signup)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </main>
  );
}
