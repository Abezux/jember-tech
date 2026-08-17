import { Code, PenSquare, Layers, ShieldCheck, Cpu, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  process: { title: string; description: string }[];
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
    process: [
      { title: "Discovery & Planning", description: "We sit down to understand your business goals, target audience, and functional requirements to lay a solid foundation." },
      { title: "Wireframing & Prototyping", description: "We create low-fidelity mockups and high-fidelity prototypes, ensuring the user journey is validated before writing code." },
      { title: "Development & Testing", description: "Our engineers build the application using modern frameworks, coupled with rigorous automated and manual QA." },
      { title: "Deployment & Handoff", description: "We smoothly transition the product to your live environment, setting up CI/CD pipelines and post-launch monitoring." }
    ],
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
    process: [
      { title: "User Research", description: "We analyze competitor landscapes and conduct user interviews to establish data-driven design pillars." },
      { title: "Concept Generation", description: "Exploring diverse visual directions to find the aesthetic that perfectly resonates with your brand identity." },
      { title: "Prototyping", description: "Building interactive models to test user flows and gather early feedback without engineering overhead." },
      { title: "User Testing", description: "Observing real users navigating the prototype to uncover friction points and iterate on the final polish." }
    ],
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
    process: [
      { title: "Architecture Design", description: "Mapping out cloud infrastructure, database schemas, and microservices for maximum scalability and resilience." },
      { title: "Database Modeling", description: "Structuring relational and non-relational data entities to ensure performant queries and strict data integrity." },
      { title: "API Development", description: "Creating robust, secure REST or GraphQL endpoints to seamlessly connect your frontend and backend ecosystems." },
      { title: "Frontend Integration", description: "Connecting the user interface to your new backend, ensuring state is managed efficiently and securely." }
    ],
    techStack: ["Node.js", "PostgreSQL", "GraphQL", "Docker"],
    faqs: [
      { q: "What backend technologies do you use?", a: "We primarily use Node.js, Python, and Go depending on requirements." }
    ]
  },
  {
    slug: "web-security",
    title: "Web Security & Penetration Testing",
    icon: ShieldCheck,
    shortDesc: "Ongoing security hardening and active penetration testing to protect your assets.",
    longDesc: "Security isn't an afterthought. We implement military-grade encryption and real-time threat detection, alongside active penetration testing engagements, to ensure your digital assets remain impenetrable.",
    deliverables: ["Security Audits", "Scoped Penetration Test", "Encryption Implementation", "Vulnerability Report with Severity Ratings", "Remediation Guidance", "Optional Retest"],
    process: [
      { title: "Scoping & Rules of Engagement", description: "We define the exact boundaries, testing windows, and methodologies for the penetration test or security audit." },
      { title: "Testing & Exploitation", description: "Our ethical hackers actively attempt to breach your defenses using industry-standard tools to uncover hidden vulnerabilities." },
      { title: "Implementation & Hardening", description: "We deploy robust encryption, WAFs, and secure configurations to protect against the identified threats." },
      { title: "Continuous Monitoring", description: "Setting up real-time alerts and ongoing vulnerability scanning to maintain your security posture over time." }
    ],
    techStack: ["OWASP Tools", "Burp Suite", "Nmap", "Cloudflare", "Auth0", "HashiCorp Vault"],
    faqs: [
      { q: "Do you perform compliance audits?", a: "Yes, we help prepare systems for SOC2 and GDPR compliance." },
      { q: "Is penetration testing legal/authorized?", a: "Yes, all tests are performed under strictly defined and mutually signed Rules of Engagement." },
      { q: "Do we get a written report?", a: "Absolutely. We deliver comprehensive reports detailing each vulnerability, its severity, and exact remediation steps." }
    ]
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    icon: Cpu,
    shortDesc: "Embedding intelligent automation and predictive analytics.",
    longDesc: "Future-proof your business by integrating advanced machine learning models and AI-driven automation into your existing systems to enhance decision-making and operational efficiency.",
    deliverables: ["Custom AI Models", "LLM Integration", "Predictive Analytics", "Process Automation"],
    process: [
      { title: "Data Assessment", description: "We evaluate your existing datasets for quality, volume, and structure to determine AI readiness." },
      { title: "Model Selection", description: "Choosing the right foundational models or algorithms—whether LLMs or predictive engines—that fit your specific use case." },
      { title: "Training & Fine-tuning", description: "Adapting the models using your proprietary data to ensure highly relevant and accurate outputs." },
      { title: "System Integration", description: "Deploying the AI services into your production environment with secure API layers and monitoring." }
    ],
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
    process: [
      { title: "Initial Assessment", description: "We conduct a deep dive into your current architecture, team structure, and technical debt to identify bottlenecks." },
      { title: "Strategic Planning", description: "Collaborating with stakeholders to define a clear, actionable technology roadmap aligned with business objectives." },
      { title: "Roadmap Delivery", description: "Presenting comprehensive blueprints, recommended tech stacks, and step-by-step implementation plans." },
      { title: "Ongoing Advisory", description: "Providing fractional technical leadership and continuous guidance to ensure your team executes the roadmap successfully." }
    ],
    techStack: ["AWS", "System Design", "Agile Methodologies", "Jira"],
    faqs: [
      { q: "Do you offer fractional CTO services?", a: "Yes, we offer high-level technical leadership on a fractional basis." }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
