import { SectionHeader } from "../SectionHeader";
import { Photo } from "../Photo";
import { FadeUp } from "../FadeUp";
import { WhatsAppCTA } from "../WhatsAppCTA";
import type { ImageKey } from "@/lib/images";

const gateTypes: { name: string; description: string; topic: ImageKey }[] = [
  {
    name: "Sliding Gates",
    description: "Steel sliding gates designed for smooth operation and a clean entrance.",
    topic: "gateSliding",
  },
  {
    name: "Automated Gates",
    description: "Automation paired with fabrication for reliable, everyday convenience.",
    topic: "gateDaytime",
  },
  {
    name: "Manual Gates",
    description: "Durable manual gates designed with security and appearance in mind.",
    topic: "gateFence",
  },
  {
    name: "Custom Steel Gates",
    description: "Bespoke gate designs fabricated to your property and preferences.",
    topic: "steelBeams",
  },
];

export function GatesShowcase() {
  return (
    <section id="gates" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Security Gates" title="Make an Entrance." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gateTypes.map((gate, i) => (
            <FadeUp key={gate.name} delay={i * 0.06} className="group flex flex-col">
              <div className="aspect-3/4 overflow-hidden">
                <Photo
                  topic={gate.topic}
                  alt={gate.name}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                {gate.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-charcoal/65">{gate.description}</p>
              <WhatsAppCTA messageKey="gate" label="Request Quote" className="mt-4 w-fit" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
