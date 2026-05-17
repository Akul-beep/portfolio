"use client";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Reveal variant="fade">
      <footer className="border-t border-black/[0.06] py-8">
        <div className="page-shell flex flex-col items-center justify-between gap-2 text-center text-sm text-soft sm:flex-row sm:text-left">
          <p>© {year} {site.name}</p>
          <p>{site.email}</p>
        </div>
      </footer>
    </Reveal>
  );
}
