import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyWork from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col  space-y-32 ">
        <Hero />
        <Services />
        <Skills />
        <MyWork />
      </div>
      <Footer />
    </main>
  );
}
