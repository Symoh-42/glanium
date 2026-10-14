import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DeveloperForm } from "@/components/DeveloperForm";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Developers & Contractors",
  description:
    "Architects, contractors and developers can submit architectural drawings, BOQs and project specifications to Glanium Engineering for fabrication and installation.",
  alternates: { canonical: "/developers" },
};

const workWith = [
  "Architectural drawings",
  "BOQs",
  "Project specifications",
  "Measurements",
  "Fabrication",
  "Installation",
  "Large-scale requirements",
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers & Contractors"
        title="Have Drawings? Let's Build From Them."
        description="Submit your project requirements and our team will review your drawings, specifications and scope."
      />

      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_260px] lg:px-10">
          <DeveloperForm />

          <FadeUp className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-cream/50 uppercase">
              We Work With
            </h3>
            <ul className="flex flex-col gap-2">
              {workWith.map((item) => (
                <li
                  key={item}
                  className="border border-cream/10 px-4 py-2.5 text-sm text-cream/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
