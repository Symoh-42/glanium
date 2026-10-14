import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SocialPortfolio } from "@/components/SocialPortfolio";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Social Portfolio",
  description:
    "Workshop fabrication, finished installations and project progress from Glanium Engineering across Instagram, TikTok and X.",
  alternates: { canonical: "/portfolio/social" },
};

export default function SocialPortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Portfolio"
        title="Workshop To Installation."
        description="A closer look at our fabrication process, gates, windows, doors and finished projects — as shared on Instagram, TikTok and X."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SocialPortfolio />

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm font-semibold text-ink hover:text-accent-deep"
            >
              Follow on Instagram
            </a>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm font-semibold text-ink hover:text-accent-deep"
            >
              Follow on TikTok
            </a>
            <a
              href={siteConfig.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm font-semibold text-ink hover:text-accent-deep"
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        description="Let's discuss how Glanium Engineering can bring this level of craftsmanship to your building."
        whatsappKey="general"
      />
    </>
  );
}
