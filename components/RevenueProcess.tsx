'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Audit',
        description: 'We analyze workflows, traffic, lead capture, and bottlenecks.',
    },
    {
        id: '02',
        title: 'Architect',
        description: 'We design scalable web and automation infrastructure tailored to your growth stage.',
    },
    {
        id: '03',
        title: 'Automate',
        description: 'We implement AI agents, workflows, and intelligent systems.',
    },
    {
        id: '04',
        title: 'Scale',
        description: 'We refine, optimize, and engineer long-term revenue performance.',
    },
];

export default function RevenueProcess() {
    return (
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        How We Engineer Revenue Systems
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-zinc-400"
                    >
                        Every system we build follows a precision-driven engineering process — from audit to scale.
                    </motion.p>
                </div>

                {/* Micro Visual Indicator */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm"
                    >
                        <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/70 font-mono">
                            Process Framework
                        </span>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop (Horizontal) */}
                    {/* Connecting Line - Desktop (Horizontal) */}
                    <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                        {/* Static Glows near nodes */}
                        <div className="absolute inset-y-0 left-[12.5%] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-[1px]" />
                        <div className="absolute inset-y-0 left-[37.5%] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-[1px]" />
                        <div className="absolute inset-y-0 left-[62.5%] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-[1px]" />
                        <div className="absolute inset-y-0 left-[87.5%] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-[1px]" />

                        {/* Animated Pulse */}
                        <motion.div
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }} // Move further to ensure it clears completely
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                        />
                    </div>

                    {/* Connecting Line - Mobile (Vertical) */}
                    <div className="md:hidden absolute top-0 left-[24px] h-full w-[2px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: index * 0.15 }} // 250ms transition
                                whileHover={{ y: -5 }} // Subtle lift
                                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 group"
                            >
                                {/* Node */}
                                <div
                                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:border-indigo-400 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] group-hover:bg-indigo-500/10 transition-all duration-[250ms] ease-out md:mb-6"
                                >
                                    <span className="text-xs font-mono font-bold text-indigo-400 group-hover:text-white transition-colors duration-[250ms]">{step.id}</span>
                                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 md:text-center pt-1 md:pt-0">
                                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-[250ms]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-[250ms]">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
