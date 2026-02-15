'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const cases = [
    {
        title: "Full-Stack SaaS Platform Build",
        stat: "+180% Lead Conversion",
        description: "Architected a scalable multi-tenant SaaS for the logistics industry using Next.js 14 and Neon Postgres.",
        image: "/images/case-studies/saas-dashboard.jpg", // Ensure these exist or use placeholders
        slug: "full-stack-saas-platform",
        tags: ["SaaS", "Next.js", "System Architecture"]
    },
    {
        title: "E-commerce Automation Ecosystem",
        stat: "40% Operational Cost Reduction",
        description: "Replaced manual order processing with intelligent n8n workflows and AI agents.",
        image: "/images/case-studies/automation-graph.jpg",
        slug: "ecomm-automation",
        tags: ["Automation", "AI Agents", "E-commerce"]
    }
];

export default function CaseStudyPreview() {
    return (
        <section className="bg-black py-24 sm:py-32 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Latest Growth Architecture
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        See how we engineer systems that drive measurable revenue.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 transition-colors"
                        >
                            {/* Image Placeholder if Image fails */}
                            <div className="aspect-[16/9] w-full bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                                {/* We will just use a nice gradient placeholder if real image is missing to avoid 404 ugliness in preview */}
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute bottom-4 left-6 z-20">
                                    <div className="flex gap-2 mb-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-zinc-300 backdrop-blur-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-8">
                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-indigo-400 block mb-2">{post.stat}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        <Link href={`/case-studies/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                </div>
                                <p className="mt-2 flex-1 text-base leading-7 text-zinc-400">
                                    {post.description}
                                </p>
                                <div className="mt-8 flex items-center gap-x-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                    Read Case Study <ArrowRightIcon className="h-4 w-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/case-studies"
                        className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors"
                    >
                        View all case studies <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
