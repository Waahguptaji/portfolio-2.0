import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Image from "next/image";
import WorkEx from "@/components/WorkEx";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <WorkEx />
      <ContactMe />
      <Footer />
    </main>
  );
}
