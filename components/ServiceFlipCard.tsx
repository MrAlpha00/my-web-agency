'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ServerIcon,
    CpuChipIcon,
    ArrowTrendingUpIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Service } from '@/lib/services';

const iconMap: Record<string, React.ReactNode> = {
    'ServerIcon': <ServerIcon className="h-8 w-8" />,
    'CpuChipIcon': <CpuChipIcon className="h-8 w-8" />,
    'ArrowTrendingUpIcon': <ArrowTrendingUpIcon className="h-8 w-8" />
};

export default function ServiceFlipCard({ service }: { service: Service }) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Toggle flip on click for mobile/touch
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="group h-[320px] w-full [perspective:1000px] cursor-pointer"
            onClick={handleFlip}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d]"
            >
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-900/40 border border-white/5 p-8 backdrop-blur-3xl [backface-visibility:hidden]">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.heroGradient} opacity-20 blur-[60px] rounded-full -mr-10 -mt-10`} />

                    <div className="flex flex-col h-full justify-between relative z-10">
                        <div>
                            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.heroGradient} bg-opacity-10 text-white shadow-lg`}>
                                {iconMap[service.iconName] || <ServerIcon className="h-6 w-6" />}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm font-medium text-indigo-400 uppercase tracking-wider">{service.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            Hover to reveal details
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-900 border border-indigo-500/30 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                >
                    <Link href={`/services/${service.slug}`} className="absolute inset-0 z-20" aria-label={`View details for ${service.title}`} />

                    <div className="flex flex-col h-full justify-between relative z-10 pointer-events-none">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                            <ul className="space-y-3">
                                {service.solution.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start text-zinc-300 text-sm">
                                        <span className="mr-2 text-indigo-400">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-4">
                            <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                                See Details
                                <ArrowRightIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
