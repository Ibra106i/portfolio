import BotanicalDivider from "@/components/BotanicalDivider";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import StorefrontSites from "@/components/StorefrontSites";

export default function Home() {
  return (
    <>
      <Hero />
      <BotanicalDivider />
      <Products />
      <BotanicalDivider />
      <StorefrontSites />
      <BotanicalDivider />
      <Contact />
    </>
  );
}
