export type Service = {
  slug: string;
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  include: string[];
  ctaLabel: string;
  ctaMessageKey: "aluminium" | "steel" | "gate" | "commercial" | "general";
};

export const services: Service[] = [
  {
    slug: "aluminium-fabrication",
    icon: "SquareStack",
    name: "Aluminium Fabrication",
    shortDescription: "Premium powder-coated aluminium windows and doors.",
    description:
      "We design and fabricate aluminium window and door systems finished with durable powder coating, built to suit both residential and commercial architecture.",
    include: [
      "Aluminium windows",
      "Aluminium doors",
      "Custom configurations",
      "Powder-coated finishes",
      "Residential applications",
      "Commercial applications",
    ],
    ctaLabel: "Explore Aluminium",
    ctaMessageKey: "aluminium",
  },
  {
    slug: "steel-fabrication",
    icon: "Layers",
    name: "Steel Fabrication",
    shortDescription:
      "Modern steel fabrication for architectural and structural applications.",
    description:
      "From slim-frame windows to structural steelwork, we fabricate steel elements that combine strength with a refined architectural character.",
    include: [
      "Steel doors",
      "Slim-frame windows",
      "Steel structures",
      "Custom metalwork",
    ],
    ctaLabel: "Explore Steel",
    ctaMessageKey: "steel",
  },
  {
    slug: "security-gates",
    icon: "ShieldCheck",
    name: "Security Gates",
    shortDescription: "Automated, manual and sliding gates built to make an entrance.",
    description:
      "We design and fabricate gates that balance security with modern aesthetics, engineered for reliable, everyday performance.",
    include: [
      "Automated gates",
      "Manual gates",
      "Sliding gates",
      "Steel gates",
      "Custom entrance gates",
    ],
    ctaLabel: "Design Your Gate",
    ctaMessageKey: "gate",
  },
  {
    slug: "powder-coating-finishing",
    icon: "Sparkles",
    name: "Powder Coating & Finishing",
    shortDescription:
      "Surface finishing that transforms the appearance and durability of fabricated metalwork.",
    description:
      "Finishing is where fabricated metalwork becomes architecture. We prepare, coat and finish surfaces to a considered, premium standard.",
    include: [
      "Powder coating",
      "Colour selection",
      "Metal preparation",
      "Finishing",
      "Custom appearance",
    ],
    ctaLabel: "Discuss Finishing",
    ctaMessageKey: "general",
  },
  {
    slug: "architectural-carpentry",
    icon: "Ruler",
    name: "Architectural Carpentry",
    shortDescription: "A complementary architectural finishing service.",
    description:
      "Architectural carpentry complements our metalwork, contributing to the overall finish and detail of a project. Scope is confirmed per project.",
    include: ["Project-specific carpentry detailing"],
    ctaLabel: "Ask About Carpentry",
    ctaMessageKey: "general",
  },
  {
    slug: "custom-fabrication",
    icon: "PenTool",
    name: "Custom Fabrication",
    shortDescription:
      "For architectural drawings, custom dimensions and bespoke requirements.",
    description:
      "For clients working from architectural drawings, developer specifications or unique design requirements, we fabricate to precise, custom specifications.",
    include: [
      "Architectural drawings",
      "Custom dimensions",
      "Unique designs",
      "Developer specifications",
      "Bespoke requirements",
    ],
    ctaLabel: "Discuss Your Project",
    ctaMessageKey: "commercial",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
