import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function CTASection({
  eyebrow = "Start Your Project",
  title,
  description,
  quoteHref = "/quote",
  quoteLabel = "Request a Quote",
  whatsappKey = "general",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  quoteHref?: string;
  quoteLabel?: string;
  whatsappKey?: "general" | "aluminium" | "steel" | "gate" | "commercial" | "quote";
}) {
  return (
    <section className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <FadeUp className="flex flex-col items-center gap-6">
          <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-balance text-cream/70">{description}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={quoteHref}
              className="group flex items-center gap-2 bg-accent px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-cream"
            >
              {quoteLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <WhatsAppCTA
              messageKey={whatsappKey}
              label="WhatsApp Us"
              variant="light"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
