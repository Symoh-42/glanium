import { FadeUp } from "./FadeUp";
import type { ProcessStep } from "@/lib/process";

export function ProcessTimeline({
  steps,
  tone = "dark",
}: {
  steps: ProcessStep[];
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <FadeUp
          key={step.number}
          delay={i * 0.06}
          className={`flex flex-col gap-4 border-t p-6 sm:p-8 ${
            isLight ? "border-cream/15" : "border-charcoal/10"
          } ${i % 2 === 1 ? "sm:border-l" : ""} ${
            i % 3 !== 0 ? "lg:border-l" : ""
          } ${isLight ? "lg:border-cream/15" : "lg:border-charcoal/10"}`}
        >
          <span
            className={`font-heading text-4xl font-bold ${
              isLight ? "text-cream/20" : "text-ink/10"
            }`}
          >
            {step.number}
          </span>
          <h3
            className={`font-heading text-lg font-semibold ${
              isLight ? "text-cream" : "text-ink"
            }`}
          >
            {step.title}
          </h3>
          <p className={`text-sm ${isLight ? "text-cream/65" : "text-charcoal/65"}`}>
            {step.description}
          </p>
        </FadeUp>
      ))}
    </div>
  );
}
