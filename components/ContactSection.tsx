"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contact, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { springSnappy, tween } from "@/lib/motion";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="contact"
      index="05"
      title="Get in touch"
      description="Internships, collaborations, and building."
    >
      <Reveal variant="scale">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12"
          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
          transition={springSnappy}
        >
          {!reduceMotion ? (
            <motion.div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          ) : null}
          <div className="relative max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {contact.headline}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              <RichText
                text={contact.bio}
                className="text-white/70 [&_strong]:font-semibold [&_strong]:text-white"
              />
            </p>
            <motion.a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-white/80 underline-offset-2 hover:text-white hover:underline"
              whileHover={reduceMotion ? undefined : { x: 2 }}
              transition={springSnappy}
            >
              {site.email}
            </motion.a>
          </div>
          <motion.div
            className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...tween, delay: 0.15 }}
          >
            <Button
              href={`mailto:${site.email}`}
              variant="secondary"
              className="!bg-white !text-ink hover:!bg-accent hover:!text-white"
            >
              Email me
            </Button>
            <Button href={site.linkedin} variant="ghostOnDark" external>
              LinkedIn
            </Button>
            <Button href={site.github} variant="ghostOnDark" external>
              GitHub
            </Button>
            <Button href={site.resumePdfUrl} variant="ghostOnDark" external>
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </Reveal>
    </Section>
  );
}
