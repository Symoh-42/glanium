"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "./Photo";
import { GalleryLightbox } from "./GalleryLightbox";
import { projectImageKeys } from "@/lib/images";
import { projectCategories, projects, type ProjectCategory } from "@/lib/projects";

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`border px-4 py-2 font-heading text-xs font-semibold tracking-wide uppercase transition-colors ${
            activeFilter === "all"
              ? "border-ink bg-ink text-cream"
              : "border-charcoal/20 text-charcoal/70 hover:border-ink"
          }`}
        >
          All
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveFilter(category.id)}
            className={`border px-4 py-2 font-heading text-xs font-semibold tracking-wide uppercase transition-colors ${
              activeFilter === category.id
                ? "border-ink bg-ink text-cream"
                : "border-charcoal/20 text-charcoal/70 hover:border-ink"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.button
              key={project.slug}
              layout
              type="button"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`group relative block w-full overflow-hidden text-left ${
                i % 5 === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Photo
                topic={projectImageKeys(project.categories)[0]}
                alt={project.title}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <span className="font-heading text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                    {project.categories[0]}
                  </span>
                  <p className="mt-1 font-heading text-base font-semibold text-cream">
                    {project.title}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-charcoal/60">
          No projects in this category yet. Check back soon.
        </p>
      )}

      {lightboxIndex !== null && (
        <GalleryLightbox
          projects={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
