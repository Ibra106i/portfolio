import { ArrowRight, Check } from "lucide-react";

// Self-contained on purpose: this block should be able to move to its own
// domain without dragging project code along, so its URLs live here.
const CONTACT_URL = "mailto:ibrah1006i@gmail.com";
const LIVECHECK_URL = "https://livechecks.vercel.app/";
// LIVECHECK_RUN_ON_EVERY_SITE: set to false to drop the audit bullet below.
const AUDIT_WITH_LIVECHECK = true;

const baseBullets = [
  "Built to load fast and work on any phone",
  "Set up to be found: page titles, descriptions, and your Google Business details",
];

export default function StorefrontSites() {
  return (
    <section
      id="storefront-sites"
      className="container-frame scroll-mt-32 py-16 md:py-24"
    >
      <div className="rounded-xl border border-secondary/20 bg-surface-container-low/85 p-6 backdrop-blur-sm sm:p-10">
        <p className="text-label-caps uppercase text-primary">Agency</p>
        <h2 className="mt-3 text-balance font-display text-headline-lg font-medium text-on-surface">
          Storefront Sites
        </h2>
        <p className="mt-5 max-w-2xl text-balance text-body-lg text-on-surface">
          Websites for local businesses that are open but invisible online.
        </p>
        <p className="mt-4 max-w-2xl text-body-md text-on-surface-variant">
          I'm Ibrahim. I design and build fast, mobile-friendly websites for
          local businesses, so customers can find your hours, phone number, and
          location in seconds.
        </p>
        <ul className="mt-8 grid gap-4 sm:max-w-2xl">
          {baseBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-5 w-5 flex-none text-secondary"
                aria-hidden="true"
              />
              <span className="text-body-md text-on-surface">{bullet}</span>
            </li>
          ))}
          {AUDIT_WITH_LIVECHECK ? (
            <li className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-5 w-5 flex-none text-secondary"
                aria-hidden="true"
              />
              <span className="text-body-md text-on-surface">
                Audited before handoff with{" "}
                <a
                  href={LIVECHECK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline-offset-4 hover:underline active:opacity-70"
                >
                  Livecheck
                </a>
                , my own site-audit tool
              </span>
            </li>
          ) : null}
        </ul>
        <a
          href={CONTACT_URL}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container active:brightness-90"
        >
          Talk to me about your site
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
