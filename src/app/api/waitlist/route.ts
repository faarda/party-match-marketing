import { after, NextResponse } from "next/server";
import { notifySignup } from "@/lib/signup-notify";
import { createServiceClient } from "@/lib/supabase";
import { parseWaitlistPayload } from "@/lib/waitlist";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = parseWaitlistPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const supabase = createServiceClient();
    const { error } = await supabase.from("party_match_waitlist").upsert(
      {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        location: parsed.data.location,
        parties: parsed.data.parties,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("waitlist insert failed", error.message);
      return NextResponse.json(
        { error: "Could not join the waitlist." },
        { status: 500 },
      );
    }

    after(async () => {
      try {
        await notifySignup(parsed.data);
      } catch (error) {
        console.error("signup notification failed", error);
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("waitlist insert failed", error);
    return NextResponse.json(
      { error: "Could not join the waitlist." },
      { status: 500 },
    );
  }
}
