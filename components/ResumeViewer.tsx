"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { withBasePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";

const pdfSrc = withBasePath(site.resumePdfUrl);

export function ResumeViewer() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col">
      <div className="border-b border-black/[0.06] bg-[#fafafa]/95 backdrop-blur-sm">
        <div className="page-shell py-3 sm:py-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8">
        <div className="card-surface w-full max-w-lg px-8 py-10 text-center sm:px-10 sm:py-12">
          <div
            className="mx-auto mb-6 flex h-14 w-11 items-center justify-center rounded-md border border-black/[0.08] bg-neutral-50 shadow-sm"
            aria-hidden
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
              PDF
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Resume
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {site.name} · updated 2026
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-soft">
            Opens in a new tab with your browser&apos;s PDF viewer — proper zoom,
            scroll, and download from there.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Button href={pdfSrc} variant="primary" external className="sm:min-w-[10rem]">
              View resume
            </Button>
            <Button
              href={pdfSrc}
              variant="ghost"
              download
              className="sm:min-w-[10rem]"
            >
              Download PDF
            </Button>
          </div>

          <p className="mt-6 text-xs text-soft">
            2 pages · Mobile React Native &amp; full-stack
          </p>
        </div>
      </div>
    </div>
  );
}
