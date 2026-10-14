import { Photo } from "./Photo";
import { FadeUp } from "./FadeUp";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { productImageMap, productCategoryImageMap } from "@/lib/images";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <FadeUp
      delay={(index ?? 0) * 0.05}
      className="group flex flex-col border border-charcoal/10 bg-cream"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Photo
          topic={productImageMap[product.slug] ?? productCategoryImageMap[product.category]}
          alt={product.name}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-ink">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-charcoal/70">
          {product.description}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-charcoal/10 pt-4 text-xs">
          <div>
            <dt className="font-heading font-semibold tracking-wide text-charcoal/50 uppercase">
              Applications
            </dt>
            <dd className="mt-1 text-charcoal/70">
              {product.applications.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="font-heading font-semibold tracking-wide text-charcoal/50 uppercase">
              Configuration
            </dt>
            <dd className="mt-1 text-charcoal/70">{product.configurations}</dd>
          </div>
        </dl>
        <WhatsAppCTA
          messageKey={product.ctaMessageKey}
          label="Request Quote"
          className="mt-5 w-full justify-center"
        />
      </div>
    </FadeUp>
  );
}
