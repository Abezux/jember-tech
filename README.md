# Jember Tech 

> Innovative, Scalable, and Secure Digital Solutions — Transforming modern enterprises with next-generation web engineering, cybersecurity, and AI integration.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## About

**Jember Tech** is a full-stack digital agency and tech consultancy web platform designed to showcase enterprise-grade engineering capabilities. Founded on the intersection of modern Ethiopian ingenuity and global engineering standards, Jember Tech delivers high-performance web applications, resilient cybersecurity architectures, human-centered UI/UX systems, and AI-driven automation.

The platform provides a high-converting, fluid web experience with dynamic service catalogs, interactive concept work showcases, transparent pricing models, and real-time Telegram-integrated client onboarding.

---

## Project Structure

```text
Tech-solutions/
├── app/                           # Next.js App Router root
│   ├── api/contact/route.ts       # Serverless Telegram notification endpoint
│   ├── contact/                   # Contact page & interactive form client
│   ├── services/[slug]/           # Dynamic static-generated service detail pages
│   ├── globals.css                # Tailwind v4 theme, tokens & custom utilities
│   ├── layout.tsx                 # Root layout & global typography configuration
│   └── page.tsx                   # Main landing page assembling sections
├── components/                    # Reusable React components
│   ├── ui/                        # Accessible UI primitives (dialog, accordion, etc.)
│   ├── Hero.tsx                   # Interactive hero with motion effects
│   ├── Services.tsx               # Grid catalog of agency capabilities
│   ├── HowWeWork.tsx              # 6-step project execution lifecycle
│   ├── About.tsx                  # Company vision & background metrics
│   ├── Team.tsx                   # Founders & leadership cards
│   ├── CaseStudies.tsx            # Concept work showcase grid
│   ├── ConceptDialog.tsx          # Case study modal dialog
│   ├── Pricing.tsx                # Transparent tiered service packages
│   ├── FAQ.tsx                    # Interactive accordion FAQ
│   ├── Navbar.tsx                 # Responsive glassmorphism navigation header
│   └── Footer.tsx                 # Global footer with site navigation & social links
├── lib/                           # Core utilities and structured data sources
│   ├── concept-projects.ts        # Concept work models and project metadata
│   ├── services-data.ts           # Dynamic service content, FAQs & workflows
│   └── utils.ts                   # Class name merge helper (`cn`)
├── docs/                          # Project documentation & visual assets
│   └── images/                    # Screenshot storage for README
├── public/                        # Static assets (images, icons)
├── .env.example                   # Environment variable template
├── .gitignore                     # Git ignore rules for node, next.js, IDEs & OS
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and npm scripts
└── tsconfig.json                  # TypeScript compiler configuration
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

