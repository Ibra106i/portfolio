import Image from "next/image";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#storefront-sites", label: "Storefront Sites" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-frame">
        <div className="mt-4 flex flex-col items-center gap-1.5 rounded-2xl border border-secondary/15 bg-surface-container-lowest/85 px-4 py-3 backdrop-blur-md sm:mt-5 sm:flex-row sm:justify-between sm:gap-6 sm:rounded-full sm:px-6 sm:py-2.5">
          <a href="#top" className="flex items-center gap-2.5 rounded-sm">
            <Image
              src="/pfp.jpg"
              alt="Ibrahim"
              width={28}
              height={28}
              priority
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="font-display text-title-lg font-semibold text-on-surface">
              Ibrahim
            </span>
          </a>
          <nav
            aria-label="Main"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-label-md text-on-surface-variant transition-colors hover:text-primary active:opacity-70 sm:py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
