"use client";

import { beyond } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { InteractiveCard } from "@/components/motion/InteractiveCard";
import { AnimatedLink } from "@/components/motion/AnimatedLink";

export function BeyondGrid() {
  const [highlight, ...rest] = beyond;

  return (
    <Section
      id="beyond"
      index="04"
      title="Beyond the screen"
      description="Debate, engineering, and leadership — where I build grit and communication."
    >
      {highlight ? (
        <Reveal variant="scale">
          <InteractiveCard className="mb-5 grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8 lg:mb-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-soft">
                {highlight.date}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink">{highlight.title}</h3>
              <p className="mt-1 font-medium text-accent">{highlight.subtitle}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                <RichText text={highlight.story} />
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:max-w-[200px] sm:justify-end">
              {highlight.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-black/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </InteractiveCard>
        </Reveal>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05} variant="up">
            <InteractiveCard className="flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-ink">{item.title}</h3>
                {item.date ? (
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-soft">
                    {item.date}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{item.subtitle}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.story}</p>
              {item.link ? (
                <AnimatedLink href={item.link} className="mt-4">
                  Learn more
                </AnimatedLink>
              ) : null}
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
