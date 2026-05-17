"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spotlight } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { tween } from "@/lib/motion";

export function SpotlightSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={spotlight.id}
      className="scroll-mt-24 border-y border-black/[0.06] bg-white/60 py-14 sm:py-16"
    >
      <div className="page-shell">
        <Reveal variant="right">
          <motion.p
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={tween}
          >
            {spotlight.badge}
          </motion.p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {spotlight.title}
          </h2>
          <p className="mt-1 text-base font-medium text-muted">{spotlight.subtitle}</p>
          <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted">
            <RichText text={spotlight.body} />
          </p>
        </Reveal>

        <Stagger className="mt-6 max-w-3xl space-y-2.5">
          {spotlight.bullets.map((bullet) => (
            <StaggerItem key={bullet.slice(0, 40)}>
              <div className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <RichText text={bullet} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {spotlight.tags.map((tag) => (
              <Chip key={tag} variant="accent">
                {tag}
              </Chip>
            ))}
            <AnimatedLink href={spotlight.link.href} external={false}>
              {spotlight.link.label}
            </AnimatedLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
