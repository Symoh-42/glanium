import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects | Fabrication Portfolio",
  description:
    "Explore Glanium Engineering's fabrication and installation projects across aluminium, steel, gates, structures and finishing.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our Work, By Category."
        description="A selection of fabrication and installation work across residential and commercial projects. Filter by category to explore."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectGallery />
        </div>
      </section>

      <CTASection
        title="Want To See Your Building Look Like This?"
        description="Tell us about your project and we will help bring your vision to life."
        whatsappKey="general"
      />
    </>
  );
}
