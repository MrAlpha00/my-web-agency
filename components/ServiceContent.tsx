'use client';

import { motion } from 'framer-motion';
import { Service } from '@/lib/services';
import {
    CheckCircleIcon,
    ArrowRightIcon,
    XCircleIcon,
    BoltIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    WindowIcon,
    ServerStackIcon,
    CursorArrowRaysIcon,
    RocketLaunchIcon,
    PresentationChartLineIcon,
    PlusIcon,
    MinusIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import { useState } from 'react';

const iconMap: Record<string, React.ElementType> = {
    window: WindowIcon,
    server: ServerStackIcon,
    cursor: CursorArrowRaysIcon,
    rocket: RocketLaunchIcon,
    shield: ShieldCheckIcon,
    chart: PresentationChartLineIcon,
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {question}
                </span>
                <span className="ml-6 shrink-0 text-indigo-500">
                    {isOpen ? (
                        <MinusIcon className="h-6 w-6" />
                    ) : (
                        <PlusIcon className="h-6 w-6" />
                    )}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-zinc-400 leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

export default function ServiceContent({ service }: { service: Service }) {
    return (
        <main className="bg-black selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-8">
                {/* Background Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br ${service.heroGradient} opacity-20 blur-[120px] rounded-full`} />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-indigo-400 font-medium tracking-wide uppercase mb-4 text-sm md:text-base">
                            {service.subtitle}
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
            </section>

            {/* Audience Section */}
            {service.audience && (
                <section className="py-24 px-6 lg:px-8 bg-zinc-900/20 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
                        >
                            {service.audience.title}
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.audience.cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300 group"
                                >
                                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                                        {card.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {card.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                                <span className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Problem Section */}
            <section className="py-24 px-6 lg:px-8 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {service.problem.title}
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8">
                                {service.problem.description}
                            </p>
                            <div className="space-y-4">
                                {service.problem.points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <XCircleIcon className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                        <span className="text-zinc-300 text-lg">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            <ShieldCheckIcon className="h-32 w-32 text-red-500/20 group-hover:text-red-500/40 transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {service.features && (
                <section className="py-24 px-6 lg:px-8 bg-black relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                What We Engineer
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.features.map((feature, index) => {
                                const Icon = iconMap[feature.icon] || BoltIcon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/60 hover:border-indigo-500/30 transition-all duration-300 group"
                                    >
                                        <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                            <Icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack Section */}
            {service.techStack && (
                <section className="py-24 px-6 lg:px-8 bg-zinc-900/30">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
                        >
                            Technology We Use
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.techStack.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-bold text-indigo-400 border-b border-indigo-500/20 pb-4">
                                        {category.category}
                                    </h3>
                                    <div className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-lg bg-black border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900 transition-all duration-300 group flex items-center justify-center text-center"
                                            >
                                                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Results Section */}
            {service.results && (
                <section className="py-24 px-6 lg:px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
                        >
                            Engineered for Measurable Results
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 relative group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                                        {result.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed relative z-10">
                                        {result.description}
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Us Section */}
            {service.whyUs && (
                <section className="py-24 px-6 lg:px-8 bg-black">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
                        >
                            {service.whyUs.title}
                        </motion.h2>
                        <div className="space-y-4">
                            {service.whyUs.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-zinc-900 border border-white/5 flex items-center gap-4 hover:border-indigo-500/30 transition-colors"
                                >
                                    <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span className="text-lg text-white font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solution Section */}
            <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-950/10" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-indigo-500/20 bg-indigo-900/10 flex items-center justify-center group">
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                            <BoltIcon className="h-32 w-32 text-indigo-400/20 group-hover:text-indigo-400/40 transition-colors duration-500" />
                        </div>

                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {service.solution.title}
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8">
                                {service.solution.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {service.solution.features.map((feature, index) => (
                                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <h3 className="text-white font-medium">{feature}</h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="py-24 px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        What We Deliver
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.deliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 transition-colors"
                            >
                                <CheckCircleIcon className="h-6 w-6 text-indigo-500 shrink-0 mt-1" />
                                <span className="text-zinc-200 text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                        Our Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-8 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <div className="absolute -top-6 left-8 text-6xl font-black text-white/5 select-none">
                                    0{step.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                                <p className="text-zinc-400 relative z-10">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {service.faq && (
                <section className="py-24 px-6 lg:px-8 bg-zinc-900/20">
                    <div className="max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 rounded-2xl border border-white/5 p-8"
                        >
                            {service.faq.map((item, index) => (
                                <FAQItem key={index} question={item.question} answer={item.answer} />
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Related Service Section */}
            {service.relatedService && (
                <section className="py-16 px-6 lg:px-8 border-t border-white/10 bg-zinc-900/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {service.relatedService.title}
                            </h3>
                            <p className="text-zinc-400">
                                {service.relatedService.description}
                            </p>
                        </div>
                        <Link
                            href={service.relatedService.buttonLink}
                            className="shrink-0 px-6 py-3 rounded-full bg-indigo-500/10 text-indigo-400 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors border border-indigo-500/20"
                        >
                            {service.relatedService.buttonText}
                        </Link>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${service.heroGradient} opacity-10`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-black to-black opacity-50" />

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        {service.cta ? service.cta.headline : "Ready to Scale?"}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        {service.cta ? service.cta.subheadline : "Book a free consultation to verify if this solution fits your infrastructure."}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                    >
                        <CalendlyPopupButton
                            url={service.cta ? service.cta.primaryLink : "https://calendly.com/sm4686771/automation-systems-audit"}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
                        >
                            {service.cta ? service.cta.primaryText : "Book Consultation"}
                        </CalendlyPopupButton>
                        {service.cta && service.cta.secondaryLink && (
                            <Link
                                href={service.cta.secondaryLink}
                                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                {service.cta.secondaryText}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
