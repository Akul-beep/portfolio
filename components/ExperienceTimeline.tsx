import { experience } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      description="Internships, ventures, and teams."
      alt
    >
      <div className="divide-y divide-black/[0.06] rounded-2xl border border-black/[0.07] bg-white">
        {experience.map((item, i) => (
          <Reveal key={`${item.org}-${item.title}`} delay={i * 0.04}>
            <article className="grid gap-2 px-5 py-5 sm:grid-cols-[140px_1fr] sm:items-start sm:gap-8 sm:px-7 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-soft">
                {item.meta}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  {item.featured ? (
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="text-sm font-medium text-muted">{item.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 48)}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
