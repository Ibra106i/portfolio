export type Product = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

// TODO: Replace the placeholder liveUrl / githubUrl values ("#") with real links.
// TODO: Swap the images in /public/products with real screenshots (1200x800).
export const products: Product[] = [
  {
    name: "Livecheck",
    tagline: "Uptime monitoring from your terminal",
    description:
      "A CLI that watches your endpoints and pings you the moment something goes down, built for developers who live in the shell.",
    tags: ["TypeScript", "Node.js", "CLI"],
    liveUrl: "https://livechecks.vercel.app/",
    githubUrl: "#",
    image: "/products/livecheck.webp",
  },
  {
    name: "MoodShift",
    tagline: "Mood tracking that adapts to you",
    description:
      "An installable PWA that tracks how you feel over time and uses AI to surface patterns and gentle nudges.",
    tags: ["PWA", "AI"],
    liveUrl: "https://moodsway.netlify.app/",
    githubUrl: "#",
    image: "/products/moodshift.webp",
  },
  {
    name: "TaskMax",
    tagline: "Task management wired into your tools",
    description:
      "A Next.js task manager with auth, sync, and an MCP server so your assistant can read and update your tasks for you.",
    tags: ["Next.js", "Clerk", "Supabase", "MCP"],
    liveUrl: "https://taskmax.vercel.app/",
    githubUrl: "#",
    image: "/products/taskmax.webp",
  },
];
