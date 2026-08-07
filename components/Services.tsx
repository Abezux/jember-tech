import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Services() {
  return (
    <section className="py-section-gap" id="services">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="text-center mb-20">
          <h2 className="text-headline-lg mb-4">What We Do Best In<br/>The World Of Web & Tech</h2>
        </div>
        <div className="bg-surface hairline-border rounded-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, idx) => (
              <ScrollReveal 
                key={svc.slug} 
                delay={idx * 0.1}
                className="p-panel-padding border-white/5 liquid-hover group border-b md:border-r md:max-lg:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-4">{svc.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">{svc.shortDesc}</p>
                <Link 
                  href={`/services/${svc.slug}`} 
                  className="flex items-center gap-2 text-primary font-label-bold text-sm"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
