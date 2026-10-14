import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeUp } from "@/components/FadeUp";
import { Photo } from "@/components/Photo";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Glanium Engineering",
  description:
    "Glanium Engineering is a general construction and metal fabrication company based in Nairobi, Kenya, specialising in premium aluminium, steel and architectural metalwork.",
  alternates: { canonical: "/about" },
};

const approach = [
  {
    title: "Fabrication",
    description:
      "We fabricate aluminium and steel elements in our workshop, working from confirmed measurements and design requirements.",
  },
  {
    title: "Installation",
    description:
      "Our team delivers and installs completed work on site, across Nairobi and other locations in Kenya.",
  },
  {
    title: "Service Coverage",
    description:
      "Glanium Engineering operates from Nairobi and provides delivery and installation services for projects across Kenya.",
  },
  {
    title: "Residential & Commercial Work",
    description:
      "We work with homeowners, architects, contractors and developers on both residential and commercial projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Glanium"
        title="Engineering Detail Into Every Finish."
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp className="flex flex-col justify-center gap-6">
              <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent-deep uppercase">
                Who We Are
              </span>
              <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                A General Construction &amp; Metal Fabrication Company
              </h2>
              <p className="text-charcoal/70">
                Glanium Engineering is based in Nairobi, Kenya, specialising in
                the manufacturing and installation of premium modern metal
                fixtures and architectural elements for residential and
                commercial buildings.
              </p>
              <p className="text-charcoal/70">
                Our work spans aluminium fabrication, steel fabrication,
                security gates, powder coating and finishing, architectural
                carpentry, and custom fabrication for architectural drawings
                and bespoke design requirements.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="aspect-[4/3] overflow-hidden">
              <Photo topic="metalDetail" alt="Close-up of fabricated metal surfaces in the workshop" />
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Our Approach" title="What We Do" />
          <div className="mt-14 grid grid-cols-1 border-t border-l border-charcoal/10 sm:grid-cols-2">
            {approach.map((item, i) => (
              <FadeUp
                key={item.title}
                delay={i * 0.06}
                className="flex flex-col gap-3 border-b border-r border-charcoal/10 p-8"
              >
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/65">{item.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <FadeUp className="flex flex-col items-center gap-5">
            <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Based In {siteConfig.location}
            </span>
            <p className="text-balance font-heading text-2xl font-medium text-cream sm:text-3xl">
              We operate from Nairobi and provide delivery and installation
              services for projects across Kenya.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Get To Know Our Work"
        description="Explore our services and projects, or reach out to discuss what you have in mind."
        whatsappKey="general"
      />
    </>
  );
}
