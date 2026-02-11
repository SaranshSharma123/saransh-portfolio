import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <TechMarquee />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
