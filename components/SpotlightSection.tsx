import { spotlight } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";

export function SpotlightSection() {
  return (
    <section
      id={spotlight.id}
      className="scroll-mt-24 border-y border-black/[0.06] bg-white/60 py-14 sm:py-16"
    >
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            {spotlight.badge}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {spotlight.title}
          </h2>
          <p className="mt-1 text-base font-medium text-muted">{spotlight.subtitle}</p>
          <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted">
            <RichText text={spotlight.body} />
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-6 max-w-3xl space-y-2.5">
            {spotlight.bullets.map((bullet) => (
              <li
                key={bullet.slice(0, 40)}
                className="flex gap-3 text-[15px] leading-relaxed text-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <RichText text={bullet} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {spotlight.tags.map((tag) => (
              <Chip key={tag} variant="accent">
                {tag}
              </Chip>
            ))}
            <a
              href={spotlight.link.href}
              className="link-arrow"
            >
              {spotlight.link.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
