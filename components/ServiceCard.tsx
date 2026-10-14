import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import { FadeUp } from "./FadeUp";
import type { Service } from "@/lib/services";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <FadeUp
      delay={(index ?? 0) * 0.06}
      className="group flex flex-col justify-between border border-charcoal/10 bg-cream p-8 transition-colors hover:border-accent/50"
    >
      <div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-charcoal/15 text-ink transition-colors group-hover:border-accent group-hover:text-accent-deep">
          <Icon name={service.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-ink">
          {service.name}
        </h3>
        <p className="mt-3 text-sm text-charcoal/70">
          {service.shortDescription}
        </p>
        <ul className="mt-5 flex flex-col gap-1.5">
          {service.include.slice(0, 4).map((item) => (
            <li
              key={item}
              className="text-xs tracking-wide text-charcoal/55 before:mr-2 before:text-accent-deep before:content-['—']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/services#${service.slug}`}
        className="mt-8 flex items-center gap-1.5 font-heading text-sm font-semibold text-ink transition-colors group-hover:text-accent-deep"
      >
        {service.ctaLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </FadeUp>
  );
}
