import Image from "next/image";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#websites", label: "Websites" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-frame">
        <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-secondary/15 bg-surface-container-lowest/80 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
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
            <span className="hidden text-label-caps uppercase text-on-surface-variant lg:inline">
              Solo Dev &amp; Founder
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
