"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { tween } from "@/lib/motion";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  description,
  children,
  alt = false,
  className,
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "section-block scroll-mt-24",
        alt && "section-block--alt",
        className
      )}
    >
      <div className="page-shell">
        <Reveal>
          <header className="section-heading">
            <div className="section-heading__title">
              <motion.p
                className="text-[11px] font-bold uppercase tracking-[0.24em] text-soft"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={tween}
              >
                {index}
              </motion.p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            </div>
            {description ? (
              <p className="section-heading__desc">{description}</p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function SubsectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
      {children}
    </p>
  );
}
