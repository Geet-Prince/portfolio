
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Achievements from "../src/components/Achievements";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        
        <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
            <Experience />
            <Achievements />
          </div>
        </section>
        
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
