"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Photo } from "./Photo";
import { projectImageKeys } from "@/lib/images";
import type { Project } from "@/lib/projects";

export function GalleryLightbox({
  projects,
  index,
  onClose,
  onNavigate,
}: {
  projects: Project[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const project = projects[index];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % projects.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, projects.length, onClose, onNavigate]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 p-2 text-cream sm:right-8 sm:top-8"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate((index - 1 + projects.length) % projects.length)}
        aria-label="Previous project"
        className="absolute left-2 z-10 p-2 text-cream sm:left-6"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        onClick={() => onNavigate((index + 1) % projects.length)}
        aria-label="Next project"
        className="absolute right-2 z-10 p-2 text-cream sm:right-6"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <motion.div
        key={project.slug}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="grid w-full max-w-5xl grid-cols-1 gap-0 overflow-hidden bg-ink md:grid-cols-2"
      >
        <div className="aspect-[4/3] md:aspect-auto">
          <Photo topic={projectImageKeys(project.categories)[0]} alt={project.title} />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
          <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {project.categories.join(" / ")}
          </span>
          <h3 className="font-heading text-2xl font-semibold text-cream sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-sm text-cream/70">{project.overview}</p>
          <ul className="flex flex-wrap gap-2">
            {project.servicesProvided.map((service) => (
              <li
                key={service}
                className="border border-cream/20 px-3 py-1 text-xs text-cream/70"
              >
                {service}
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-2 flex w-fit items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold text-ink transition-colors hover:bg-cream"
          >
            View Full Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
