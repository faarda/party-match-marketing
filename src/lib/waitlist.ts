export const PARTY_TYPES = [
  "Raves",
  "Clubs",
  "Beach Parties",
  "Pool Parties",
  "House Parties",
  "Day Parties",
  "Rooftop Parties",
  "Live Music",
  "Afrobeats Nights",
  "Amapiano Nights",
  "Owambe",
  "Boat Parties",
  "Brunch Parties",
  "Lounges",
  "Concerts & Festivals",
  "Game Nights",
] as const;

export const LAGOS_SIDES = [
  { value: "mainland", label: "Mainland" },
  { value: "island", label: "Island" },
] as const;

export type PartyType = (typeof PARTY_TYPES)[number];
export type LagosSide = (typeof LAGOS_SIDES)[number]["value"];

export type WaitlistInput = {
  name: string;
  email: string;
  phone: string;
  location: LagosSide;
  parties: PartyType[];
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PARTY_SET = new Set<string>(PARTY_TYPES);
const LOCATION_SET = new Set<string>(LAGOS_SIDES.map((side) => side.value));

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseWaitlistPayload(
  body: unknown,
): { ok: true; data: WaitlistInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Send a JSON object." };
  }

  const input = body as Record<string, unknown>;
  const name = asTrimmedString(input.name);
  const email = asTrimmedString(input.email).toLowerCase();
  const phone = asTrimmedString(input.phone).replace(/\s+/g, " ");
  const location = asTrimmedString(input.location);
  const parties = Array.isArray(input.parties)
    ? [...new Set(input.parties.filter((item): item is string => typeof item === "string"))]
    : [];

  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: "Enter your name." };
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "Enter a valid email." };
  }
  if ((phone.match(/\d/g) ?? []).length < 7 || phone.length > 40) {
    return { ok: false, error: "Enter a valid phone number." };
  }
  if (!LOCATION_SET.has(location)) {
    return { ok: false, error: "Pick mainland or island." };
  }
  if (parties.length === 0 || parties.some((party) => !PARTY_SET.has(party))) {
    return { ok: false, error: "Pick at least one kind of party." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      location: location as LagosSide,
      parties: parties as PartyType[],
    },
  };
}
