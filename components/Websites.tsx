import SiteCard from "@/components/SiteCard";
import { sites } from "@/content/sites";

export default function Websites() {
  return (
    <section
      id="websites"
      className="container-frame scroll-mt-28 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-label-caps uppercase text-secondary">
          For Local Businesses
        </p>
        <h2 className="mt-3 text-balance font-display text-headline-lg font-medium text-on-surface">
          Websites
        </h2>
        <p className="mt-4 text-body-lg text-on-surface-variant">
          Fast, clear websites that help local businesses get found online.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sites.map((site) => (
          <SiteCard key={site.name} site={site} />
        ))}
      </div>
    </section>
  );
}
