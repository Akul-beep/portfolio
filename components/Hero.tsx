"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { RichText } from "@/components/ui/RichText";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TypewriterLine } from "@/components/motion/TypewriterLine";
import { tween } from "@/lib/motion";

const heroBadge =
  "inline-flex min-h-8 items-center justify-center rounded-md px-2.5 py-1.5 text-[10px] font-semibold uppercase leading-none tracking-wide sm:text-[11px]";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="scroll-mt-20 overflow-hidden border-b border-black/[0.06] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="page-shell">
        <motion.div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 xl:gap-16">
          <Stagger className="flex max-w-2xl flex-col gap-6 sm:gap-7">
            <StaggerItem className="space-y-2">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {site.name.split(" ").map((word, i) => (
                  <motion.span
                    key={word}
                    className="mr-[0.2em] inline-block"
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...tween, delay: 0.08 + i * 0.06 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <TypewriterLine
                phrases={hero.typewriterPhrases}
                className="min-h-[1.75rem] text-lg font-medium text-accent sm:min-h-[2rem] sm:text-xl"
              />
              <p className="text-sm text-muted">{site.roleDetail}</p>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-[1.125rem]">
                <RichText text={hero.positioning} />
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {hero.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-xl border border-black/[0.06] bg-white px-2.5 py-3 text-center shadow-sm sm:min-h-[5.75rem] sm:px-3"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    <p className="text-xl font-bold leading-none text-ink sm:text-2xl">
                      <CountUp value={stat.value} />
                    </p>
                    <p className="mt-2 flex min-h-[2.25rem] items-center justify-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-soft sm:text-[11px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-2">
                {hero.proofChips.map((chip) => (
                  <Chip key={chip} variant="accent">
                    {chip}
                  </Chip>
                ))}
                <motion.span
                  className={`${heroBadge} gap-1.5 border border-success/25 bg-success/5 text-success`}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 0 rgba(22,163,74,0)",
                            "0 0 12px rgba(22,163,74,0.25)",
                            "0 0 0 rgba(22,163,74,0)",
                          ],
                        }
                  }
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                  <span className="max-w-[14rem] text-center sm:max-w-none sm:whitespace-nowrap">
                    {site.status}
                  </span>
                </motion.span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-xl text-sm leading-relaxed text-soft">{hero.intro}</p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Button href="#work">View work</Button>
                <Button href={site.resumeUrl} variant="ghost" download>
                  Resume
                </Button>
                <Button href={site.linkedin} variant="ghost" external>
                  LinkedIn
                </Button>
                <Button href={site.github} variant="ghost" external>
                  GitHub
                </Button>
              </div>
            </StaggerItem>
          </Stagger>

          <motion.div
            className="flex w-full flex-col items-center lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...tween, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:max-w-[300px]"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            >
              <Image
                src="/img1.png"
                alt={site.name}
                fill
                className="rounded-xl object-cover object-top"
                priority
                sizes="(max-width: 1024px) 280px, 300px"
              />
            </motion.div>
            <p className="mt-2.5 w-full max-w-[280px] text-center text-sm text-soft lg:max-w-[300px]">
              {site.org}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
