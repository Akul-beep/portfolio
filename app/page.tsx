import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { SpotlightSection } from "@/components/SpotlightSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { AboutSection } from "@/components/AboutSection";
import { BeyondGrid } from "@/components/BeyondGrid";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <SpotlightSection />
        <ExperienceTimeline />
        <AboutSection />
        <BeyondGrid />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
