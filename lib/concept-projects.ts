import { ShoppingCart, Activity, Truck, Lock, Bot, Map } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ConceptProject {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// TODO: add liveUrl/githubUrl once these are actually built and deployed
export const conceptProjects: ConceptProject[] = [
  {
    slug: "pulse-ecommerce",
    title: "Pulse E-Commerce Storefront",
    category: "Web Development",
    icon: ShoppingCart,
    description: "A high-performance headless commerce frontend built for speed and SEO. Integrates deeply with a headless CMS to deliver sub-second page loads across thousands of product SKUs.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Shopify Storefront API"]
  },
  {
    slug: "lumina-patient-portal",
    title: "Lumina Patient Portal",
    category: "UI/UX Design",
    icon: Activity,
    description: "A human-centered redesign of a legacy telehealth platform. Focuses on strict accessibility standards (WCAG 2.1 AA) and intuitive appointment scheduling workflows for elderly users.",
    techStack: ["Figma", "Framer", "Design Systems", "Accessibility (a11y)"]
  },
  {
    slug: "freightflow-logistics",
    title: "FreightFlow Logistics Tracker",
    category: "Full Stack Development",
    icon: Truck,
    description: "An end-to-end supply chain visibility tool featuring real-time websocket updates. Includes a scalable PostgreSQL backend managing geospatial transit data and a highly responsive dashboard.",
    techStack: ["Node.js", "PostgreSQL", "Socket.io", "React"]
  },
  {
    slug: "fortis-identity",
    title: "Fortis Identity Provider",
    category: "Web Security & Penetration Testing",
    icon: Lock,
    description: "A hardened authentication microservice demonstrating zero-trust architecture. Successfully underwent a simulated penetration test to validate its resilience against OAuth misconfigurations and token hijacking.",
    techStack: ["Auth0", "OWASP Tools", "Node.js", "Burp Suite"]
  },
  {
    slug: "synthetix-support",
    title: "Synthetix Support Agent",
    category: "AI Integration",
    icon: Bot,
    description: "An intelligent automated support triaging system powered by a fine-tuned LLM. Connects to existing Zendesk workflows to analyze sentiment and route complex tickets to human agents automatically.",
    techStack: ["OpenAI API", "Python", "Pinecone", "Next.js"]
  },
  {
    slug: "strata-cloud-blueprint",
    title: "Strata Cloud Blueprint",
    category: "Tech Consulting",
    icon: Map,
    description: "A comprehensive architectural roadmap for migrating a monolithic financial system to a serverless AWS infrastructure. Includes deep vendor evaluations, cost modeling, and an actionable phased delivery plan.",
    techStack: ["AWS", "System Design", "Cost Modeling", "Microservices"]
  }
];
