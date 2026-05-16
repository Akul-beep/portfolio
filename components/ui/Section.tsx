import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

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
          <header className="mb-12 flex flex-col gap-4 border-b border-black/[0.07] pb-8 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-soft">
                {index}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            </div>
            {description ? (
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-right">
                {description}
              </p>
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
