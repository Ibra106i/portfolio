import ProductCard from "@/components/ProductCard";
import { products } from "@/content/products";

export default function Products() {
  return (
    <section
      id="products"
      className="container-frame scroll-mt-32 py-16 md:py-24"
    >
      <h2 className="font-display text-headline-lg font-medium text-on-surface">
        Products
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-12">
        {products.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
