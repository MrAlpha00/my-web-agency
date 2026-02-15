'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        content: "We were hitting a wall with our legacy infrastructure. Pureons didn't just patch the holes; they re-architected our entire platform. Our load times dropped by 80% and conversion rates doubled overnight.",
        author: "Alex V.",
        role: "CTO",
        company: "FinTech Scale-up",
        image: "/images/testimonials/alex.jpg" // Placeholder or use dynamic initials
    },
    {
        content: "The automation systems they built replaced three full-time admin roles. I can finally focus on strategy while the business runs itself. It’s not just code; it’s operational leverage.",
        author: "Sarah J.",
        role: "Founder",
        company: "Luxe E-commerce",
        image: "/images/testimonials/sarah.jpg"
    },
    {
        content: "Professional, surgical, and incredibly fast. They understood our business logic better than we did. The custom dashboard they built gave us visibility we didn't know was possible.",
        author: "Marcus R.",
        role: "Director of Ops",
        company: "Logistics Heavy",
        image: "/images/testimonials/marcus.jpg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[25rem] h-[25rem] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Trusted by High-Growth Companies
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-400">
                        We don't sell hours. We sell outcomes. Here is what our partners have to say.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.15)"
                            }}
                            className="flex flex-col justify-between bg-zinc-900/50 border border-white/5 p-8 rounded-3xl relative group overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="text-lg font-medium text-white leading-relaxed">
                                    "{testimonial.content}"
                                </blockquote>
                            </div>

                            <div className="relative z-10 mt-8 flex items-center gap-x-4">
                                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-zinc-500">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
