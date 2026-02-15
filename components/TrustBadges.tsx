'use client';

import { motion } from 'framer-motion';

const badges = [
    "Next.js",
    "Vercel",
    "PostgreSQL",
    "Tailwind CSS",
    "Stripe",
    "Supabase",
    "Neon",
    "Framer",
];

export default function TrustBadges() {
    return (
        <section className="bg-zinc-950 py-10 border-b border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-center text-sm font-semibold leading-8 text-zinc-500 mb-8">
                    TRUSTED TECH STACK & INTEGRATIONS
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {badges.map((badge, index) => (
                        <div key={index} className="text-xl font-bold text-zinc-400 hover:text-white transition-colors">
                            {/* In a real app, use Svg logos here. For now, text is cleaner than broken images */}
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
