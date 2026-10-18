import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-secondary/15 bg-surface-container-low/80 backdrop-blur-sm transition-colors hover:border-secondary/40">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-secondary/10">
        <Image
          src={product.image}
          alt={`${product.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-title-lg text-on-surface">
            {product.name}
          </h3>
          <p className="mt-1 text-body-sm text-on-surface-variant">
            {product.tagline}
          </p>
        </div>
        <p className="text-body-md text-on-surface-variant">
          {product.description}
        </p>
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${product.name} technologies`}
        >
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface-container-high px-3 py-1 text-label-caps uppercase text-tertiary"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-5 pt-2">
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-label-md font-semibold text-primary transition-colors hover:text-primary-container"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live
          </a>
          <a
            href={product.githubUrl}
            className="inline-flex items-center gap-1.5 text-label-md font-semibold text-on-surface-variant transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
