import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, getServiceBySlug } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Jember Tech",
    };
  }
  
  return {
    title: `${service.title} | Jember Tech`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-container-margin max-w-[1280px] mx-auto border-b border-white/5">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden hairline-border bg-surface flex items-center justify-center shrink-0 mb-8 glass-card">
            <Icon className="text-primary w-10 h-10" />
          </div>
          <h1 className="text-display-lg mb-6">{service.title}</h1>
          <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed mb-10">
            {service.longDesc}
          </p>
          <Link href={`/contact?service=${service.slug}`} className="btn-primary px-10 py-4 text-lg inline-block">
            Get a Quote
          </Link>
        </div>
      </section>

      {/* 2. What's Included & Tools */}
      <section className="py-section-gap max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-headline-lg mb-10">What's Included</h2>
          <div className="bg-surface hairline-border rounded-card p-10 flex flex-col gap-6">
            {service.deliverables.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Check className="text-primary w-4 h-4" />
                </div>
                <p className="text-on-surface-variant leading-relaxed font-medium">{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-headline-lg mb-10">Tools We Use</h2>
          <div className="flex flex-wrap gap-4">
            {service.techStack.map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-surface hairline-border rounded-full text-on-surface font-label-bold text-sm liquid-hover">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Process */}
      <section className="py-section-gap bg-surface/30">
        <div className="max-w-[1280px] mx-auto px-container-margin">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 bg-surface hairline-border rounded-card p-10 lg:p-16 relative overflow-hidden">
            {service.process.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="flex flex-col relative z-10">
                <span className="text-2xl mb-6 opacity-40">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <div className="h-px w-full bg-white/10 mb-6 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
                <h4 className="font-label-bold text-primary mb-3">{step.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-container-margin max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg">Frequently Asked Questions</h2>
          </div>
          <Accordion className="w-full space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-surface hairline-border rounded-card px-6 py-2 border-b-0 data-[state=open]:border-primary/20 transition-all">
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
      </section>

      {/* 6. Closing CTA banner */}
      <section className="pb-section-gap">
        <div className="max-w-[1280px] mx-auto px-container-margin">
          <div className="bg-surface hairline-border rounded-card p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden glass-card">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>
            <h2 className="text-headline-lg mb-6 relative z-10">Ready to Elevate Your {service.title}?</h2>
            <p className="text-on-surface-variant mb-10 max-w-xl relative z-10">
              Let's discuss how our technical expertise can accelerate your business objectives and solve your most complex challenges.
            </p>
            <Link href={`/contact?service=${service.slug}`} className="btn-primary px-10 py-4 text-lg relative z-10 inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
