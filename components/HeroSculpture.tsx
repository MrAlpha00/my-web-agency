'use client';

import { motion } from 'framer-motion';

/**
 * HeroSculpture — N8N inspired animated sculpture.
 * 
 * Uses a layered approach:
 * 1. Base radial glow.
 * 2. Static SVG mask with an animated gradient/noise backdrop.
 * 3. Occasional bright pulse.
 * 
 * Performance: Uses native CSS transforms and avoids heavy WebGL/Lottie dependencies.
 */
export default function HeroSculpture() {
    return (
        <div
            className="absolute top-[5%] right-[-5%] w-[60%] h-[90%] pointer-events-none select-none hidden md:block"
            aria-hidden="true"
        >
            {/* ── Layer 1 — Base ambient glow ──────────────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                animate={{ opacity: [0.15, 0.25, 0.15], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div
                    className="w-[80%] h-[80%] rounded-full opacity-60 mix-blend-screen blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle at center, #ff6bcb 0%, #ffb86b 40%, transparent 70%)',
                    }}
                />
            </motion.div>

            {/* ── Layer 2 — The masked fire sculpture ──────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            >
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-[300px] h-[600px] lg:w-[400px] lg:h-[700px]"
                    style={{
                        // A sharp, unified lightning bolt style shape serving as the mask
                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M250,50 L200,300 L280,300 L150,650 L180,380 L100,380 Z' fill='black'/%3E%3C/svg%3E")`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M250,50 L200,300 L280,300 L150,650 L180,380 L100,380 Z' fill='black'/%3E%3C/svg%3E")`,
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        // Inner shadow/glow to define the shape edges
                        filter: 'drop-shadow(0 0 30px rgba(255,107,203,0.4))',
                    }}
                >
                    {/* Animated gradient simulating fire #ffb86b -> #ff6bcb */}
                    <div
                        className="absolute inset-[-50%]"
                        style={{
                            background: 'linear-gradient(135deg, #07070a 0%, #ff6bcb 30%, #ffb86b 70%, #07070a 100%)',
                            backgroundSize: '200% 200%',
                            animation: 'fireGradientFlow 8s ease infinite',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* ── Layer 3 — Very bright pulse flash (every ~8s) ────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center mix-blend-screen"
                animate={{ opacity: [0, 0, 0, 0, 0.8, 0] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeOut',
                    times: [0, 0.4, 0.8, 0.9, 0.95, 1],
                }}
            >
                <div
                    className="w-[60%] h-[60%] rounded-full blur-[80px]"
                    style={{
                        background: 'var(--color-hero-pulse)',
                    }}
                />
            </motion.div>
        </div>
    );
}
