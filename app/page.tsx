import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SocialPortfolio } from "@/components/SocialPortfolio";
import { FadeUp } from "@/components/FadeUp";
import { IntroSection } from "@/components/home/IntroSection";
import { AluminiumShowcase } from "@/components/home/AluminiumShowcase";
import { SteelShowcase } from "@/components/home/SteelShowcase";
import { GatesShowcase } from "@/components/home/GatesShowcase";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FabricationProcessSection } from "@/components/home/FabricationProcessSection";
import { ResidentialCommercial } from "@/components/home/ResidentialCommercial";
import { DevelopersSection } from "@/components/home/DevelopersSection";
import { CountrywideSection } from "@/components/home/CountrywideSection";
import { WhyGlanium } from "@/components/home/WhyGlanium";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Glanium Engineering | Aluminium, Steel & Metal Fabrication Kenya",
  description:
    "Glanium Engineering provides premium aluminium fabrication, steel structures, modern doors, windows, security gates, powder coating and architectural metalwork in Nairobi and across Kenya.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="Services" title="Engineered For Every Requirement" />
            <FadeUp delay={0.15}>
              <Link
                href="/services"
                className="group flex items-center gap-2 font-heading text-sm font-semibold text-ink transition-colors hover:text-accent-deep"
              >
                View All Services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </FadeUp>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AluminiumShowcase />
      <SteelShowcase />
      <GatesShowcase />
      <FeaturedProjects />
      <FabricationProcessSection />
      <ResidentialCommercial />
      <DevelopersSection />
      <CountrywideSection />

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Social"
              title="Workshop To Installation"
              tone="light"
            />
            <FadeUp delay={0.15}>
              <Link
                href="/portfolio/social"
                className="group flex items-center gap-2 font-heading text-sm font-semibold text-cream transition-colors hover:text-accent"
              >
                View Social Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </FadeUp>
          </div>
          <div className="mt-14">
            <SocialPortfolio limit={6} />
          </div>
        </div>
      </section>

      <WhyGlanium />

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
          <div className="mt-14">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Start Your Project?"
        description="Tell us about your building, your vision and your requirements. We will get back to you with the next steps."
        whatsappKey="quote"
      />
    </>
  );
}
