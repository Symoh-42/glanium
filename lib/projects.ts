export type ProjectCategory =
  | "residential"
  | "commercial"
  | "gates"
  | "aluminium"
  | "steel"
  | "structures"
  | "finishing";

export type Project = {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  location?: string;
  servicesProvided: string[];
  overview: string;
  clientRequirement: string;
  designApproach: string;
  fabrication: string;
  finishing: string;
  installation: string;
  /** Marks entries awaiting real project data, photography and confirmed details. */
  placeholder: true;
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "gates", label: "Gates" },
  { id: "aluminium", label: "Aluminium" },
  { id: "steel", label: "Steel" },
  { id: "structures", label: "Structures" },
  { id: "finishing", label: "Finishing" },
];

/**
 * Placeholder portfolio entries. No client names, locations, project values,
 * sizes or timelines are fabricated — replace with confirmed project data
 * and photography as it becomes available.
 */
export const projects: Project[] = [
  {
    slug: "residential-aluminium-windows",
    title: "Residential Aluminium Window Installation",
    categories: ["residential", "aluminium"],
    servicesProvided: ["Aluminium windows", "Powder coating"],
    overview:
      "Fabrication and installation of aluminium window systems for a residential property.",
    clientRequirement:
      "A clean, modern window system finished to complement the building's architecture.",
    designApproach:
      "A slim-profile aluminium configuration was developed to suit the building's façade.",
    fabrication:
      "Frames were fabricated to the confirmed dimensions and specification.",
    finishing: "Finished with powder coating in a selected colour.",
    installation: "Installed on site by the Glanium team.",
    placeholder: true,
  },
  {
    slug: "modern-steel-entrance-gate",
    title: "Modern Steel Sliding Gate",
    categories: ["gates", "steel", "residential"],
    servicesProvided: ["Sliding gate", "Steel fabrication", "Powder coating"],
    overview:
      "Design, fabrication and installation of a custom steel sliding gate.",
    clientRequirement:
      "A secure entrance gate with a modern, architectural appearance.",
    designApproach:
      "A slim-lined sliding gate design was developed to match the property's entrance.",
    fabrication: "Steel components were fabricated and assembled in the workshop.",
    finishing: "Powder coated for a durable, uniform finish.",
    installation: "Installed and tested for smooth operation on site.",
    placeholder: true,
  },
  {
    slug: "commercial-steel-structure",
    title: "Commercial Steel Structure",
    categories: ["commercial", "steel", "structures"],
    servicesProvided: ["Steel structures", "Custom fabrication"],
    overview:
      "Structural steel fabrication for a commercial building requirement.",
    clientRequirement:
      "Structural steel elements fabricated to architectural and engineering drawings.",
    designApproach:
      "Fabrication solution developed in line with the supplied specifications.",
    fabrication: "Components fabricated to the confirmed drawings and dimensions.",
    finishing: "Finished according to the project specification.",
    installation: "Delivered and installed on site.",
    placeholder: true,
  },
  {
    slug: "automated-security-gate",
    title: "Automated Security Gate",
    categories: ["gates", "residential"],
    servicesProvided: ["Automated gate", "Steel fabrication"],
    overview: "Fabrication and installation of an automated security gate.",
    clientRequirement:
      "A gate combining daily convenience with a strong architectural presence.",
    designApproach:
      "A custom gate design was developed to suit the entrance and automation requirements.",
    fabrication: "Gate panel fabricated in steel to the confirmed design.",
    finishing: "Powder coated to the selected finish.",
    installation: "Installed with automation and tested on site.",
    placeholder: true,
  },
  {
    slug: "commercial-aluminium-shopfront",
    title: "Commercial Aluminium Window System",
    categories: ["commercial", "aluminium"],
    servicesProvided: ["Aluminium windows", "Aluminium doors"],
    overview:
      "Aluminium window and door system fabricated for a commercial space.",
    clientRequirement:
      "A modern aluminium system suited to a commercial frontage.",
    designApproach:
      "A configuration was developed to balance appearance with everyday commercial use.",
    fabrication: "Frames fabricated to the confirmed commercial specification.",
    finishing: "Powder coated for a consistent commercial finish.",
    installation: "Installed by the Glanium team on site.",
    placeholder: true,
  },
  {
    slug: "steel-casement-windows",
    title: "Slim-Frame Steel Casement Windows",
    categories: ["steel", "residential", "finishing"],
    servicesProvided: ["Slim-frame windows", "Powder coating"],
    overview:
      "Fabrication and installation of slim-frame steel casement windows.",
    clientRequirement:
      "A minimal steel window profile for a contemporary residential design.",
    designApproach:
      "Slim steel sections were selected to achieve the desired architectural profile.",
    fabrication: "Casement units fabricated to the confirmed openings.",
    finishing: "Finished with a durable powder-coated surface.",
    installation: "Installed and sealed on site.",
    placeholder: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        candidate.categories.some((category) =>
          project.categories.includes(category)
        )
    )
    .slice(0, limit);
}
