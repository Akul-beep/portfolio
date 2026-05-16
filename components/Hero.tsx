import Image from "next/image";
import { hero, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 border-b border-black/[0.06] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="page-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-soft">
                {site.location.city} · {site.location.country}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {site.name}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-2 text-lg font-medium text-accent sm:text-xl">{site.role}</p>
              <p className="mt-1 text-sm text-muted">{site.roleDetail}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-[1.125rem]">
                <RichText text={hero.positioning} />
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-black/[0.06] bg-white px-3 py-3 text-center shadow-sm"
                  >
                    <p className="text-xl font-bold text-ink sm:text-2xl">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-soft sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {hero.proofChips.map((chip) => (
                  <Chip key={chip} variant="accent">
                    {chip}
                  </Chip>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-md border border-success/25 bg-success/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
                  {site.status}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xl text-sm text-soft">{hero.intro}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#work">View work</Button>
                <Button href={site.resumeUrl} variant="ghost" download>
                  Resume
                </Button>
                <Button href={site.linkedin} variant="ghost" external>
                  LinkedIn
                </Button>
                <Button href={site.github} variant="ghost" external>
                  GitHub
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="flex w-full flex-col items-center lg:justify-self-center"
          >
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:max-w-[300px]">
              <Image
                src="/img1.png"
                alt={site.name}
                fill
                className="rounded-xl object-cover object-top"
                priority
                sizes="(max-width: 1024px) 280px, 300px"
              />
            </div>
            <p className="mt-4 w-full max-w-[280px] text-center text-sm text-soft lg:max-w-[300px]">
              {site.org}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
