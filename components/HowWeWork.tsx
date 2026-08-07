import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  {
    title: "Discovery",
    desc: "We dive deep into your business goals, technical requirements, and target audience to define a clear roadmap."
  },
  {
    title: "Proposal",
    desc: "We present a detailed technical architecture plan, timeline, and investment required to bring your vision to life."
  },
  {
    title: "Design",
    desc: "Our team crafts intuitive, high-fidelity user interfaces with a focus on premium aesthetics and seamless UX."
  },
  {
    title: "Build",
    desc: "We engineer scalable, performant full-stack solutions utilizing modern frameworks and global infrastructure."
  },
  {
    title: "Security Review",
    desc: "Every line of code undergoes rigorous security auditing and vulnerability testing before we proceed."
  },
  {
    title: "Launch & Support",
    desc: "We deploy your product to production and provide ongoing maintenance to ensure 99.9% uptime."
  }
];

export default function HowWeWork() {
  return (
    <section className="py-section-gap bg-surface/30">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg mb-4">How We Work</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            A proven, transparent process designed to transform complex ideas into secure, scalable realities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 bg-surface hairline-border rounded-card p-10 lg:p-16 relative overflow-hidden">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="flex flex-col relative z-10">
              <span className="text-2xl mb-6 opacity-40">
                {(idx + 1).toString().padStart(2, '0')}.
              </span>
              <div className="h-px w-full bg-white/10 mb-6 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
              <h4 className="font-label-bold text-primary mb-3">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
