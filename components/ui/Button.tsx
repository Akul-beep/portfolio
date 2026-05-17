"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { withBasePath } from "@/lib/paths";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghostOnDark";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const motionProps = {
  whileHover: { scale: 1.04, y: -1 },
  whileTap: { scale: 0.97 },
  transition: springSnappy,
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();

  const base = cn(
    "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors duration-200",
    variant === "primary" && "bg-ink text-white hover:bg-accent",
    variant === "secondary" && "bg-accent text-white hover:bg-ink",
    variant === "ghost" &&
      "border border-black/10 bg-white text-ink hover:border-ink/20",
    variant === "ghostOnDark" &&
      "border border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20",
    className
  );

  const isHash = href.startsWith("#");
  const isSpecial =
    external ||
    download ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http");

  const wrap = (node: ReactNode) =>
    reduceMotion ? (
      node
    ) : (
      <motion.span className="inline-flex h-11 items-center" {...motionProps}>
        {node}
      </motion.span>
    );

  if (isSpecial && !isHash) {
    return wrap(
      <a
        href={withBasePath(href)}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return wrap(
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
