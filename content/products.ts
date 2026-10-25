export type Product = {
  name: string;
  description: string;
  href: string;
  external: boolean;
  note?: { label: string; href: string };
};

export const moodshiftUrl = "https://moodshift.app";
export const livecheckUrl = "https://livechecks.vercel.app/";

// LIVECHECK_RUN_ON_EVERY_SITE: when true, the Livecheck card links down to the
// Storefront Sites audits, and that section carries the Livecheck audit bullet.
export const livecheckRunOnEverySite = true;

export const products: Product[] = [
  {
    name: "MoodShift",
    description: "A mood tracker that writes you a personal weekly letter.",
    href: moodshiftUrl,
    external: true,
  },
  {
    name: "Livecheck",
    description: "A command-line tool that audits websites.",
    href: livecheckUrl,
    external: true,
    note: livecheckRunOnEverySite
      ? { label: "Used for Storefront Sites audits", href: "#storefront-sites" }
      : undefined,
  },
];
