import { Photo } from "../Photo";
import { FadeUp } from "../FadeUp";
import { WhatsAppCTA } from "../WhatsAppCTA";

const residentialItems = [
  "Entrance doors",
  "Windows",
  "Sliding gates",
  "Security gates",
  "Architectural steelwork",
  "Interior / exterior metal details",
];

const commercialItems = [
  "Large window systems",
  "Entrance doors",
  "Gates",
  "Steel structures",
  "Architectural metalwork",
];

export function ResidentialCommercial() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="order-2 aspect-[4/3] overflow-hidden lg:order-1">
            <Photo topic="minimalFacade" alt="Residential metalwork on a modern facade" />
          </FadeUp>
          <div className="order-1 flex flex-col justify-center gap-6 lg:order-2">
            <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent-deep uppercase">
              Residential
            </span>
            <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Designed For The Way You Live.
            </h2>
            <ul className="grid grid-cols-2 gap-3">
              {residentialItems.map((item) => (
                <li
                  key={item}
                  className="text-sm text-charcoal/70 before:mr-2 before:text-accent-deep before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppCTA
              messageKey="general"
              label="Start a Residential Project"
              className="mt-2 w-fit"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-6">
            <span className="font-heading text-xs font-semibold tracking-[0.25em] text-accent-deep uppercase">
              Commercial
            </span>
            <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Architectural Fabrication For Commercial Spaces.
            </h2>
            <p className="text-sm text-charcoal/65">
              Serving offices, apartments, retail, hospitality and commercial
              developments.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {commercialItems.map((item) => (
                <li
                  key={item}
                  className="text-sm text-charcoal/70 before:mr-2 before:text-accent-deep before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppCTA
              messageKey="commercial"
              label="Discuss a Commercial Project"
              className="mt-2 w-fit"
            />
          </div>
          <FadeUp className="aspect-[4/3] overflow-hidden">
            <Photo topic="officeGlassDetail" alt="Commercial fabrication on a modern office building" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
