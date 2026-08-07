
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function FAQ() {
  const faqs = [
    {
      q: "1. What is Jember Tech — Cyber Tech Solutions?",
      a: "Jember Tech is a premium technology agency specializing in high-performance web development, cybersecurity, and AI integration. We provide end-to-end digital solutions for modern enterprises seeking scalable and secure architecture."
    },
    {
      q: "2. Who Are Jember Tech' Services For?",
      a: "Our services are tailored for tech startups, established enterprises, and government agencies that require high-level technical expertise, uncompromising security, and innovative user experiences."
    },
    {
      q: "3. Can Jember Tech Integrate With My Existing Systems?",
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
      <div className="max-w-[1280px] mx-auto px-container-margin max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg">Frequently Asked Questions</h2>
        </div>
        
        <Accordion className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <AccordionItem value={`item-${idx}`} className="not-last:border-b bg-surface hairline-border rounded-card px-6 py-2 border-b-0 data-[state=open]:border-primary/20 transition-all">
                <AccordionTrigger className="font-label-bold text-lg hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-on-surface-variant text-sm leading-relaxed pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
