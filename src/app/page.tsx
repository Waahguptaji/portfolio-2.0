import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkEx from "@/components/WorkEx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <WorkEx />
      <ContactMe />
      <Footer />
    </main>
  );
}
