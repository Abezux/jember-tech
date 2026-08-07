import { Check } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

// TODO: replace placeholder prices once packages are finalized
const pricingPlans = [
  {
    name: "Starter",
    price: "From $3,000",
    desc: "Perfect for emerging startups needing a secure foundation.",
    features: [
      "Custom UI/UX Design",
      "Responsive Frontend",
      "Basic SEO Setup",
      "Standard Security Headers"
    ],
    ctaText: "Get Started",
    popular: false,
    slug: "web-development"
  },
  {
    name: "Growth",
    price: "From $8,500",
    desc: "Comprehensive engineering for scaling digital products.",
    features: [
      "Full-Stack Web App",
      "Database Architecture",
      "API Development",
      "Advanced Security Audit",
      "Performance Optimization"
    ],
    ctaText: "Get Started",
    popular: true,
    slug: "full-stack-development"
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    desc: "Bespoke systems requiring military-grade architecture.",
    features: [
      "Microservices Architecture",
      "AI & LLM Integration",
      "Penetration Testing",
      "Zero-Downtime Deployment",
      "24/7 SLA Support",
      "Dedicated Engineers"
    ],
    ctaText: "Book a Call",
    popular: false,
    slug: ""
  }
];

export default function Pricing() {
  return (
    <section className="py-section-gap" id="pricing">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg mb-4">Transparent Pricing</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            High-tier engineering packages structured to provide exceptional value and unparalleled security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className={`flex flex-col relative glass-card rounded-card p-10 ${plan.popular ? 'border-primary/50 scale-105 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'hairline-border'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1.5 rounded-full text-[10px] font-label-bold uppercase tracking-widest z-20">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 h-10">{plan.desc}</p>
                <div className="text-4xl mb-2">{plan.price}</div>
              </div>

              <div className="flex-grow flex flex-col gap-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-primary w-3 h-3" />
                    </div>
                    <p className="text-sm text-on-surface-variant font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <Link href={plan.slug ? `/contact?service=${plan.slug}` : "/contact"} className={`w-full py-4 text-sm font-label-bold rounded-full transition-all active:scale-95 inline-block text-center ${plan.popular ? 'bg-primary text-background hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5' : 'bg-surface hairline-border hover:border-primary/30 text-primary'}`}>
                {plan.ctaText}
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <p className="text-on-surface-variant text-sm font-label-bold">
            Need something custom? We tailor packages for combined services.
          </p>
        </div>
      </div>
    </section>
  );
}
