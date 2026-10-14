/**
 * Curated stock photography (free-to-use Unsplash License, verified live).
 * Swap these for real Glanium project/workshop photography as it becomes
 * available — the `topic` keys used across components can stay the same.
 */
export type ImageKey =
  | "heroEntrance"
  | "aluminiumWindow"
  | "steelFacade"
  | "minimalFacade"
  | "gateSliding"
  | "gateFence"
  | "gateDaytime"
  | "steelBeams"
  | "officeGlassDetail"
  | "officeFacade"
  | "metalDetail"
  | "casementWindow";

export const images: Record<ImageKey, { id: string; alt: string }> = {
  heroEntrance: {
    id: "photo-1756486055411-1e41b45ecd83",
    alt: "Modern building entrance with glass and metal architectural details",
  },
  aluminiumWindow: {
    id: "photo-1617133094199-77a081d17b4f",
    alt: "Black aluminium-framed glass window",
  },
  steelFacade: {
    id: "photo-1758846946188-12316e71c680",
    alt: "Modern glass and steel building facade detail",
  },
  minimalFacade: {
    id: "photo-1759795075729-39ffc0efaaa0",
    alt: "Minimalist modern building facade with windows",
  },
  gateSliding: {
    id: "photo-1610529079154-e7adfb87558c",
    alt: "Black metal gate beside a matching fence",
  },
  gateFence: {
    id: "photo-1563902660142-d13851243d13",
    alt: "Black metal fence and gate detail",
  },
  gateDaytime: {
    id: "photo-1588861672468-582716d64073",
    alt: "Black metal fence at a property entrance",
  },
  steelBeams: {
    id: "photo-1751757639086-f56b7fdea111",
    alt: "Steel beam structural framework",
  },
  officeGlassDetail: {
    id: "photo-1757954694963-ea693d2cb1dc",
    alt: "Modern glass office building exterior detail",
  },
  officeFacade: {
    id: "photo-1745015446589-7ee6f702d8c1",
    alt: "Glass facade of a modern commercial building",
  },
  metalDetail: {
    id: "photo-1759064776046-45b988af4b6d",
    alt: "Close-up of fabricated metal surfaces",
  },
  casementWindow: {
    id: "photo-1495524455245-b0f961d738a9",
    alt: "Steel-framed casement window",
  },
};

export function unsplashUrl(key: ImageKey, width = 1600) {
  return `https://images.unsplash.com/${images[key].id}?auto=format&fit=crop&w=${width}&q=80`;
}

const categoryImageMap: Record<string, ImageKey> = {
  residential: "minimalFacade",
  commercial: "officeGlassDetail",
  gates: "gateSliding",
  aluminium: "aluminiumWindow",
  steel: "steelFacade",
  structures: "steelBeams",
  finishing: "metalDetail",
};

export const serviceImageMap: Record<string, ImageKey> = {
  "aluminium-fabrication": "aluminiumWindow",
  "steel-fabrication": "steelFacade",
  "security-gates": "gateSliding",
  "powder-coating-finishing": "metalDetail",
  "architectural-carpentry": "minimalFacade",
  "custom-fabrication": "steelBeams",
};

export const productCategoryImageMap: Record<string, ImageKey> = {
  aluminium: "aluminiumWindow",
  steel: "steelFacade",
  security: "gateSliding",
  finishes: "metalDetail",
};

export const productImageMap: Record<string, ImageKey> = {
  "aluminium-windows": "aluminiumWindow",
  "aluminium-doors": "heroEntrance",
  "custom-frames": "casementWindow",
  "steel-doors": "steelFacade",
  "slim-frame-windows": "casementWindow",
  "steel-structures": "steelBeams",
  "sliding-gates": "gateSliding",
  "manual-gates": "gateFence",
  "automated-gates": "gateDaytime",
  "powder-coating": "metalDetail",
  "custom-finishing": "minimalFacade",
};

const fallbackRotation: ImageKey[] = [
  "aluminiumWindow",
  "steelFacade",
  "gateSliding",
  "steelBeams",
  "casementWindow",
  "metalDetail",
];

/** Picks up to `count` image keys relevant to a project's categories. */
export function projectImageKeys(
  categories: string[],
  count = 3
): ImageKey[] {
  const matched = categories
    .map((category) => categoryImageMap[category])
    .filter((key): key is ImageKey => Boolean(key));

  const unique = Array.from(new Set(matched));
  let i = 0;
  while (unique.length < count) {
    const next = fallbackRotation[i % fallbackRotation.length];
    if (!unique.includes(next)) unique.push(next);
    i++;
  }
  return unique.slice(0, count);
}
