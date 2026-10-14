import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { productCategories, getProductsByCategory, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Aluminium, Steel, Gates & Finishes",
  description:
    "Browse Glanium Engineering's aluminium windows and doors, steel doors and structures, sliding and automated gates, and powder coating finishes.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: products.map((product, i) => ({
            "@type": "Product",
            position: i + 1,
            name: product.name,
            description: product.description,
          })),
        }}
      />
      <PageHero
        eyebrow="Products"
        title="Fabricated Products, Built To Specification."
        description="Every product is fabricated to the requirements of your project. Configurations, applications and finishes are confirmed per project."
      />

      <div className="divide-y divide-charcoal/10">
        {productCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 bg-cream py-20 sm:py-28"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <SectionHeader
                eyebrow={category.label}
                title={category.description}
              />
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {getProductsByCategory(category.id).map((product, i) => (
                  <ProductCard key={product.slug} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Have A Specific Product In Mind?"
        description="Send us your requirements, drawings or reference images and we will confirm what's possible for your project."
        whatsappKey="general"
      />
    </>
  );
}
