import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Zap, BarChart3, Cpu, TrendingUp } from 'lucide-react';
import { RotatingText } from '@/components/ui/rotating-text';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const coreCards = [
    {
        title: "Web Building",
        description: "High-performance websites built to scale with headless architecture and edge-first delivery.",
        icon: <Cpu className="h-6 w-6 text-[#FF6A00]" />,
        href: "/services/web-infrastructure",
    },
    {
        title: "AI Automation",
        description: "Intelligent workflows and AI agents that generate revenue without manual intervention.",
        icon: <Zap className="h-6 w-6 text-[#FF6A00]" />,
        href: "/services/automation-ai-agents",
    },
    {
        title: "Growth Systems",
        description: "Data-driven marketing and sales infrastructure that fills your pipeline automatically.",
        icon: <TrendingUp className="h-6 w-6 text-[#FF6A00]" />,
        href: "/services/growth-systems",
    },
    {
        title: "Sales Optimization",
        description: "Data-driven systems that increase LTV, reduce CAC, and maximize revenue performance.",
        icon: <BarChart3 className="h-6 w-6 text-[#FF6A00]" />,
        href: "/services/sales-optimization",
    }
];

export default function CoreSolutions() {
    return (
        <section className="relative py-24 sm:py-32 bg-[#0B0F1A] overflow-hidden">
            {/* Background glow effects - Atmospheric radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF6A00]/10 via-[#FF2E00]/10 to-[#FF6A00]/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-[800] tracking-[-1px] text-white flex flex-col items-center justify-center gap-y-2"
                    >
                        <span>Revenue Infrastructure</span>
                        <span className="text-transparent bg-clip-text pb-2" style={{
                            backgroundImage: 'linear-gradient(90deg, #FF6A00 0%, #FF2E00 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            That Scales.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto"
                    >
                        We engineer automation-first systems designed to generate predictable, compounding growth.
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
                            <Link href={card.href} className="group block h-full outline-none">
                                <div className="relative h-full rounded-[1.25rem] border border-[rgba(255,255,255,0.08)] p-2 md:rounded-[1.5rem] md:p-3 transition-all duration-300 group-hover:-translate-y-[4px] group-hover:shadow-[0_8px_30px_rgba(255,106,0,0.12)] cursor-pointer bg-[#0B0F1A]">
                                    <div className="transition-opacity duration-300 group-hover:opacity-80">
                                        <GlowingEffect
                                            spread={40}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={3}
                                        />
                                    </div>
                                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1rem] md:rounded-[1.25rem] border border-[rgba(255,255,255,0.08)] bg-[#0B0F1A] p-6 shadow-xl z-10 transition-all duration-300 group-hover:border-[rgba(255,106,0,0.2)]">
                                        <div className="relative flex flex-1 flex-col justify-start gap-4">
                                            <div className="w-fit rounded-lg border border-[rgba(255,255,255,0.1)] bg-white/5 p-3 backdrop-blur-md transition-colors duration-300 group-hover:border-[rgba(255,106,0,0.3)]">
                                                {card.icon}
                                            </div>
                                            <div className="space-y-3 mt-2">
                                                <h3 className="pt-0.5 text-xl font-semibold font-sans tracking-tight md:text-2xl text-balance text-white transition-colors duration-300 group-hover:text-[#FF6A00]">
                                                    {card.title}
                                                </h3>
                                                <p className="font-sans text-sm md:text-base leading-relaxed text-zinc-400">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
