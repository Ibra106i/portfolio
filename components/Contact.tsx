import { Github, Mail } from "lucide-react";
import { contactEmail, contactUrl, githubUrl } from "@/content/links";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-frame scroll-mt-32 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <h2 className="font-display text-headline-lg font-medium text-on-surface">
          Contact
        </h2>
        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={contactUrl}
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container active:brightness-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {contactEmail}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-secondary/60 px-7 py-3.5 text-label-md font-semibold text-secondary-fixed transition-colors hover:border-secondary hover:bg-secondary/10 active:border-secondary active:bg-secondary/20"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
