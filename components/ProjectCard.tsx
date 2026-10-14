import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Photo } from "./Photo";
import { FadeUp } from "./FadeUp";
import { projectImageKeys } from "@/lib/images";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <FadeUp delay={(index ?? 0) * 0.05} className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Photo
            topic={projectImageKeys(project.categories)[0]}
            alt={project.title}
            className="transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/80 to-transparent p-4">
            <span className="font-heading text-[10px] font-semibold tracking-[0.2em] text-cream uppercase">
              {project.categories[0]}
            </span>
            <ArrowUpRight className="h-4 w-4 text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-2">
          <h3 className="font-heading text-base font-semibold text-ink transition-colors group-hover:text-accent-deep">
            {project.title}
          </h3>
        </div>
        {project.location && (
          <p className="mt-1 flex items-center gap-1 text-xs text-charcoal/55">
            <MapPin className="h-3.5 w-3.5" /> {project.location}
          </p>
        )}
      </Link>
    </FadeUp>
  );
}
