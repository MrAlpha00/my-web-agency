'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
    const ref = useRef(null);
    // Use amount: 0.5 so it only triggers when well within viewport
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Start at 1 instead of 0 to ensure mobile doesn't show 0
    const springValue = useSpring(1, { bounce: 0, duration: 2500 });

    // Initialize with final value for SSR, then switch to starting value on mount
    const [displayValue, setDisplayValue] = useState(value);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setDisplayValue(1);
    }, []);

    useEffect(() => {
        if (hasMounted && isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue, hasMounted]);

    useEffect(() => {
        if (!hasMounted) return;
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue, hasMounted]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </span>
    );
};

export default function HomepageMetrics() {
    return (
        <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[800px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            <AnimatedCounter value={50} suffix="+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-400 uppercase tracking-widest font-semibold">
                            Revenue Systems Built
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            <AnimatedCounter value={120} suffix="+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-400 uppercase tracking-widest font-semibold">
                            Automation Workflows Deployed
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            <AnimatedCounter prefix="$" value={3} suffix="M+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-400 uppercase tracking-widest font-semibold">
                            Client Revenue Generated
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            <AnimatedCounter value={99} suffix="% " />
                        </div>
                        <div className="text-sm md:text-base text-zinc-400 uppercase tracking-widest font-semibold">
                            System Uptime Guarantee
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm md:text-base text-zinc-500 font-medium tracking-wide">
                        Results built through real client implementations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
