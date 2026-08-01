import { Code, PenSquare, Layers, ShieldCheck, Cpu, ListChecks, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      desc: "We build high-performance, responsive websites tailored to your unique business needs and user expectations.",
      borderClasses: "border-b md:border-r"
    },
    {
      title: "UI/UX Design",
      icon: <PenSquare className="w-6 h-6" />,
      desc: "Human-centered design focusing on intuitive navigation and stunning visuals to maximize user engagement.",
      borderClasses: "border-b lg:border-r"
    },
    {
      title: "Full Stack Development",
      icon: <Layers className="w-6 h-6" />,
      desc: "End-to-end solutions combining robust backends with seamless frontends for a complete digital experience.",
      borderClasses: "border-b"
    },
    {
      title: "Web Security",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Protecting your assets with enterprise-grade encryption and real-time threat detection systems.",
      borderClasses: "border-b md:border-b-0 md:border-r"
    },
    {
      title: "AI Integration",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Embedding intelligent automation and predictive analytics into your existing web architecture.",
      borderClasses: "border-b md:border-b-0 lg:border-r"
    },
    {
      title: "Tech Consulting",
      icon: <ListChecks className="w-6 h-6" />,
      desc: "Strategic guidance on technology stacks, scalability planning, and digital transformation roadmaps.",
      borderClasses: ""
    }
  ];

  return (
    <section className="py-section-gap" id="services">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="text-center mb-20">
          <h2 className="text-headline-lg mb-4">What We Do Best In<br/>The World Of Web & Tech</h2>
        </div>
        <div className="bg-surface hairline-border rounded-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <div key={i} className={`p-panel-padding border-white/5 liquid-hover group ${svc.borderClasses}`}>
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
                  {svc.icon}
                </div>
                <h3 className="text-headline-accent text-xl mb-4">{svc.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">{svc.desc}</p>
                <a className="flex items-center gap-2 text-primary font-label-bold text-sm" href="#">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
