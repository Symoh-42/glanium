import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeUp } from "@/components/FadeUp";
import { siteConfig, telLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Glanium Engineering",
  description:
    "Contact Glanium Engineering in Nairobi, Kenya for aluminium, steel, gates and metal fabrication enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch."
        description="We would be glad to hear about your project. Reach us by phone, WhatsApp or the form below."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_280px] lg:px-10">
          <ContactForm />

          <aside className="flex flex-col gap-8">
            <FadeUp>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Glanium Engineering
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-charcoal/75">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-deep" /> {siteConfig.location}
                </span>
                <a
                  href={telLink()}
                  className="flex items-center gap-2 font-semibold text-ink hover:text-accent-deep"
                >
                  <Phone className="h-4 w-4 text-accent-deep" /> {siteConfig.phoneDisplay}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.05} className="flex flex-col gap-3">
              <a
                href={telLink()}
                className="flex items-center justify-center border border-ink px-5 py-3 font-heading text-sm font-semibold text-ink hover:bg-ink hover:text-cream"
              >
                Call Us
              </a>
              <WhatsAppCTA
                messageKey="general"
                label="WhatsApp"
                className="w-full justify-center"
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Follow Us
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-charcoal/70 hover:text-accent-deep"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-charcoal/70 hover:text-accent-deep"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-charcoal/70 hover:text-accent-deep"
                >
                  <XIcon className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-charcoal/50 uppercase">
                Business Enquiries
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">
                Architects, contractors and developers can submit full
                project requirements through our{" "}
                <a href="/developers" className="text-accent-deep underline underline-offset-2">
                  developers &amp; contractors page
                </a>
                .
              </p>
            </FadeUp>
          </aside>
        </div>
      </section>
    </>
  );
}
