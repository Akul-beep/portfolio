"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function InteractiveCard({
  children,
  className,
  as = "article",
}: InteractiveCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    if (as === "article") {
      return <article className={cn("card-surface", className)}>{children}</article>;
    }
    return <div className={cn("card-surface", className)}>{children}</div>;
  }

  const MotionTag = as === "article" ? motion.article : motion.div;

  return (
    <MotionTag
      className={cn("card-surface", className)}
      whileHover={{
        y: -6,
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,92,0,0.06)",
      }}
      whileTap={{ scale: 0.995 }}
      transition={springSnappy}
    >
      {children}
    </MotionTag>
  );
}
