import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { SpotlightSection } from "@/components/SpotlightSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { AboutSection } from "@/components/AboutSection";
import { BeyondGrid } from "@/components/BeyondGrid";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/lib/content";

export default function Home() {
  const year = new Date().getFullYear();

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
      <footer className="border-t border-black/[0.06] py-8">
        <div className="page-shell flex flex-col items-center justify-between gap-2 text-center text-sm text-soft sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.email}</p>
        </div>
      </footer>
    </>
  );
}
