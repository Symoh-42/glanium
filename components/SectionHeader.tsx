import { FadeUp } from "./FadeUp";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const isLight = tone === "light";
  return (
    <FadeUp
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span
          className={`font-heading text-xs font-semibold tracking-[0.25em] uppercase ${
            isLight ? "text-accent" : "text-accent-deep"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${
          isLight ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-balance text-base sm:text-lg ${
            isLight ? "text-cream/70" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
