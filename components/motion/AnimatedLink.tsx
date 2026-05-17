"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** When false, same-tab navigation (e.g. #anchors). */
  external?: boolean;
};

export function AnimatedLink({
  href,
  children,
  className,
  external,
}: AnimatedLinkProps) {
  const reduceMotion = useReducedMotion();
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  const classes = cn("link-arrow group", className);

  if (reduceMotion) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
        <span aria-hidden>→</span>
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ x: 2 }}
      transition={springSnappy}
    >
      {children}
      <motion.span
        aria-hidden
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={springSnappy}
      >
        →
      </motion.span>
    </motion.a>
  );
}
