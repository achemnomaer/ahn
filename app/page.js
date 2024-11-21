import ScrollTop from "@/components/_child/ScrollTop";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <ScrollTop />

      <section>
        <Navbar />
        <Landing />
      </section>

      <section name="about" className="pt-12">
        <About />
      </section>

      <section name="projects" className="pt-32">
        <Projects />
      </section>

      <section className="pt-32" name="contact">
        <Contact />
      </section>
    </>
  );
}
