export type ProfileLink = {
  label: string;
  href: string;
};

export const profileLinks: ProfileLink[] = [
  { label: "GitHub", href: "https://github.com/Ibra106i" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-asad-4a0748432" },
  { label: "X", href: "https://x.com/Ibrahim106_" },
];

// TODO: Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local (see .env.example).
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ibrah1006i@gmail.com";
