import { FadeUp } from "./FadeUp";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-cream/10 bg-ink pb-16 pt-36 sm:pt-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeUp className="flex max-w-3xl flex-col gap-5">
          <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            {eyebrow}
          </span>
          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-cream sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-xl text-balance text-cream/70">{description}</p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
