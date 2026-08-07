import { Briefcase, Code } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

// TODO: replace initials avatars with real photos, fill in real names/bios/links
const founders = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Co-Founder & Technical Director",
    bio: "Former lead engineer with a passion for scalable systems and security architecture. Specialized in high-performance cloud deployments.",
    linkedin: "#",
    github: "#"
  },
  {
    initials: "AD",
    name: "Alex Doe",
    role: "Co-Founder & Head of Product",
    bio: "Obsessed with creating frictionless digital experiences. Bridges the gap between complex engineering and beautiful, intuitive interfaces.",
    linkedin: "#",
    github: "#"
  }
];

export default function Team() {
  return (
    <section className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg mb-4">Meet The Team Behind The Work</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            A small, elite group of multidisciplinary experts building the next generation of digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="glass-card hairline-border rounded-card p-10 flex flex-col items-center text-center liquid-hover group">
              <div className="w-24 h-24 rounded-full glass-card hairline-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                <span className="text-2xl font-bold tracking-tighter text-primary">{founder.initials}</span>
              </div>
              
              <h3 className="text-2xl mb-1">{founder.name}</h3>
              <p className="text-xs font-label-bold text-primary uppercase tracking-widest mb-6">{founder.role}</p>
              
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                {founder.bio}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <a href={founder.linkedin} className="w-11 h-11 rounded-full bg-surface hairline-border flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all">
                  <Briefcase className="w-5 h-5" />
                </a>
                <a href={founder.github} className="w-11 h-11 rounded-full bg-surface hairline-border flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all">
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
