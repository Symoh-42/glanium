import { SectionHeader } from "../SectionHeader";
import { FadeUp } from "../FadeUp";
import { Icon } from "../Icon";

const points = [
  { number: "01", title: "Custom Fabrication", icon: "PenTool", description: "Fabricated to your dimensions, drawings and design requirements." },
  { number: "02", title: "Modern Design", icon: "Compass", description: "Clean, contemporary detailing suited to modern architecture." },
  { number: "03", title: "Precision", icon: "Ruler", description: "Careful measurement and fabrication at every stage." },
  { number: "04", title: "Quality Finishing", icon: "Sparkles", description: "Finishing treatments applied with attention to detail." },
  { number: "05", title: "Installation", icon: "Wrench", description: "Completed work delivered and installed on site." },
  { number: "06", title: "Countrywide Service", icon: "Truck", description: "Delivery and installation for projects across Kenya." },
];

export function WhyGlanium() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Why Glanium" title="Why Work With Glanium Engineering." />

        <div className="mt-14 grid grid-cols-1 border-t border-l border-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <FadeUp
              key={point.number}
              delay={i * 0.05}
              className="flex flex-col gap-4 border-b border-r border-charcoal/10 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl font-bold text-ink/10">
                  {point.number}
                </span>
                <Icon name={point.icon} className="h-5 w-5 text-accent-deep" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="text-sm text-charcoal/65">{point.description}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
