import { ScrollReveal } from "@/components/ScrollReveal";
import { conceptProjects } from "@/lib/concept-projects";
import { ConceptDialog } from "@/components/ConceptDialog";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-section-gap" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-col mb-16">
          <h2 className="text-headline-lg mb-4">Concept Work —<br/>A Preview Of What We Build</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Explore 6 concept pieces designed to showcase our capabilities across different technical domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {conceptProjects.map((project, idx) => {
            const { icon: Icon, ...serializableProject } = project;
            return (
              <ConceptDialog key={project.slug} project={serializableProject}>
                <ScrollReveal delay={idx * 0.1} className="group relative bg-surface-dim hairline-border rounded-card overflow-hidden liquid-hover h-[300px] flex flex-col cursor-pointer text-left">
                  <div className="absolute top-4 right-4 bg-surface/50 backdrop-blur-md hairline-border px-3 py-1 rounded-full text-[10px] font-label-bold uppercase tracking-widest text-on-surface z-20">
                    Concept Project
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/10 text-primary hairline-border border-primary/20 px-3 py-1 rounded-full text-[10px] font-label-bold uppercase tracking-widest z-20">
                    {project.category}
                  </div>
                  
                  <div className="flex-grow w-full relative bg-gradient-to-br from-surface-container to-background flex items-center justify-center overflow-hidden">
                    <Icon className="w-24 h-24 text-white opacity-10 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                    <div className="w-full">
                      <h3 className="text-xl mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                        {project.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                      </h3>
                      <p className="text-on-surface-variant text-sm truncate w-full pr-4">{project.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </ConceptDialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
