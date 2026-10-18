import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { XIcon } from "@/components/icons";
import { contactEmail, profileLinks } from "@/content/links";

const iconByLabel: Record<string, ReactNode> = {
  GitHub: <Github className="h-5 w-5" aria-hidden="true" />,
  LinkedIn: <Linkedin className="h-5 w-5" aria-hidden="true" />,
  X: <XIcon className="h-5 w-5" />,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-frame scroll-mt-28 pb-24 pt-16 text-center md:pb-28 md:pt-24"
    >
      <p className="text-label-caps uppercase text-primary">Contact</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-balance font-display text-headline-lg font-medium text-on-surface">
        Let&apos;s Cultivate{" "}
        <em className="italic text-primary">Something</em> Together
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
        Have a project in mind, or want a free website audit? Send me an email.
      </p>
      <div className="mt-10 flex flex-col items-center gap-6">
        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {contactEmail}
        </a>
        <ul className="flex items-center gap-4">
          {profileLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/30 text-on-surface-variant transition-colors hover:border-secondary hover:text-primary"
              >
                {iconByLabel[link.label] ?? link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
