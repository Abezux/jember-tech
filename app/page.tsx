import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
// import Logos from "@/components/Logos"; // re-enable once we have real client logos
import About from "@/components/About";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      {/* <Logos /> — re-enable once we have real client logos, see components/Logos.tsx */}
      <About />
      <Team />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
