import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteUrl } from "@/lib/paths";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akul Nehra · iOS & Full-Stack Developer · SWE Intern 2026",
  description:
    "Akul Nehra — iOS (Swift) and full-stack (Next.js) developer. App Store apps, IEEE research, Rove internship, Harvard HUVTSP. Open to SWE internships Summer 2026.",
  openGraph: {
    title: "Akul Nehra · iOS & Full-Stack Developer",
    description:
      "App Store apps, IEEE research, startup experience — seeking SWE internships Summer 2026.",
    images: [{ url: "/img1.png", width: 737, height: 737, alt: "Akul Nehra" }],
    type: "website",
  },
  icons: {
    icon: "/tab.png",
    shortcut: "/tab.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans text-[15px] leading-relaxed text-muted">
        <div className="bg-mesh" aria-hidden />
        {children}
      </body>
    </html>
  );
}
