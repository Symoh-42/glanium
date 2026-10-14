import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";
import { FadeUp } from "../FadeUp";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Our Work" title="Featured Projects" />
          <FadeUp delay={0.15}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 font-heading text-sm font-semibold text-ink transition-colors hover:text-accent-deep"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
