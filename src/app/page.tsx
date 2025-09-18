import Navbar from "@/app/components/Navbar";
import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";
import Portfolio from "@/app/sections/Portfolio";
import Footer from "@/app/sections/Footer";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}
