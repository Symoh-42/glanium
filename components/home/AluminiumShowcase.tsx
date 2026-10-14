import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { MaterialCard } from "../MaterialCard";
import { Photo } from "../Photo";
import { FadeUp } from "../FadeUp";

export function AluminiumShowcase() {
  return (
    <section id="aluminium" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between gap-10">
            <SectionHeader
              eyebrow="Aluminium"
              title="Clean Lines. Modern Performance."
              description="Premium aluminium windows and doors, fabricated with precision and finished with durable powder coating for a refined, contemporary look."
            />
            <div className="grid grid-cols-2 gap-4">
              <MaterialCard label="Profile" value="Custom / Project Dependent" delay={0.05} />
              <MaterialCard label="Finish" value="Powder Coated" delay={0.1} />
              <MaterialCard label="Application" value="Residential / Commercial" delay={0.15} />
              <MaterialCard label="Configuration" value="Project Specific" delay={0.2} />
            </div>
            <FadeUp delay={0.25}>
              <Link
                href="/products"
                className="group flex w-fit items-center gap-2 font-heading text-sm font-semibold text-ink transition-colors hover:text-accent-deep"
              >
                Explore Aluminium Products
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-2 aspect-[16/10] overflow-hidden">
              <Photo topic="aluminiumWindow" />
            </div>
            <div className="aspect-square overflow-hidden">
              <Photo topic="casementWindow" />
            </div>
            <div className="aspect-square overflow-hidden">
              <Photo topic="minimalFacade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
