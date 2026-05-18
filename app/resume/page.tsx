import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ResumeViewer } from "@/components/ResumeViewer";
import { siteUrl } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Resume · Akul Nehra",
  description:
    "Resume — Mobile React Native & full-stack developer. App Store shipped, YC intern, IEEE published.",
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ResumeViewer />
      </main>
    </>
  );
}
