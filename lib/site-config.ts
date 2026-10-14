export const siteConfig = {
  name: "Glanium Engineering",
  shortName: "Glanium",
  tagline: "Engineered Metalwork. Refined Architecture.",
  description:
    "Glanium Engineering provides premium aluminium fabrication, steel structures, modern doors, windows, security gates, powder coating and architectural metalwork in Nairobi and across Kenya.",
  url: "https://www.glaniumengineering.com",
  phone: "+254707017097",
  phoneDisplay: "+254 707 017097",
  whatsapp: "254707017097",
  email: "info@glaniumengineering.com",
  location: "Nairobi, Kenya",
  serviceArea: "Kenya",
  addressLocality: "Nairobi",
  addressCountry: "KE",
  exampleServiceLocations: ["Nairobi", "Kisumu", "Machakos"],
  socials: {
    instagram: "https://instagram.com/glaniumengineering",
    tiktok: "https://tiktok.com/@glaniumengineering",
    x: "https://x.com/glaniumeng",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function telLink() {
  return `tel:${siteConfig.phone}`;
}

export const whatsappMessages = {
  general:
    "Hello Glanium Engineering, I would like to enquire about your services.",
  aluminium:
    "Hello Glanium Engineering, I would like to enquire about aluminium windows for my project.",
  steel:
    "Hello Glanium Engineering, I would like to enquire about steel fabrication for my project.",
  gate: "Hello Glanium Engineering, I would like to enquire about a custom gate.",
  commercial:
    "Hello Glanium Engineering, I have a commercial fabrication project I would like to discuss.",
  quote:
    "Hello Glanium Engineering, I would like to request a quote for a project.",
} as const;
