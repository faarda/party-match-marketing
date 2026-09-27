import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const unbounded = localFont({
  src: "../../node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "swap",
});

const geist = localFont({
  src: "../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Party Match — Find the party. Find your people.",
  description:
    "Coming to Lagos. Discover parties near you, find your squad, meet someone with your vibe, and split the night together with Party Match.",
  icons: { icon: "/images/partymatch-logo-pink.svg" },
  openGraph: {
    title: "Party Match — Find the party. Find your people.",
    description:
      "Your next great night starts with the right people. Party Match is coming to Lagos.",
    type: "website",
    locale: "en_NG",
    siteName: "Party Match",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${geist.variable} scroll-smooth scroll-pt-7 antialiased`}
    >
      <body className="m-0 bg-night font-sans text-paper scheme-dark">
        {children}
      </body>
    </html>
  );
}
