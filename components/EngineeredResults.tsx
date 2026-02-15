'use client';

import { motion, useInView, animate } from 'framer-motion';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function CountUp({ metric }: { metric: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    // Parse metric: extract number and non-number parts
    const match = metric.match(/^(\D*)(\d+)(\D*)$/);

    useEffect(() => {
        if (!inView || !match) return;

        const node = nodeRef.current;
        const from = 0;
        const to = parseInt(match[2]);
        const prefix = match[1];
        const suffix = match[3];

        const controls = animate(from, to, {
            duration: 1,
            ease: "easeOut",
            onUpdate(value) {
                if (node) node.textContent = prefix + value.toFixed(0) + suffix;
            }
        });

        return () => controls.stop();
    }, [inView, match]);

    if (!match) return <span>{metric}</span>; // Return text as is if no number found (e.g. "Full-Stack")

    return <span ref={nodeRef}>{match[1]}0{match[3]}</span>;
}

const caseStudies = [
    {
        metric: '+180%',
        title: 'Lead Capture Efficiency',
        description: 'Redesigned landing system with automation workflows for improved conversion flow.',
        href: '/case-studies/lead-capture',
    },
    {
        metric: '12+',
        title: 'Automated Business Processes',
        description: 'Built n8n-powered workflow infrastructure eliminating manual operations.',
        href: '/case-studies/automation',
    },
    {
        metric: 'Full-Stack',
        title: 'SaaS Platform',
        description: 'Engineered scalable web application with secure backend architecture.',
        href: '/case-studies/saas-platform',
    },
];

export default function EngineeredResults() {
    return (
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
            <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Engineered Results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-zinc-400"
                    >
                        Real systems. Measurable outcomes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col p-8 rounded-2xl bg-zinc-900/30 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/50"
                        >
                            {/* Subtle glow behind metric */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-100 transition-colors">
                                    <CountUp metric={study.metric} />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                                    {study.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-6 mb-8">
                                    {study.description}
                                </p>

                                <Link
                                    href={study.href}
                                    className="inline-flex items-center text-sm font-medium text-zinc-300 group-hover:text-white transition-colors relative overflow-hidden group/link"
                                >
                                    <span className="relative">
                                        View Case
                                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-indigo-400 origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                                    </span>
                                    <ArrowLongRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
