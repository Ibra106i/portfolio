import { Sprout } from "lucide-react";
import { contactEmail, contactUrl, githubUrl } from "@/content/links";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-frame pb-28 md:pb-36 lg:pb-44">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-secondary/15 pt-8 sm:flex-row">
        <p className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <Sprout className="h-4 w-4 text-secondary" aria-hidden="true" />©{" "}
          {year} Ibrahim. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-body-sm text-on-surface-variant transition-colors hover:text-primary active:opacity-70"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={contactUrl}
              className="text-body-sm text-on-surface-variant transition-colors hover:text-primary active:opacity-70"
            >
              {contactEmail}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
