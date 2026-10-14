import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0e1240",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Glanium Engineering | Aluminium, Steel & Metal Fabrication Kenya",
    template: "%s | Glanium Engineering",
  },
  description: siteConfig.description,
  keywords: [
    "metal fabrication Kenya",
    "metal fabrication Nairobi",
    "aluminium windows Kenya",
    "aluminium doors Nairobi",
    "steel doors Kenya",
    "steel gates Nairobi",
    "automated gates Kenya",
    "sliding gates Nairobi",
    "powder coating Nairobi",
    "steel structures Kenya",
    "aluminium fabrication Nairobi",
    "architectural metalwork Kenya",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Glanium Engineering | Aluminium, Steel & Metal Fabrication Kenya",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Glanium Engineering | Aluminium, Steel & Metal Fabrication Kenya",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.addressLocality,
              addressCountry: siteConfig.addressCountry,
            },
            areaServed: siteConfig.serviceArea,
            sameAs: [
              siteConfig.socials.instagram,
              siteConfig.socials.tiktok,
              siteConfig.socials.x,
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteConfig.url}/#localbusiness`,
            name: siteConfig.name,
            image: `${siteConfig.url}/og-image.jpg`,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.addressLocality,
              addressCountry: siteConfig.addressCountry,
            },
            areaServed: siteConfig.serviceArea,
            priceRange: "$$",
          }}
        />
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileStickyBar />
        </MotionConfig>
      </body>
    </html>
  );
}
