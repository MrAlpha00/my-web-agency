'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/lib/services';

export default function CoreSolutions() {
    return (
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
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
                    {Object.values(services).map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                            >
                                {/* Card Hover Gradient - utilizing the gradient from service data */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold leading-7 text-white group-hover:text-indigo-200 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8 flex items-center gap-x-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                                    View Details
                                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
