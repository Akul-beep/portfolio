import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "dark";
};

export function Chip({ children, className, variant = "default" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        variant === "accent" && "bg-accent/10 text-accent",
        variant === "dark" && "bg-ink text-white",
        variant === "default" && "bg-black/[0.04] text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
