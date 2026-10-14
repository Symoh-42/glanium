import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { FadeUp } from "@/components/FadeUp";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { serviceImageMap } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services | Aluminium, Steel, Gates & Finishing",
  description:
    "Aluminium fabrication, steel fabrication, security gates, powder coating and finishing, architectural carpentry and custom fabrication services from Glanium Engineering.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, i) => ({
            "@type": "Service",
            position: i + 1,
            name: service.name,
            description: service.description,
            provider: { "@type": "Organization", name: siteConfig.name },
            areaServed: siteConfig.serviceArea,
          })),
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Engineered For Every Requirement."
        description="From aluminium and steel fabrication to security gates and architectural finishing, every service is delivered with precision and a premium standard of craftsmanship."
      />

      <div className="divide-y divide-charcoal/10">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 bg-cream py-20 sm:py-28"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeUp className="flex flex-col justify-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-charcoal/15 text-accent-deep">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent-deep uppercase">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    {service.name}
                  </h2>
                  <p className="max-w-lg text-charcoal/70">{service.description}</p>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.include.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-charcoal/70 before:mr-2 before:text-accent-deep before:content-['—']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppCTA
                    messageKey={service.ctaMessageKey}
                    label={service.ctaLabel}
                    className="mt-2 w-fit"
                  />
                </FadeUp>

                <FadeUp delay={0.1} className="aspect-[4/3] overflow-hidden">
                  <Photo topic={serviceImageMap[service.slug]} alt={service.name} />
                </FadeUp>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Not Sure Which Service Fits Your Project?"
        description="Share your requirements with us and we will help you identify the right fabrication solution."
        whatsappKey="general"
      />
    </>
  );
}
