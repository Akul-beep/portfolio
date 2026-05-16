import {
  getTechnicalProjects,
  getImpactProjects,
  skills,
} from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Section, SubsectionLabel } from "@/components/ui/Section";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

export function WorkSection() {
  const technical = getTechnicalProjects();
  const impact = getImpactProjects();
  const [featured, ...restTechnical] = technical;

  const allSkills = [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
  ];

  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      description="Products I've shipped, research I've published, and ventures I've scaled."
    >
      {featured ? (
        <div className="mb-10">
          <SubsectionLabel>Featured</SubsectionLabel>
          <ProjectCard project={featured} index={0} featured />
        </div>
      ) : null}

      {restTechnical.length > 0 ? (
        <div className="mb-14">
          <SubsectionLabel>Technical</SubsectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            {restTechnical.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mb-12">
        <SubsectionLabel>Ventures & impact</SubsectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          {impact.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i + restTechnical.length + 1}
            />
          ))}
        </div>
      </div>

      <Reveal>
        <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] px-5 py-4 sm:px-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-soft">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <Chip key={skill} variant="default">
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
