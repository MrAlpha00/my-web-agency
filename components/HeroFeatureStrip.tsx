'use client';

import { motion } from 'framer-motion';
import { CommandLineIcon, ShieldCheckIcon, CubeTransparentIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
    {
        title: 'IT Ops',
        subtitle: 'On-board new employees',
        icon: CommandLineIcon,
        color: 'text-orange-400',
    },
    {
        title: 'Sec Ops',
        subtitle: 'Enrich security incident tickets',
        icon: ShieldCheckIcon,
        color: 'text-orange-400',
    },
    {
        title: 'Dev Ops',
        subtitle: 'Convert natural language into API calls',
        icon: CubeTransparentIcon,
        color: 'text-orange-400',
    },
    {
        title: 'Sales',
        subtitle: 'Generate customer insights from reviews',
        icon: ChartBarIcon,
        color: 'text-orange-400',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.8,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroFeatureStrip() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-8 mt-16 md:mt-24 z-20 relative"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="group relative flex flex-col p-6 rounded-xl bg-[#0d0d14] border border-white/5 shadow-[inset_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer overflow-hidden"
                    >
                        {/* Subtle top highlight on hover */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <h3 className="text-lg font-semibold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                            {feature.title} <span className="font-normal text-zinc-400">can</span>
                        </h3>
                        <div className="flex items-start gap-2 mt-auto">
                            {/* Lightning accent icon resembling n8n's orange flash */}
                            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.color}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-var(--color-hero-text-muted) leading-snug group-hover:text-zinc-200 transition-colors">
                                {feature.subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
