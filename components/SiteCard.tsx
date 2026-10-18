import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Site } from "@/content/sites";

export default function SiteCard({ site }: { site: Site }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-secondary/15 bg-surface-container-low/80 backdrop-blur-sm transition-colors hover:border-secondary/40">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-secondary/10">
        <Image
          src={site.image}
          alt={`${site.name} website preview`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {site.kind === "concept" ? (
          <span className="absolute left-4 top-4 rounded-full bg-surface-container-lowest/90 px-3 py-1 text-label-caps uppercase text-primary backdrop-blur-sm">
            Concept
          </span>
        ) : null}
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-title-lg text-on-surface">
            {site.name}
          </h3>
          <p className="mt-1 text-body-sm text-on-surface-variant">
            {site.type}
          </p>
          {site.result ? (
            <p className="mt-2 text-body-sm text-tertiary">{site.result}</p>
          ) : null}
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${site.name}`}
          className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-secondary/30 text-on-surface-variant transition-colors hover:border-secondary hover:text-primary"
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
