
import {
    CloudIcon,
    CpuChipIcon,
    ArrowTrendingUpIcon,
    ShieldCheckIcon,
    BoltIcon,
    ServerIcon
} from '@heroicons/react/24/outline'; // Assuming heroicons is installed as per package.json

export interface Service {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroGradient: string;
    problem: {
        title: string;
        description: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string;
        features: string[];
    };
    deliverables: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    meta: {
        title: string;
        description: string;
    };
    audience?: {
        title: string;
        cards: {
            title: string;
            points: string[];
        }[];
    };
    features?: {
        title: string;
        description: string;
        icon: string;
    }[];
    techStack?: {
        category: string;
        items: string[];
    }[];
    results?: {
        title: string;
        description: string;
    }[];
    whyUs?: {
        title: string;
        items: string[];
    };
    cta?: {
        headline: string;
        subheadline: string;
        primaryText: string;
        primaryLink: string;
        secondaryText: string;
        secondaryLink: string;
    };
    faq?: {
        question: string;
        answer: string;
    }[];
    relatedService?: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export const services: Record<string, Service> = {
    "web-infrastructure": {
        slug: "web-infrastructure",
        title: "High-Conversion Websites Built to Scale.",
        subtitle: "Speed. Security. Scalability.",
        description: "We design and engineer full-stack web systems that load instantly, convert consistently, and scale effortlessly as your business grows.",
        heroGradient: "from-blue-600 via-indigo-500 to-purple-600",
        problem: {
            title: "Why Most Websites Underperform",
            description: "Traditional WordPress sites and monolithic architectures are choking your growth.",
            points: [
                "Slow load speeds killing conversions",
                "Poor architecture limiting scalability",
                "Generic design without conversion strategy",
                "Security gaps and fragile backend systems"
            ]
        },
        solution: {
            title: "Headless, Edge-First Architecture",
            description: "We build on Next.js and Vercel to deliver instant loads and unhackable security.",
            features: [
                "Global Content Delivery Network (CDN)",
                "Server-side rendering for perfect SEO",
                "Impenetrable static generation security",
                "Instant deployments"
            ]
        },
        deliverables: [
            "Custom Next.js Web Application",
            "Headless CMS Integration (Sanity/Contentful)",
            "Vercel Deployment Setup",
            "Advanced Analytics Dashboard",
            "SEO Optimization Suite"
        ],
        process: [
            { step: 1, title: "Audit & Architecture", description: "We analyze your current stack and design a JAMstack migration plan." },
            { step: 2, title: "Development", description: "Agile sprints to build component-driven UI/UX." },
            { step: 3, title: "Migration & Launch", description: "Zero-downtime cutover with automated testing." },
            { step: 4, title: "Scale", description: "Ongoing performance monitoring and optimization." }
        ],
        meta: {
            title: "Modern Web Infrastructure Services | Pureons",
            description: "Upgrade to high-performance, secure web infrastructure with Next.js and edge computing."
        },
        audience: {
            title: "Built for Growth-Driven Teams",
            cards: [
                {
                    title: "Startups",
                    points: [
                        "Launch fast with scalable architecture from day one.",
                        "Avoid rebuilding when traction hits."
                    ]
                },
                {
                    title: "SaaS Companies",
                    points: [
                        "Performance-optimized platforms designed for user growth.",
                        "Secure, modular, and scalable infrastructure."
                    ]
                },
                {
                    title: "Agencies & Digital Brands",
                    points: [
                        "High-converting marketing sites built to maximize ROI.",
                        "Fast-loading pages engineered for paid traffic."
                    ]
                }
            ]
        },
        features: [
            {
                title: "High-Performance Frontend",
                description: "Next.js / SSR / Edge rendering optimized for speed and SEO.",
                icon: "window"
            },
            {
                title: "Scalable Backend Systems",
                description: "API-first architecture, secure auth, modular services.",
                icon: "server"
            },
            {
                title: "Conversion-Optimized UI/UX",
                description: "Layouts engineered to guide users toward action.",
                icon: "cursor"
            },
            {
                title: "Performance & Core Web Vitals",
                description: "Lighthouse-optimized builds with caching strategies.",
                icon: "rocket"
            },
            {
                title: "Secure Infrastructure",
                description: "Production-ready hosting, SSL, CI/CD pipelines.",
                icon: "shield"
            },
            {
                title: "Analytics & Tracking",
                description: "GA4, Meta Pixel, event tracking for measurable growth.",
                icon: "chart"
            }
        ],
        techStack: [
            {
                category: "Frontend",
                items: ["Next.js", "React", "Tailwind CSS"]
            },
            {
                category: "Backend",
                items: ["Node.js", "PostgreSQL", "Neon / Supabase"]
            },
            {
                category: "Infrastructure",
                items: ["Vercel", "Cloudflare", "AWS"]
            },
            {
                category: "Automation",
                items: ["n8n", "OpenAI API"]
            }
        ],
        results: [
            {
                title: "Faster Load Times = Higher Conversions",
                description: "Every 1-second delay reduces conversions. We optimize aggressively."
            },
            {
                title: "Scalable Architecture = Long-Term Stability",
                description: "Built to handle growth without expensive rebuilds."
            },
            {
                title: "Data-Driven Optimization",
                description: "Every build includes tracking for informed decisions."
            }
        ],
        whyUs: {
            title: "Why PUREONS?",
            items: [
                "Engineering-first mindset (not template-based)",
                "Built for performance from day one",
                "Automation-ready infrastructure",
                "Long-term partnership approach"
            ]
        },
        cta: {
            headline: "Ready to Build a Website That Actually Performs?",
            subheadline: "Book a strategy call and get a free performance & scalability audit.",
            primaryText: "Book Free Strategy Call",
            primaryLink: "https://calendly.com/sm4686771/automation-systems-audit",
            secondaryText: "Request Automation Consultation",
            secondaryLink: "/"
        },
        faq: [
            {
                question: "How long does it take to build a high-performance website?",
                answer: "Typically 4-8 weeks. We prioritize core architecture first, ensuring a rapid launch of high-value pages while iterating on advanced features."
            },
            {
                question: "Do you work with startups or only established businesses?",
                answer: "We work with both. Our architecture scales from Day 1 startups to enterprise-level traffic, preventing technical debt before it starts."
            },
            {
                question: "What technologies do you use for web development?",
                answer: "We specialize in Next.js, React, Node.js, and PostgreSQL. We deploy on edge networks like Vercel and Cloudflare for maximum speed."
            },
            {
                question: "Can you rebuild or optimize an existing website?",
                answer: "Yes. We can audit your current stack, migrate to a modern architecture, or implement headless solutions to keep your existing backend."
            },
            {
                question: "Will my website be optimized for SEO and performance?",
                answer: "Absolutely. We engineer for 100/100 Lighthouse scores, Core Web Vitals compliance, and programmatic SEO structure out of the box."
            },
            {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes. We offer retainer packages for performance monitoring, feature updates, and infrastructure scaling to keep your system peak-performing."
            }
        ],
        relatedService: {
            title: "Looking for Automation & AI Integration?",
            description: "We also design intelligent automation systems that integrate seamlessly with your web infrastructure.",
            buttonText: "Explore AI & Automation Services",
            buttonLink: "/services/automation-ai-agents"
        }
    },
    "automation-ai-agents": {
        slug: "automation-ai-agents",
        title: "AI Agents & Automation",
        subtitle: "Workforce Multipliers.",
        description: "Deploy autonomous AI agents to handle repetitive tasks, customer support, and data processing 24/7.",
        heroGradient: "from-emerald-500 via-teal-500 to-cyan-500",
        problem: {
            title: "Human Bottlenecks",
            description: "Your team is drowning in repetitive tasks that steal time from strategic work.",
            points: [
                "Slow response times to leads",
                "Manual data entry errors",
                "High operational costs",
                "Employee burnout from mundane tasks"
            ]
        },
        solution: {
            title: "Digital Workforce Deployment",
            description: "Custom AI agents that learn your business and execute workflows autonomously.",
            features: [
                "24/7 Customer Support Bots",
                "Automated Lead Qualification",
                "Intelligent Document Processing",
                "Workflow Orchestration"
            ]
        },
        deliverables: [
            "Custom LLM Agent Configuration",
            "Vector Database Setup for Knowledge Retrieval",
            "Multi-channel Integration (Slack/Email/Web)",
            "Dashboard for Agent Monitoring",
            "Human-in-the-loop Handoff Protocols"
        ],
        process: [
            { step: 1, title: "Workflow Mapping", description: "Identify high-value automation targets." },
            { step: 2, title: "Agent Training", description: "Fine-tune models on your proprietary data." },
            { step: 3, title: "Integration", description: "Connect agents to your CRM, ERP, and communication tools." },
            { step: 4, title: "Deployment", description: "Live launch with performance monitoring." }
        ],
        meta: {
            title: "AI Automation Services | Pureons",
            description: "Deploy custom AI agents to automate workflows and scale operations."
        }
    },
    "growth-systems": {
        slug: "growth-systems",
        title: "Growth Systems Engineering",
        subtitle: "Predictable Revenue Engines.",
        description: "Data-driven marketing and sales infrastructure that fills your pipeline automatically.",
        heroGradient: "from-orange-500 via-amber-500 to-yellow-500",
        problem: {
            title: "Unpredictable Growth",
            description: "Relying on referrals or manual outreach is not a scalable strategy.",
            points: [
                "Feast or famine revenue cycles",
                "Lack of attribution data",
                "Leaking funnel buckets",
                "Disjointed marketing tools"
            ]
        },
        solution: {
            title: "Closed-Loop Revenue Architecture",
            description: "We connect marketing signal to sales action with precise data tracking.",
            features: [
                "Unified CRM & Marketing Automation",
                "Full-funnel Analytics",
                "Automated Nurture Sequences",
                "Conversion Rate Optimization (CRO)"
            ]
        },
        deliverables: [
            "CRM Architecture & Setup",
            "Marketing Automation Workflows",
            "Analytics & Attribution Dashboard",
            "Lead Scoring System",
            "A/B Testing Framework"
        ],
        process: [
            { step: 1, title: "Funnel Analysis", description: "Identify leaks and friction points in your buyer journey." },
            { step: 2, title: "Infrastructure Build", description: "Set up tracking, CRM, and automation tools." },
            { step: 3, title: "Campaign Launch", description: "Activate data-driven acquisition channels." },
            { step: 4, title: "Optimize", description: "Iterate based on conversion data." }
        ],
        meta: {
            title: "Growth Systems Engineering | Pureons",
            description: "Build predictable revenue engines with advanced growth infrastructure."
        }
    }
};
