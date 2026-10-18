import ProductCard from "@/components/ProductCard";
import { products } from "@/content/products";

export default function Products() {
  return (
    <section
      id="products"
      className="container-frame scroll-mt-28 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-label-caps uppercase text-primary">
          Cultivated Software
        </p>
        <h2 className="mt-3 text-balance font-display text-headline-lg font-medium text-on-surface">
          Products I&apos;ve <em className="italic text-primary">grown.</em>
        </h2>
        <p className="mt-4 text-body-lg text-on-surface-variant">
          A few tools I&apos;ve designed, built, and shipped myself.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
