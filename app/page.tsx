import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../src/components/About"), { ssr: true });
const Experience = dynamic(() => import("../src/components/Experience"), { ssr: true });
const Achievements = dynamic(() => import("../src/components/Achievements"), { ssr: true });
const Skills = dynamic(() => import("../src/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("../src/components/Projects"), { ssr: true });
const Contact = dynamic(() => import("../src/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("../src/components/Footer"), { ssr: true });

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
