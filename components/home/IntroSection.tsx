import { SectionHeader } from "../SectionHeader";
import { FadeUp } from "../FadeUp";

const categories = [
  {
    number: "01",
    name: "Aluminium",
    description: "Windows, doors and custom frame systems with clean, modern lines.",
  },
  {
    number: "02",
    name: "Steel",
    description: "Doors, slim-frame windows and structural fabrication.",
  },
  {
    number: "03",
    name: "Architectural Finishes",
    description: "Powder coating and finishing that complete the design.",
  },
];

export function IntroSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Metalwork That Becomes Part of the Architecture."
          description="We combine fabrication expertise, modern design and precision installation to create architectural metalwork that complements the spaces it belongs to."
        />

        <div className="mt-16 grid grid-cols-1 gap-0 border-t border-charcoal/10 sm:grid-cols-3">
          {categories.map((category, i) => (
            <FadeUp
              key={category.number}
              delay={i * 0.08}
              className={`flex flex-col gap-4 border-b border-charcoal/10 py-10 pr-6 sm:border-b-0 sm:py-14 ${
                i !== 0 ? "sm:border-l sm:border-charcoal/10 sm:pl-10" : ""
              }`}
            >
              <span className="font-heading text-5xl font-bold text-ink/10 sm:text-6xl">
                {category.number}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-ink">
                {category.name}
              </h3>
              <p className="max-w-xs text-sm text-charcoal/65">
                {category.description}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
