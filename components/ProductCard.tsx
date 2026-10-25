import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";

export default function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-xl border border-secondary/15 bg-surface-container-low/80 p-6 backdrop-blur-sm transition-colors hover:border-secondary/40 sm:p-8 ${
        featured ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      <h3
        className={`font-display font-medium text-on-surface ${
          featured ? "text-headline-md" : "text-headline-sm"
        }`}
      >
        <a
          href={product.href}
          {...(product.external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="inline-flex items-center gap-2 underline-offset-[6px] hover:underline active:text-primary"
        >
          {product.name}
          {product.external ? (
            <ArrowUpRight className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
          ) : null}
        </a>
      </h3>
      <p
        className={`mt-4 text-on-surface-variant ${
          featured ? "text-body-lg" : "text-body-md"
        }`}
      >
        {product.description}
      </p>
      {product.note ? (
        <a
          href={product.note.href}
          className="mt-6 self-start text-label-md font-semibold text-primary transition-colors hover:text-primary-container active:opacity-70"
        >
          {product.note.label}
        </a>
      ) : null}
    </article>
  );
}
