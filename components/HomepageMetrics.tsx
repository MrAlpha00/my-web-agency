'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2500 });
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

    // Format numbers like 3.2 differently if needed or handle simple numbers
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
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            <AnimatedCounter value={50} suffix="+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest font-medium">
                            Systems Engineered
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            <AnimatedCounter value={120} suffix="+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest font-medium">
                            Workflows Built
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            <AnimatedCounter prefix="$" value={3.2} suffix="M+" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest font-medium">
                            Revenue Impacted
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            <AnimatedCounter value={99.9} suffix="%" />
                        </div>
                        <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest font-medium">
                            Performance Uptime
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
