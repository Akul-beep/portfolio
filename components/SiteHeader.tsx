"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}


function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const firstName = site.name.split(" ")[0];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-black/[0.06] bg-[#fafafa]/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="page-shell flex h-16 items-center justify-between">
          <Link
            href="#hero"
            onClick={close}
            className="text-sm font-bold tracking-tight text-ink"
          >
            {firstName}
            <span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-black/[0.04] hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <span className="mx-2 h-4 w-px bg-black/10" aria-hidden />
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted hover:bg-black/[0.04] hover:text-ink"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted hover:bg-black/[0.04] hover:text-ink"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <Link
              href={site.resumeUrl}
              download
              className="ml-1 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Resume
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1">
              <span
                className={cn(
                  "h-0.5 w-full bg-ink transition",
                  open && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn("h-0.5 w-full bg-ink transition", open && "opacity-0")}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-ink transition",
                  open && "-translate-y-1.5 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-ink/50 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={close}
          aria-label="Close menu"
        />
        <nav
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(100%,300px)] flex-col bg-white p-6 pt-20 shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
          aria-label="Mobile"
        >
          <Link
            href="#hero"
            className="rounded-lg px-4 py-3 font-medium text-ink hover:bg-black/[0.04]"
            onClick={close}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 font-medium text-ink hover:bg-black/[0.04]"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
<a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-3 font-medium text-ink hover:bg-black/[0.04]"
            onClick={close}
          >
            LinkedIn
          </a>
          <Link
            href={site.resumeUrl}
            download
            className="mt-4 rounded-lg bg-ink px-4 py-3 text-center font-semibold text-white"
            onClick={close}
          >
            Resume
          </Link>
        </nav>
      </div>
    </>
  );
}
