import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "1. What is አጀብ Tech — Cyber Tech Solutions?",
      a: "አጀብ Tech is a premium technology agency specializing in high-performance web development, cybersecurity, and AI integration. We provide end-to-end digital solutions for modern enterprises seeking scalable and secure architecture."
    },
    {
      q: "2. Who Are አጀብ Tech' Services For?",
      a: "Our services are tailored for tech startups, established enterprises, and government agencies that require high-level technical expertise, uncompromising security, and innovative user experiences."
    },
    {
      q: "3. Can አጀብ Tech Integrate With My Existing Systems?",
      a: "Yes, we specialize in seamless legacy system migration and API integrations. We ensure your new technology stack works in harmony with your current infrastructure while providing modernization where needed."
    },
    {
      q: "4. What's The Typical Process To Get Started?",
      a: "Our process begins with a deep-dive discovery session, followed by technical architecture planning, rapid prototyping, agile development, and a rigorous security audit before final deployment."
    },
    {
      q: "5. Do You Offer Custom Solutions Or Only Fixed Packages?",
      a: "We provide highly customized solutions built specifically for your business goals. While we have standardized frameworks to accelerate development, every project is uniquely engineered."
    }
  ];

  return (
    <section className="py-section-gap" id="faq">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] relative">
            <Image 
              className="object-contain" 
              fill 
              alt="A massive, detailed 3D orb consisting of layered translucent rings" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbxpJuK5l39Gg6zp55Ao6RttH7EOwsS7pAWp8Low28tYJfm4I-WcXR9vdHPBF_pZypKTNMsTiRLFw9C7nhaCQJyiyXYzgtZMZ3N9EUJ-5t8QfpIpNUUN9w8uyuA1MIErADqn5Sx4jWpAPU1ArU3BEZjnnhCxcS01oEPjey_O02rQ0o-Pzsl4HznH3J7SHdUc6pfhTKfteDwRQsMTkSecZgPnYMlvyCoIOiyD95WTtYAUHB8nDjPqX"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-headline-lg mb-12">Game-Changing Tools<br/>To Outsmart The Bad Guys</h2>
          
          <Accordion className="w-full space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 pb-2">
                <AccordionTrigger className="font-label-bold text-lg hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-on-surface-variant text-sm leading-relaxed pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
