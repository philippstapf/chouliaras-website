import Hero from "@/components/sections/hero";
import SellCTA from "@/components/sections/sell-cta";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Acquisition from "@/components/sections/acquisition";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <SellCTA />
      <About />
      <Team />
      <Acquisition />
      <ContactForm />
    </>
  );
}
