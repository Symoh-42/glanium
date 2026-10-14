import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { siteConfig, telLink } from "@/lib/site-config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a fabrication and installation quote from Glanium Engineering for aluminium, steel, gates, structures and finishing.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell Us About Your Project."
        description="Share your project details below and our team will get back to you with the next steps."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_280px] lg:px-10">
          <QuoteForm />

          <aside className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Prefer To Talk?
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={telLink()}
                  className="flex items-center gap-2 font-heading text-sm font-semibold text-ink hover:text-accent-deep"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
                </a>
                <WhatsAppCTA messageKey="quote" label="WhatsApp Us" className="w-fit" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Service Area
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">
                Based in {siteConfig.location}, delivering and installing
                across {siteConfig.serviceArea}.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Working With Drawings?
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">
                Architects, contractors and developers can submit detailed
                project requirements through our{" "}
                <a href="/developers" className="text-accent-deep underline underline-offset-2">
                  developers &amp; contractors form
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
