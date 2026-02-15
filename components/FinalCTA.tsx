'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Importing ArrowRightIcon based on usage in other components (checked page.tsx previously)
import CalendlyPopupButton from './CalendlyPopupButton';

export default function FinalCTA() {
    return (
        <section className="relative py-32 sm:py-48 bg-black overflow-hidden flex items-center justify-center">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

            {/* Grid Pattern Overlay (optional, for texture consistency) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20 pointer-events-none" />

            <div className="relative z-10 px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
                        Ready to Engineer Your Revenue System?
                    </h2>

                    <p className="mt-6 text-xl leading-8 text-zinc-300 max-w-2xl mx-auto mb-10">
                        Let’s design a scalable automation-first infrastructure tailored to your business goals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <CalendlyPopupButton
                            url="https://calendly.com/sm4686771/automation-systems-audit"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-black"
                        >
                            <span>Get Your Growth Architecture Review</span>
                            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </CalendlyPopupButton>

                        <CalendlyPopupButton
                            url="https://calendly.com/sm4686771/automation-systems-audit"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-zinc-300 transition-all duration-200 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 focus:ring-offset-black"
                        >
                            Get Free Automation Audit
                        </CalendlyPopupButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
