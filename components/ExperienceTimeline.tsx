"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { tween } from "@/lib/motion";

export function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      description="Internships, ventures, and teams."
      alt
    >
      <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
        {experience.map((item, i) => (
          <motion.article
            key={`${item.org}-${item.title}`}
            className="border-b border-black/[0.06] last:border-b-0"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...tween, delay: i * 0.03 }}
            whileHover={reduceMotion ? undefined : { backgroundColor: "rgba(0,0,0,0.012)" }}
          >
            <div className="grid gap-4 px-5 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:px-7 sm:py-6">
              <div className="flex sm:block sm:border-r sm:border-black/[0.08] sm:pr-6">
                <p className="timeline-date shrink-0 sm:w-full">{item.meta}</p>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  {item.featured ? (
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 text-sm font-medium text-muted">{item.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 48)}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80"
                        aria-hidden
                      />
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
