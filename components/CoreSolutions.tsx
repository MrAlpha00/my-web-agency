import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Zap, BarChart3, Cpu, TrendingUp } from 'lucide-react';
import { RotatingText } from '@/components/ui/rotating-text';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const coreCards = [
    {
        title: "AI Automation Systems",
        description: "Intelligent workflows that generate revenue without manual effort.",
        icon: <Zap className="h-6 w-6 text-[#FF6A00]" />,
    },
    {
        title: "Conversion Architecture",
        description: "Funnels engineered to convert traffic into predictable income.",
        icon: <BarChart3 className="h-6 w-6 text-[#FF6A00]" />,
    },
    {
        title: "Growth Infrastructure",
        description: "Scalable backend systems built for long-term expansion.",
        icon: <Cpu className="h-6 w-6 text-[#FF6A00]" />,
    },
    {
        title: "Sales Optimization",
        description: "Data-driven systems that maximize LTV and reduce CAC.",
        icon: <TrendingUp className="h-6 w-6 text-[#FF6A00]" />,
    }
];

export default function CoreSolutions() {
    return (
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
            {/* Background glow effects - Atmospheric radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF6A00]/10 via-[#FF2E00]/10 to-indigo-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-[800] tracking-[-1px] text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                    >
                        <span>Scale</span>
                        <RotatingText
                            words={["Faster.", "Smarter.", "Predictably.", "Sustainably.", "Profitably."]}
                            mode="drop"
                            className="text-transparent bg-clip-text pb-2 min-w-[200px]"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #FF6A00 0%, #FF2E00 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        />
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

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {coreCards.map((card, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="min-h-[16rem] list-none"
                        >
                            <div className="relative h-full rounded-[1.25rem] border-[rgba(255,255,255,0.08)] border p-2 md:rounded-[1.5rem] md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#0B0F1A] p-6 shadow-xl z-10 transition-colors">
                                    <div className="relative flex flex-1 flex-col justify-start gap-4">
                                        <div className="w-fit rounded-lg border border-[rgba(255,255,255,0.1)] bg-white/5 p-3 backdrop-blur-md">
                                            {card.icon}
                                        </div>
                                        <div className="space-y-3 mt-2">
                                            <h3 className="pt-0.5 text-xl font-semibold font-sans tracking-tight md:text-2xl text-balance text-white">
                                                {card.title}
                                            </h3>
                                            <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-400">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
