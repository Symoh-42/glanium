import { FadeUp } from "./FadeUp";

export function MaterialCard({
  label,
  value,
  tone = "dark",
  delay = 0,
}: {
  label: string;
  value: string;
  tone?: "dark" | "light";
  delay?: number;
}) {
  const isLight = tone === "light";
  return (
    <FadeUp
      delay={delay}
      className={`border p-6 ${isLight ? "border-cream/15" : "border-charcoal/15"}`}
    >
      <span
        className={`font-heading text-[11px] font-semibold tracking-[0.2em] uppercase ${
          isLight ? "text-accent" : "text-accent-deep"
        }`}
      >
        {label}
      </span>
      <p className={`mt-2 font-heading text-lg font-medium ${isLight ? "text-cream" : "text-ink"}`}>
        {value}
      </p>
    </FadeUp>
  );
}
