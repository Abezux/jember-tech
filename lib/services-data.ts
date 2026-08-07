import { Code, PenSquare, Layers, ShieldCheck, Cpu, ListChecks, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  process: string[];
  techStack: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code,
    shortDesc: "High-performance, responsive websites tailored to your business needs.",
    longDesc: "We build highly optimized, responsive web applications tailored to your unique business logic and user expectations. Our solutions are designed to scale, leveraging modern web standards and high-performance rendering techniques.",
    deliverables: ["Custom Web Applications", "Responsive Layouts", "SEO Optimization", "Performance Audits"],
    process: ["Discovery & Planning", "Wireframing", "Development & Testing", "Deployment"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    faqs: [
      { q: "How long does development take?", a: "Typically 4-8 weeks depending on complexity." },
      { q: "Do you offer maintenance?", a: "Yes, we offer ongoing maintenance and support contracts." }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenSquare,
    shortDesc: "Human-centered design focusing on intuitive navigation.",
    longDesc: "We create digital experiences that blend aesthetic elegance with intuitive usability. Our human-centered design approach ensures your product not only looks stunning but delivers seamless user engagement.",
    deliverables: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
    process: ["User Research", "Concept Generation", "Prototyping", "User Testing"],
    techStack: ["Figma", "Framer", "Adobe CC", "Sketch"],
    faqs: [
      { q: "Can you redesign an existing app?", a: "Absolutely. We specialize in revamping legacy interfaces." }
    ]
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    icon: Layers,
    shortDesc: "End-to-end solutions combining robust backends with seamless frontends.",
    longDesc: "From the database architecture to the client-side interface, we provide complete, end-to-end development services. We construct robust, scalable infrastructures that power seamless frontend experiences.",
    deliverables: ["API Development", "Database Architecture", "Frontend Integration", "Cloud Deployment"],
    process: ["Architecture Design", "Database Modeling", "API Development", "Frontend Integration"],
    techStack: ["Node.js", "PostgreSQL", "GraphQL", "Docker"],
    faqs: [
      { q: "What backend technologies do you use?", a: "We primarily use Node.js, Python, and Go depending on requirements." }
    ]
  },
  {
    slug: "web-security",
    title: "Web Security",
    icon: ShieldCheck,
    shortDesc: "Protecting your assets with enterprise-grade encryption.",
    longDesc: "Security isn't an afterthought. We implement military-grade encryption, real-time threat detection, and comprehensive security audits to ensure your digital assets remain impenetrable.",
    deliverables: ["Security Audits", "Penetration Testing", "Encryption Implementation", "Compliance Readiness"],
    process: ["Vulnerability Assessment", "Threat Modeling", "Implementation", "Continuous Monitoring"],
    techStack: ["OWASP Tools", "Cloudflare", "Auth0", "HashiCorp Vault"],
    faqs: [
      { q: "Do you perform compliance audits?", a: "Yes, we help prepare systems for SOC2 and GDPR compliance." }
    ]
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    icon: Cpu,
    shortDesc: "Embedding intelligent automation and predictive analytics.",
    longDesc: "Future-proof your business by integrating advanced machine learning models and AI-driven automation into your existing systems to enhance decision-making and operational efficiency.",
    deliverables: ["Custom AI Models", "LLM Integration", "Predictive Analytics", "Process Automation"],
    process: ["Data Assessment", "Model Selection", "Training & Fine-tuning", "System Integration"],
    techStack: ["OpenAI API", "TensorFlow", "Python", "Pinecone"],
    faqs: [
      { q: "Can you integrate AI into legacy systems?", a: "Yes, we design microservices to securely bridge AI models with legacy architecture." }
    ]
  },
  {
    slug: "tech-consulting",
    title: "Tech Consulting",
    icon: ListChecks,
    shortDesc: "Strategic guidance on technology stacks and scalability.",
    longDesc: "Leverage our deep industry expertise to navigate complex technical landscapes. We provide strategic blueprints for digital transformation, infrastructure scaling, and tech debt reduction.",
    deliverables: ["Architecture Blueprints", "Code Reviews", "Scalability Roadmaps", "Vendor Evaluation"],
    process: ["Initial Assessment", "Strategic Planning", "Roadmap Delivery", "Ongoing Advisory"],
    techStack: ["AWS", "System Design", "Agile Methodologies", "Jira"],
    faqs: [
      { q: "Do you offer fractional CTO services?", a: "Yes, we offer high-level technical leadership on a fractional basis." }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
