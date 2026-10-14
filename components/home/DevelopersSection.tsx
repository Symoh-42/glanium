import Link from "next/link";
import { ArrowRight, FileSearch } from "lucide-react";
import { FadeUp } from "../FadeUp";

const items = [
  "Architectural drawings",
  "BOQs",
  "Project specifications",
  "Measurements",
  "Fabrication",
  "Installation",
  "Large-scale requirements",
];

export function DevelopersSection() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <FadeUp className="flex flex-col justify-center gap-6">
          <FileSearch className="h-8 w-8 text-accent" />
          <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Developers &amp; Contractors
          </span>
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Have Drawings? Let&rsquo;s Build From Them.
          </h2>
          <p className="max-w-md text-sm text-cream/70">
            We work with architects, contractors and developers on
            large-scale fabrication and installation requirements.
          </p>
          <Link
            href="/developers"
            className="group flex w-fit items-center gap-2 bg-accent px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-cream"
          >
            Submit Project Requirements
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeUp>

        <FadeUp delay={0.1} className="grid grid-cols-2 content-center gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="border border-cream/15 px-4 py-3 text-sm text-cream/75"
            >
              {item}
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
