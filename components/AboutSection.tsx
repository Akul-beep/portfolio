"use client";

import { education, personality, story, experience } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { InteractiveCard } from "@/components/motion/InteractiveCard";

export function AboutSection() {
  const featuredExp = experience.filter((e) => e.featured);
  const otherExp = experience.filter((e) => !e.featured).slice(0, 2);

  return (
    <Section
      id="about"
      index="03"
      title={story.headline}
      description="Developer, founder, and researcher."
      alt
    >
      <div className="mb-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <InteractiveCard className="h-full p-6 sm:p-7" as="div">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-soft">Education</p>
            <h3 className="mt-3 text-lg font-bold text-ink">{education.school}</h3>
            <ul className="mt-4 space-y-2">
              {education.programme.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <RichText text={line} />
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2 border-t border-black/[0.06] pt-4">
              {education.highlights.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <RichText text={line} />
                </li>
              ))}
            </ul>
          </InteractiveCard>
        </Reveal>

        <Reveal delay={0.06}>
          <InteractiveCard className="h-full p-6 sm:p-7" as="div">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-soft">Recent roles</p>
            <ul className="mt-5 space-y-5">
              {[...featuredExp, ...otherExp].map((item) => (
                <li
                  key={`${item.org}-${item.title}`}
                  className="border-b border-black/[0.06] pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                    {item.meta}
                  </p>
                  <p className="mt-1 font-bold text-ink">{item.title}</p>
                  <p className="text-sm text-muted">{item.org}</p>
                  <p className="mt-1.5 text-sm text-muted">
                    <RichText text={item.bullets[0] ?? ""} />
                  </p>
                </li>
              ))}
            </ul>
            <a href="#experience" className="link-arrow mt-6">
              Full timeline
              <span aria-hidden>→</span>
            </a>
          </InteractiveCard>
        </Reveal>
      </div>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {personality.interests.map((interest) => (
              <Chip key={interest} variant="accent">
                {interest}
              </Chip>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <InteractiveCard
            as="div"
            className="border-l-0 p-6 text-lg font-medium leading-relaxed text-ink/90 sm:p-7"
          >
            {personality.paragraphs[0]}
          </InteractiveCard>
        </Reveal>
      </div>
    </Section>
  );
}
