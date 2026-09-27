import nodemailer, { type Transporter } from "nodemailer";
import { LAGOS_SIDES, type WaitlistInput } from "@/lib/waitlist";

const DEFAULT_NOTIFY_TO = "silas+party-match@catlog.shop";

let transporter: Transporter | undefined;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return undefined;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  transporter ??= nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Email and phone are deliberately left out so contact details stay in Supabase.
export async function notifySignup(signup: WaitlistInput) {
  const smtp = getTransporter();
  if (!smtp) {
    console.warn("signup notification skipped: SMTP is not configured");
    return;
  }

  const location =
    LAGOS_SIDES.find((side) => side.value === signup.location)?.label ??
    signup.location;
  const signedUpAt = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Lagos",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const rows: [string, string][] = [
    ["Name", signup.name],
    ["Lagos side", location],
    ["Parties", signup.parties.join(", ")],
    ["Signed up", `${signedUpAt} (Lagos)`],
  ];

  await smtp.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: process.env.SIGNUP_NOTIFY_TO ?? DEFAULT_NOTIFY_TO,
    subject: `New Party Match waitlist signup: ${signup.name}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `<table cellpadding="4">${rows
      .map(
        ([label, value]) =>
          `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`,
      )
      .join("")}</table>`,
  });
}
