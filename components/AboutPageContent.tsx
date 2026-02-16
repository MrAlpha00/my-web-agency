'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    CpuChipIcon,
    ChartBarIcon,
    ClockIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
    ArrowRightIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import InteractiveGlowSection from '@/components/InteractiveGlowSection';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';

// --- Components ---

// 1. Stats Counter Component
const AnimatedCounter = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref} className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {displayValue}{suffix}
            </div>
            <div className="text-sm md:text-base text-zinc-500 uppercase tracking-wider font-medium group-hover:text-zinc-300 transition-colors">
                {label}
            </div>
        </div>
    );
};

// 2. Value Card Component
const ValueCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
        <p className="text-zinc-400 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors">
            {description}
        </p>
    </motion.div>
);

// 3. Process Step Component
const ProcessStep = ({ number, title, description, isLast }: { number: string; title: string; description: string; isLast?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex gap-8 pb-12 last:pb-0"
    >
        {/* Timeline Line */}
        {!isLast && (
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-zinc-800" />
        )}

        {/* Number Bubble */}
        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            {number}
        </div>

        {/* Content */}
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export default function AboutPageContent() {
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
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-zinc-300">Our Mission</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                            Engineering Growth Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Modern Businesses.</span>
                        </h1>

                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            We design automation-first web systems that scale revenue without scaling headcount. No bloat. No templates. Just pure performance.
                        </p>
                    </motion.div>
                </div>
            </InteractiveGlowSection>

            {/* 2. Philosophy Section */}
            <section className="py-24 bg-zinc-950/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built on First Principles.</h2>
                            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                                Most agencies sell hours. We sell outcomes. We believe the modern web isn't just about brochures—it's about building intelligent systems that work while you sleep.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                Our engineering philosophy discards legacy bloat in favor of lean, high-performance architectures driven by data and automation.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <ValueCard
                                title="Systems > Hacks"
                                description="We build robust infrastructure, not temporary band-aids."
                                delay={0.1}
                            />
                            <ValueCard
                                title="Automation > Manpower"
                                description="Scale your impact with code, not just more hiring."
                                delay={0.2}
                            />
                            <ValueCard
                                title="Performance > Vanity"
                                description="Speed and conversion metrics drive every design decision."
                                delay={0.3}
                            />
                            <ValueCard
                                title="Infrastructure > Templates"
                                description="Custom-engineered solutions for unique business problems."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Differentiators Section */}
            <InteractiveGlowSection className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            We bridge the gap between creative design and systems engineering.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: CpuChipIcon,
                                title: "Automation-First",
                                desc: "We bake automation into the core DNS of your website."
                            },
                            {
                                icon: CodeBracketIcon,
                                title: "AI-Native",
                                desc: "Leveraging LLMs and agents to power intelligent user experiences."
                            },
                            {
                                icon: ChartBarIcon,
                                title: "Revenue Engineering",
                                desc: "Every pixel is optimized for conversion and LTV."
                            },
                            {
                                icon: RocketLaunchIcon,
                                title: "Data-Driven",
                                desc: "We iterate based on analytics, not assumptions."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </InteractiveGlowSection>

            {/* 4. Process Timeline */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Engineering Process</h2>
                        <p className="text-zinc-400">From chaos to clarity in five steps.</p>
                    </div>

                    <div className="pl-4 md:pl-0">
                        <ProcessStep
                            number="01"
                            title="Audit"
                            description="We analyze your current infrastructure, traffic sources, and conversion bottlenecks to identify high-leverage opportunities."
                        />
                        <ProcessStep
                            number="02"
                            title="Architect"
                            description="We design a comprehensive blueprint connecting your web presence, CRM, and automation workflows."
                        />
                        <ProcessStep
                            number="03"
                            title="Build"
                            description="We develop high-performance assets using Next.js and modern tech stacks, ensuring speed and scalability."
                        />
                        <ProcessStep
                            number="04"
                            title="Optimize"
                            description="Rigorous testing, SEO tuning, and performance profiling to ensure launch-day perfection."
                        />
                        <ProcessStep
                            number="05"
                            title="Scale"
                            description="Ongoing iteration and data-led improvements to compound your growth over time."
                            isLast={true}
                        />
                    </div>
                </div>
            </section>

            {/* 5. Founder Vision */}
            <section className="py-24 border-y border-white/5 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800"
                        >
                            {/* Placeholder for Founder Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-purple-900/50 flex items-center justify-center">
                                <span className="text-zinc-600 font-mono">Founder Image</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                "Built by engineers. <br /> Driven by outcomes."
                            </h2>
                            <blockquote className="text-lg text-zinc-300 italic mb-6 border-l-2 border-indigo-500 pl-6 py-2">
                                We realized that modern businesses don't need just another pretty website. They need a revenue engine. A system that works as hard as they do. That's why we started Pureons.
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="font-bold text-white">Founder Name</div>
                                    <div className="text-zinc-500 text-sm">Principal Architect, Pureons</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Stats Section */}
            <div className="py-20 bg-black border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <AnimatedCounter value={50} label="Systems Designed" suffix="+" />
                        <AnimatedCounter value={120} label="Automations Deployed" suffix="+" />
                        <AnimatedCounter value={300} label="Avg Performance Boost" suffix="%" />
                        <AnimatedCounter value={25} label="Tools Integrated" suffix="+" />
                    </div>
                </div>
            </div>

            {/* 7. Final CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Let’s Build Your Revenue Engine.
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Stop leaving growth on the table. Schedule your architecture review today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <CalendlyPopupButton
                            url="https://calendly.com/sm4686771/automation-systems-audit"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            Get Growth Architecture Review
                            <ArrowRightIcon className="w-5 h-5" />
                        </CalendlyPopupButton>

                        <Link
                            href="/case-studies"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
