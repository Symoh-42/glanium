import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig, telLink, whatsappLink, whatsappMessages } from "@/lib/site-config";
import { WhatsAppGlyph } from "./WhatsAppButton";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-charcoal/10 bg-cream/95 backdrop-blur-sm shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-3 font-heading text-[11px] font-semibold tracking-wide text-ink"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      >
        <WhatsAppGlyph className="h-5 w-5 text-[#25D366]" />
        WhatsApp
      </a>
      <a
        href={telLink()}
        className="flex flex-col items-center gap-1 border-x border-charcoal/10 py-3 font-heading text-[11px] font-semibold tracking-wide text-ink"
      >
        <Phone className="h-5 w-5" />
        Call
      </a>
      <Link
        href="/quote"
        className="flex flex-col items-center justify-center gap-1 bg-accent py-3 font-heading text-[11px] font-semibold tracking-wide text-ink"
      >
        <span className="text-base leading-none">+</span>
        Quote
      </Link>
    </div>
  );
}
