import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeUp } from "@/components/FadeUp";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { projectImageKeys } from "@/lib/images";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
  type Project,
} from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

const detailSections: { key: keyof Project; label: string }[] = [
  { key: "clientRequirement", label: "Client Requirement" },
  { key: "designApproach", label: "Design Approach" },
  { key: "fabrication", label: "Fabrication" },
  { key: "finishing", label: "Finishing" },
  { key: "installation", label: "Installation" },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const galleryImages = projectImageKeys(project.categories, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: project.title,
          about: project.overview,
          author: { "@type": "Organization", name: siteConfig.name },
        }}
      />

      <section className="relative flex h-[60vh] min-h-[420px] items-end bg-ink">
        <div className="absolute inset-0">
          <Photo topic={galleryImages[0]} alt={project.title} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 lg:px-10">
          <Link
            href="/projects"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-cream/70 hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {project.categories.join(" / ")}
          </span>
          <h1 className="mt-3 max-w-3xl text-balance font-heading text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
            {project.title}
          </h1>
          {project.location && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-cream/70">
              <MapPin className="h-4 w-4" /> {project.location}
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Project Overview
            </h2>
            <p className="mt-4 text-charcoal/70">{project.overview}</p>
          </FadeUp>

          <div className="mt-14 flex flex-wrap gap-2">
            {project.servicesProvided.map((service) => (
              <span
                key={service}
                className="border border-charcoal/15 px-3 py-1.5 text-xs font-medium text-charcoal/70"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-16 flex flex-col divide-y divide-charcoal/10 border-t border-charcoal/10">
            {detailSections.map((section, i) => (
              <FadeUp
                key={section.key}
                delay={i * 0.05}
                className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[200px_1fr]"
              >
                <h3 className="font-heading text-sm font-semibold tracking-wide text-accent-deep uppercase">
                  {section.label}
                </h3>
                <p className="text-charcoal/70">
                  {project[section.key] as string}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionGrid title="Project Gallery">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {galleryImages.map((topic, n) => (
                <div key={topic} className="aspect-[4/3] overflow-hidden">
                  <Photo topic={topic} alt={`${project.title} — image ${n + 1}`} />
                </div>
              ))}
            </div>
          </SectionGrid>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionGrid title="Related Projects">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedProject, i) => (
                  <ProjectCard
                    key={relatedProject.slug}
                    project={relatedProject}
                    index={i}
                  />
                ))}
              </div>
            </SectionGrid>
          </div>
        </section>
      )}

      <CTASection
        title="Interested In A Similar Project?"
        description="Share your project details and we will help you plan the fabrication and installation."
        whatsappKey="general"
      />
    </>
  );
}

function SectionGrid({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-10">{children}</div>
    </div>
  );
}
