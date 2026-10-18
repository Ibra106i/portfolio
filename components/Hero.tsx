import { ArrowDown } from "lucide-react";

const techStack = ["Flutter", "Next.js", "TypeScript", "Python"];

export default function Hero() {
  return (
    <section
      id="top"
      className="container-frame pb-16 pt-36 md:pb-20 md:pt-44 lg:pt-52"
    >
      <div className="max-w-3xl">
        <h1 className="text-balance font-display text-display-hero font-medium text-on-surface">
          I build software <em className="italic text-primary">that grows.</em>
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
          Solo developer &amp; founder. Apps, SaaS tools, and websites for local
          businesses.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-secondary/60 px-7 py-3.5 text-label-md font-semibold text-secondary-fixed transition-colors hover:border-secondary hover:bg-secondary/10"
          >
            Get a free website audit
          </a>
        </div>
        <ul className="mt-12 flex flex-wrap items-center gap-3">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-secondary/25 bg-surface-container-low/70 px-4 py-1.5 text-label-md text-tertiary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 flex justify-center md:mt-24">
        <a
          href="#products"
          aria-label="Scroll to products"
          className="text-on-surface-variant/70 transition-colors hover:text-primary"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
