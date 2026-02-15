'use client';

import { motion } from 'framer-motion';
import {
    RocketLaunchIcon,
    ShoppingBagIcon,
    AcademicCapIcon,
    CommandLineIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const industries = [
    {
        name: "SaaS Companies",
        icon: CommandLineIcon,
        description: "Scale your multi-tenant infrastructure and optimize user onboarding flows."
    },
    {
        name: "E-commerce Brands",
        icon: ShoppingBagIcon,
        description: "Automate inventory, fulfillment, and customer support with AI agents."
    },
    {
        name: "Coaches & Creators",
        icon: AcademicCapIcon,
        description: "Productize your knowledge with automated funnels and membership systems."
    },
    {
        name: "Agencies",
        icon: BuildingOfficeIcon,
        description: "Streamline client fulfillment and operations to break through revenue ceilings."
    },
    {
        name: "High-Growth Startups",
        icon: RocketLaunchIcon,
        description: "Build rapid MVPs and scalable foundations for Series A readiness."
    }
];

export default function WhoWeServe() {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Built for Ambitious Digital Businesses
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        We partner with founders who are ready to replace manual grind with intelligent systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 hover:border-indigo-500/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500" />

                            <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                            <p className="text-zinc-400 text-sm leading-6">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* CTA Card for alignment if odd number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl border-dashed"
                    >
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-2">Not listed?</h3>
                            <p className="text-zinc-400 text-sm mb-4">We solve complex data problems for any industry.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
