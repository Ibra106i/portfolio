export default function Hero() {
  return (
    <section
      id="top"
      className="container-frame pb-16 pt-36 md:pb-20 md:pt-44 lg:pt-52"
    >
      <div className="max-w-3xl">
        <h1 className="text-balance font-display text-display-hero font-medium text-on-surface">
          Ibrahim
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
          I build MoodShift and Livecheck, and run Storefront Sites.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="https://moodshift.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container active:brightness-90"
          >
            MoodShift
          </a>
          <a
            href="#storefront-sites"
            className="inline-flex items-center justify-center rounded-full border border-secondary/60 px-7 py-3.5 text-label-md font-semibold text-secondary-fixed transition-colors hover:border-secondary hover:bg-secondary/10 active:border-secondary active:bg-secondary/20"
          >
            Storefront Sites
          </a>
        </div>
      </div>
    </section>
  );
}
