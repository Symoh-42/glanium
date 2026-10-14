import { MapPin } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { FadeUp } from "../FadeUp";
import { WhatsAppCTA } from "../WhatsAppCTA";
import { siteConfig } from "@/lib/site-config";

export function CountrywideSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-6">
            <SectionHeader
              eyebrow="Countrywide Service"
              title="Built In Nairobi. Delivered Across Kenya."
              description="Glanium Engineering operates from Nairobi and provides delivery and installation services for projects across Kenya."
            />
            <WhatsAppCTA
              messageKey="general"
              label="Discuss Your Location"
              className="mt-2 w-fit"
            />
          </div>

          <FadeUp delay={0.1} className="relative flex aspect-[4/3] items-center justify-center border border-charcoal/10 bg-charcoal/[0.03]">
            <svg viewBox="0 0 300 260" className="h-4/5 w-4/5" aria-hidden="true">
              <line x1="150" y1="130" x2="90" y2="60" stroke="#ABA6A3" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="150" y1="130" x2="210" y2="200" stroke="#ABA6A3" strokeWidth="1" strokeDasharray="4 4" />
              {[
                { x: 150, y: 130, label: "Nairobi", primary: true },
                { x: 90, y: 60, label: "Kisumu", primary: false },
                { x: 210, y: 200, label: "Machakos", primary: false },
              ].map((point) => (
                <g key={point.label}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={point.primary ? 7 : 5}
                    fill={point.primary ? "#00A9E8" : "#0E1240"}
                  />
                  <text
                    x={point.x}
                    y={point.y - 14}
                    textAnchor="middle"
                    className="font-heading"
                    fontSize="12"
                    fontWeight={600}
                    fill="#1E2352"
                  >
                    {point.label}
                  </text>
                </g>
              ))}
            </svg>
            <span className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-charcoal/40">
              <MapPin className="h-3 w-3" /> Illustrative service area — not to scale
            </span>
          </FadeUp>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-charcoal/55">
          Example service and project locations, shown for illustration.
          Glanium Engineering is based in {siteConfig.location} and does not
          operate permanent branch offices in other counties.
        </p>
      </div>
    </section>
  );
}
