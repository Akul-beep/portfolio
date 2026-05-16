import { contact, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";

export function ContactSection() {
  return (
    <Section id="contact" index="05" title="Get in touch" description="Internships, collaborations, and building.">
      <Reveal>
        <div className="rounded-2xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {contact.headline}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              <RichText
                text={contact.bio}
                className="text-white/70 [&_strong]:font-semibold [&_strong]:text-white"
              />
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-white/80 underline-offset-2 hover:text-white hover:underline"
            >
              {site.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <Button
              href={`mailto:${site.email}`}
              variant="secondary"
              className="!bg-white !text-ink hover:!bg-accent hover:!text-white"
            >
              Email me
            </Button>
            <Button href={site.linkedin} variant="ghostOnDark" external>
              LinkedIn
            </Button>
            <Button href={site.github} variant="ghostOnDark" external>
              GitHub
            </Button>
            <Button href={site.resumeUrl} variant="ghostOnDark" download>
              Resume
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
