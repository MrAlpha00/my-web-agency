'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Using heroicons as seen in page.tsx

const solutions = [
    {
        title: 'Web Infrastructure',
        description: 'High-conversion websites and scalable full-stack systems.',
        href: '/services/infrastructure', // Keeping hrefs consistent with original
    },
    {
        title: 'Automation & AI Agents',
        description: 'n8n workflows, AI integrations, and intelligent process automation.',
        href: '/services/automation',
    },
    {
        title: 'Growth Systems',
        description: 'Conversion funnels, content systems, and lead capture automation.',
        href: '/services/growth',
    },
];

export default function CoreSolutions() {
    return (
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
            {/* Background glow effects */}
            {/* Background glow effects - Atmospheric radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
                    >
                        Our Core Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto"
                    >
                        We engineer automation-first systems designed to scale revenue — not workload.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20"
                        >
                            {/* Card Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold leading-7 text-white group-hover:text-indigo-200 transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    {solution.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 flex items-center gap-x-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                                Learn more
                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-[250ms] group-hover:translate-x-1 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
