import Link from "next/link";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-site flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-muted">
        This page doesn&apos;t exist — but my work does.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
      >
        Back to {site.name.split(" ")[0]}&apos;s portfolio
      </Link>
    </div>
  );
}
