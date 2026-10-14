import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { engineeringProcess, gateDesignProcess } from "@/lib/process";

export const metadata: Metadata = {
  title: "Our Process | Engineering & Fabrication Approach",
  description:
    "From understanding your requirements to inspection after installation — an overview of how Glanium Engineering approaches every fabrication project.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How We Approach Every Project."
        description="A structured process, from understanding your requirements through to installation and inspection."
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Engineering Process" title="Understand. Design. Fabricate. Install." />
          <div className="mt-14">
            <ProcessTimeline steps={engineeringProcess} tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Gate Design" title="Our Gate Design Process" tone="light" />
          <div className="mt-14">
            <ProcessTimeline steps={gateDesignProcess} tone="light" />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Begin?"
        description="Start the process with a conversation about your project."
        whatsappKey="general"
      />
    </>
  );
}
