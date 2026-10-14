import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Photo } from "../Photo";
import { FadeUp } from "../FadeUp";

const pillars = ["FORM", "FUNCTION", "STRUCTURE"];

export function SteelShowcase() {
  return (
    <section id="steel" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Steel"
          title="Steel, Reimagined."
          description="Steel allows us to create strong architectural elements without sacrificing visual character."
          tone="light"
        />

        <div className="mt-14 flex flex-wrap gap-x-12 gap-y-4 border-y border-cream/10 py-8">
          {pillars.map((pillar, i) => (
            <FadeUp
              key={pillar}
              delay={i * 0.08}
              className="font-heading text-4xl font-bold tracking-tight text-cream/20 sm:text-6xl"
            >
              {pillar}
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="aspect-4/5 overflow-hidden sm:col-span-2 sm:row-span-2 sm:aspect-auto">
            <Photo topic="steelFacade" />
          </div>
          <div className="aspect-square overflow-hidden">
            <Photo topic="steelBeams" />
          </div>
          <div className="aspect-square overflow-hidden">
            <Photo topic="metalDetail" />
          </div>
        </div>

        <FadeUp delay={0.2}>
          <Link
            href="/services#steel-fabrication"
            className="group mt-10 flex w-fit items-center gap-2 font-heading text-sm font-semibold text-cream transition-colors hover:text-accent"
          >
            Explore Steel
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
