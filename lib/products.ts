export type ProductCategory = "aluminium" | "steel" | "security" | "finishes";

export type Product = {
  slug: string;
  category: ProductCategory;
  name: string;
  description: string;
  applications: string[];
  configurations: string;
  ctaMessageKey: "aluminium" | "steel" | "gate" | "commercial" | "general";
};

export const productCategories: {
  id: ProductCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "aluminium",
    label: "Aluminium",
    description: "Windows, doors and custom frame systems.",
  },
  {
    id: "steel",
    label: "Steel",
    description: "Doors, slim-frame windows and structural steelwork.",
  },
  {
    id: "security",
    label: "Security",
    description: "Sliding, manual and automated gates.",
  },
  {
    id: "finishes",
    label: "Finishes",
    description: "Powder coating and custom metal finishing.",
  },
];

export const products: Product[] = [
  {
    slug: "aluminium-windows",
    category: "aluminium",
    name: "Aluminium Windows",
    description:
      "Slim, modern aluminium window systems finished with durable powder coating for residential and commercial buildings.",
    applications: ["Residential", "Commercial"],
    configurations: "Project specific",
    ctaMessageKey: "aluminium",
  },
  {
    slug: "aluminium-doors",
    category: "aluminium",
    name: "Aluminium Doors",
    description:
      "Contemporary aluminium door systems designed for clean lines and reliable everyday use.",
    applications: ["Residential", "Commercial"],
    configurations: "Project specific",
    ctaMessageKey: "aluminium",
  },
  {
    slug: "custom-frames",
    category: "aluminium",
    name: "Custom Frames",
    description:
      "Bespoke aluminium framing fabricated to architectural drawings and specific dimensions.",
    applications: ["Residential", "Commercial", "Developer projects"],
    configurations: "Custom / project dependent",
    ctaMessageKey: "aluminium",
  },
  {
    slug: "steel-doors",
    category: "steel",
    name: "Steel Doors",
    description:
      "Solid steel doors fabricated for durability and a strong architectural presence.",
    applications: ["Residential", "Commercial"],
    configurations: "Project specific",
    ctaMessageKey: "steel",
  },
  {
    slug: "slim-frame-windows",
    category: "steel",
    name: "Slim-Frame Windows",
    description:
      "Slim-frame steel casement windows that bring a refined, minimal profile to modern facades.",
    applications: ["Residential", "Commercial"],
    configurations: "Project specific",
    ctaMessageKey: "steel",
  },
  {
    slug: "steel-structures",
    category: "steel",
    name: "Steel Structures",
    description:
      "Structural steel fabrication for architectural and functional building elements.",
    applications: ["Commercial", "Developer projects"],
    configurations: "Custom / project dependent",
    ctaMessageKey: "steel",
  },
  {
    slug: "sliding-gates",
    category: "security",
    name: "Sliding Gates",
    description:
      "Steel sliding gates fabricated for smooth operation and a clean, modern entrance.",
    applications: ["Residential", "Commercial"],
    configurations: "Custom / project dependent",
    ctaMessageKey: "gate",
  },
  {
    slug: "manual-gates",
    category: "security",
    name: "Manual Gates",
    description:
      "Durable manual security gates designed with attention to both security and appearance.",
    applications: ["Residential", "Commercial"],
    configurations: "Custom / project dependent",
    ctaMessageKey: "gate",
  },
  {
    slug: "automated-gates",
    category: "security",
    name: "Automated Gates",
    description:
      "Automated gate systems combining our fabrication with reliable automation for everyday convenience.",
    applications: ["Residential", "Commercial"],
    configurations: "Custom / project dependent",
    ctaMessageKey: "gate",
  },
  {
    slug: "powder-coating",
    category: "finishes",
    name: "Powder Coating",
    description:
      "Durable powder-coated finishes applied to fabricated aluminium and steel elements.",
    applications: ["Residential", "Commercial"],
    configurations: "Colour and finish selected per project",
    ctaMessageKey: "general",
  },
  {
    slug: "custom-finishing",
    category: "finishes",
    name: "Custom Finishing",
    description:
      "Additional finishing treatments to achieve a specific architectural appearance.",
    applications: ["Residential", "Commercial"],
    configurations: "Project specific",
    ctaMessageKey: "general",
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
