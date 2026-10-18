import BotanicalDivider from "@/components/BotanicalDivider";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Websites from "@/components/Websites";

export default function Home() {
  return (
    <>
      <Hero />
      <BotanicalDivider />
      <Products />
      <BotanicalDivider />
      <Websites />
      <BotanicalDivider />
      <Contact />
    </>
  );
}
