'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SparklesIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    RocketLaunchIcon,
    CommandLineIcon,
    ChevronDownIcon,
    ArrowRightIcon,
    BriefcaseIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';
import InteractiveGlowSection from '@/components/InteractiveGlowSection';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';

// --- Data ---
const benefits = [
    {
        icon: SparklesIcon,
        title: "Real AI Systems",
        description: "Work on cutting-edge agentic workflows and LLM integrations."
    },
    {
        icon: UserGroupIcon,
        title: "High Ownership",
        description: "Lead projects from day one. Your code ships to production."
    },
    {
        icon: GlobeAmericasIcon,
        title: "Remote-First",
        description: "Work from anywhere. We care about output, not hours."
    },
    {
        icon: RocketLaunchIcon,
        title: "Performance Driven",
        description: "Meritocracy over politics. Best ideas win."
    },
    {
        icon: CommandLineIcon,
        title: "Modern Tech Stack",
        description: "Next.js, TypeScript, n8n, Supabase, Vercel."
    }
];

const jobs = [
    {
        id: 1,
        title: "Full Stack Engineer",
        department: "Engineering",
        type: "Remote",
        description: "We are looking for a senior engineer to lead our core product development. You will be responsible for building scalable web applications using Next.js, managing databases, and integrating AI services.",
        requirements: [
            "5+ years of experience with React/Next.js",
            "Strong understanding of serverless architecture",
            "Experience with PostgreSQL and Supabase"
        ]
    },
    {
        id: 2,
        title: "Automation Engineer",
        department: "Operations",
        type: "Remote",
        description: "Design and implement complex automation workflows using n8n and Make.com. You will help clients eliminate manual tasks and optimize their business processes.",
        requirements: [
            "Expertise in n8n or similar low-code platforms",
            "Strong JavaScript/TypeScript skills for custom functions",
            "Understanding of REST APIs and webhooks"
        ]
    },
    {
        id: 3,
        title: "Growth Systems Analyst",
        department: "Growth",
        type: "Hybrid",
        description: "Analyze client data to identify growth opportunities. You will work closely with the engineering team to implement data-driven strategies.",
        requirements: [
            "Experience with GA4, Mixpanel, or PostHog",
            "Strong analytical and problem-solving skills",
            "Ability to translate data into actionable insights"
        ]
    },
    {
        id: 4,
        title: "UI/UX Performance Designer",
        department: "Design",
        type: "Remote",
        description: "Create stunning, high-performance interfaces. You will focus on both aesthetics and conversion optimization.",
        requirements: [
            "Portfolio showcasing modern, clean designs",
            "Experience with Figma and prototyping tools",
            "Understanding of web performance principles"
        ]
    }
];

const cultureValues = [
    "No micromanagement.",
    "High responsibility.",
    "Performance > politics.",
    "Builders, not talkers.",
    "Systems thinking mindset."
];

// --- Components ---

const JobCard = ({ job }: { job: typeof jobs[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group border border-white/5 bg-zinc-900/50 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors"
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-6 cursor-pointer flex items-center justify-between"
            >
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span className="flex items-center gap-1">
                            <BriefcaseIcon className="w-4 h-4" />
                            {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            {job.type}
                        </span>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors"
                >
                    <ChevronDownIcon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 pt-0 text-zinc-400 border-t border-white/5 mt-2">
                            <p className="py-4 leading-relaxed">{job.description}</p>
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Requirements:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {job.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={`mailto:careers@pureons.com?subject=Application for ${job.title}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
                            >
                                Apply Now
                                <ArrowRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function CareersPageContent() {
    return (
        <main className="bg-black min-h-screen selection:bg-indigo-500/30">
            {/* 1. Hero Section */}
            <InteractiveGlowSection className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20 pointer-events-none" />

                <div className="relative z-10 px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-zinc-300">We are hiring</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                            Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Intelligent Infrastructure.</span>
                        </h1>

                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            We’re building automation-first systems that power modern digital businesses. Join a team of builders, hackers, and systems thinkers.
                        </p>
                    </motion.div>
                </div>
            </InteractiveGlowSection>

            {/* 2. Why Work With Us */}
            <section className="py-24 bg-zinc-950 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
                        <p className="text-zinc-400">More than just a job. It's a craft.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <benefit.icon className="w-24 h-24 text-indigo-500 rotate-12" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                        <benefit.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Open Roles */}
            <section className="py-24 relative">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Roles</h2>
                        <p className="text-zinc-400">Join our mission to automate the world.</p>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Culture Section */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Culture Code</h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {cultureValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                            >
                                {value}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Application CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-900/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Don't see a perfect fit?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10">
                        We are always looking for exceptional talent. If you think you can help us build the future, we want to hear from you.
                    </p>
                    <a
                        href="mailto:careers@pureons.com?subject=General Application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Send us your portfolio
                        <ArrowRightIcon className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </main>
    );
}
