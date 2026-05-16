import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghostOnDark";
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
}: ButtonProps) {
  const base = cn(
    "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-all duration-200",
    variant === "primary" &&
      "bg-ink text-white hover:bg-accent",
    variant === "secondary" &&
      "bg-accent text-white hover:bg-ink",
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

  if (isSpecial && !isHash) {
    return (
      <a
        href={href}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
