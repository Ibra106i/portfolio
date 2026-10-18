export type Site = {
  name: string;
  type: string;
  url: string;
  image: string;
  kind: "client" | "concept";
  result?: string;
};

// TODO: Replace these placeholder entries with real websites.
// - Set kind: "client" only for sites you actually built for a client.
// - Add `result` ONLY when you have a real, verifiable outcome to report.
// - Swap the images in /public/sites with real screenshots (1200x672).
export const sites: Site[] = [
  {
    name: "Placeholder — Local Bakery",
    type: "Website build",
    url: "#",
    image: "/sites/site-1.webp",
    kind: "concept",
  },
  {
    name: "Placeholder — Fitness Studio",
    type: "Landing page",
    url: "#",
    image: "/sites/site-2.webp",
    kind: "concept",
  },
  {
    name: "Golden Hour",
    type: "Website build",
    url: "https://goldenhour-lake.vercel.app/",
    image: "/sites/site-3.webp",
    kind: "concept",
  },
  {
    name: "Placeholder — Dental Clinic",
    type: "Booking site",
    url: "#",
    image: "/sites/site-4.webp",
    kind: "concept",
  },
];
