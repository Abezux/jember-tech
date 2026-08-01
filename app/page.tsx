import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Logos from "@/components/Logos";
import About from "@/components/About";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import NumberedShowcase from "@/components/NumberedShowcase";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Logos />
      <About />
      <FeatureSpotlight />
      <NumberedShowcase />
      <CaseStudies />
      <FAQ />
      <Footer />
    </main>
  );
}
