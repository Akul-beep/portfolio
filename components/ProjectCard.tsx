"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.06} variant="scale">
      <motion.article
        className={cn(
          "card-surface group flex h-full flex-col p-6 sm:p-7",
          featured && "lg:flex-row lg:gap-10 lg:p-8"
        )}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -8,
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.04), 0 24px 56px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,92,0,0.08)",
              }
        }
        transition={springSnappy}
      >
        <div
          className={cn(
            "flex shrink-0 items-start justify-between gap-4",
            featured && "lg:w-[42%] lg:flex-col lg:justify-start"
          )}
        >
          {project.image ? (
            <motion.div
              className={cn(
                "relative overflow-hidden rounded-xl border border-black/[0.06]",
                project.imageFit === "contain"
                  ? featured
                    ? "h-14 w-28"
                    : "h-12 w-24"
                  : featured
                    ? "h-16 w-16"
                    : "h-14 w-14"
              )}
              style={{
                backgroundColor:
                  project.imageBg ??
                  (project.imageFit === "contain" ? "#ffffff" : "#0c0c0c"),
              }}
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              transition={springSnappy}
            >
              <Image
                src={project.image}
                alt={`${project.title} logo`}
                fill
                className={
                  project.imageFit === "contain" ? "object-contain p-1" : "object-cover"
                }
                sizes={featured ? "112px" : "96px"}
              />
            </motion.div>
          ) : (
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: project.color }}
            >
              {project.imageFallback}
            </div>
          )}
          <p
            className="text-xs font-bold uppercase tracking-wider transition-colors duration-300"
            style={{ color: project.color }}
          >
            {project.impact}
          </p>
        </div>

        <div className={cn("mt-5 flex flex-1 flex-col", featured && "lg:mt-0")}>
          <h3 className="text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">{project.tagline}</p>
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed text-muted",
              !featured && "line-clamp-4"
            )}
          >
            {project.problem}
          </p>
          {featured ? (
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{project.approach}</p>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          {project.links.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-4 border-t border-black/[0.06] pt-5">
              {project.links.map((link) => (
                <AnimatedLink key={link.href} href={link.href}>
                  {link.label}
                </AnimatedLink>
              ))}
            </div>
          ) : null}
        </div>
      </motion.article>
    </Reveal>
  );
}
