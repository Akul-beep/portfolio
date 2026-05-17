"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "dark";
};

export function Chip({ children, className, variant = "default" }: ChipProps) {
  const reduceMotion = useReducedMotion();

  const styles = cn(
    "inline-flex min-h-8 items-center justify-center rounded-md px-2.5 py-1.5 text-[10px] font-semibold uppercase leading-none tracking-wide sm:text-[11px]",
    variant === "accent" && "bg-accent/10 text-accent",
    variant === "dark" && "bg-ink text-white",
    variant === "default" && "bg-black/[0.04] text-muted",
    className
  );

  if (reduceMotion) {
    return <span className={styles}>{children}</span>;
  }

  return (
    <motion.span
      className={styles}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={springSnappy}
    >
      {children}
    </motion.span>
  );
}
