import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  label?: string;
  children: ReactNode;
  className?: string;
  padding?: "default" | "lg";
};

export function BentoCard({
  label,
  children,
  className,
  padding = "default",
}: BentoCardProps) {
  return (
    <article
      className={cn(
        "bento-card flex h-full flex-col",
        padding === "lg" ? "p-7 sm:p-8" : "p-5 sm:p-6",
        className
      )}
    >
      {label ? <p className="bento-label">{label}</p> : null}
      {children}
    </article>
  );
}
