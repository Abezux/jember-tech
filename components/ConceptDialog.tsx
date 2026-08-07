"use client";

import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ConceptProject } from "@/lib/concept-projects";
import { Code, ExternalLink } from "lucide-react";

interface ConceptDialogProps {
  project: Omit<ConceptProject, 'icon'>;
  children: React.ReactElement;
}

export function ConceptDialog({ project, children }: ConceptDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[600px] bg-surface hairline-border rounded-card border-white/10 p-8">
        <DialogHeader className="mb-6">
          <div className="mb-4 inline-block px-3 py-1 bg-surface-container hairline-border rounded-full text-xs font-label-bold text-on-surface-variant uppercase tracking-widest w-fit">
            {project.category}
          </div>
          <DialogTitle className="text-headline-accent text-3xl mb-4 text-left">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mb-8">
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            {project.description}
          </p>
          
          <h4 className="text-sm font-label-bold text-primary uppercase tracking-widest mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-surface hairline-border rounded-full text-on-surface font-label-bold text-xs liquid-hover">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
              Visit Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-on-surface-variant/50 text-sm italic">
              Live demo coming soon
            </span>
          )}

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hairline-border rounded-full text-on-surface hover:text-primary transition-colors liquid-hover">
              <Code className="w-5 h-5" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
