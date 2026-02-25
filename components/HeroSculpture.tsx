'use client';

import { motion } from 'framer-motion';

/**
 * HeroSculpture — A stylized lightning / flame SVG sculpture
 * anchored to the right side of the hero section.
 *
 * Layers:
 *   1. Outer aura   — large, very blurred, slow breathing
 *   2. Mid bloom    — medium blur, screen‑blended glow
 *   3. Inner core   — crisp SVG paths with subtle scale oscillation
 *   4. Bright pulse — occasional flash overlay
 */
export default function HeroSculpture() {
    /* ── shared SVG paths (lightning / flame hybrid) ─────────────── */
    const flamePath =
        'M200 450 Q160 350 200 260 Q220 200 190 140 Q170 80 210 20 Q230 80 250 140 Q270 200 240 260 Q280 350 240 450 Z';
    const lightningPath =
        'M220 460 L230 300 L260 310 L240 180 L270 190 L235 20 L225 160 L200 150 L215 280 L185 270 Z';
    const secondaryFlamePath =
        'M180 450 Q140 370 170 300 Q190 250 165 190 Q150 140 180 80 Q205 140 195 200 Q210 260 195 320 Q220 380 195 450 Z';

    return (
        <div
            className="absolute top-0 right-0 w-[55%] h-full pointer-events-none select-none hidden md:block"
            aria-hidden="true"
        >
            {/* ── Layer 1 — Outer aura ──────────────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.02, 0.95] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg
                    viewBox="0 0 440 500"
                    className="w-[90%] h-[90%] max-h-[700px]"
                    style={{
                        filter: 'blur(60px)',
                        mixBlendMode: 'screen',
                    }}
                >
                    <defs>
                        <radialGradient id="auraGrad" cx="50%" cy="45%" r="55%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <ellipse cx="220" cy="240" rx="200" ry="230" fill="url(#auraGrad)" />
                </svg>
            </motion.div>

            {/* ── Layer 2 — Mid bloom ───────────────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.45, 0.7, 0.45], scale: [0.98, 1.04, 0.98] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg
                    viewBox="0 0 440 500"
                    className="w-[70%] h-[70%] max-h-[560px]"
                    style={{
                        filter: 'blur(30px)',
                        mixBlendMode: 'screen',
                    }}
                >
                    <defs>
                        <linearGradient id="bloomGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
                        </linearGradient>
                    </defs>
                    <path d={flamePath} fill="url(#bloomGrad)" />
                    <path d={secondaryFlamePath} fill="url(#bloomGrad)" opacity="0.6" />
                </svg>
            </motion.div>

            {/* ── Layer 3 — Inner core (crisp paths) ────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.03, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg
                    viewBox="0 0 440 500"
                    className="w-[60%] h-[60%] max-h-[480px]"
                    style={{ filter: 'blur(2px)', mixBlendMode: 'screen' }}
                >
                    <defs>
                        <linearGradient id="coreGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.8" />
                            <stop offset="40%" stopColor="#a78bfa" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="boltGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#f5f3ff" stopOpacity="0.95" />
                        </linearGradient>
                    </defs>
                    <path d={flamePath} fill="url(#coreGrad)" opacity="0.7" />
                    <path d={lightningPath} fill="url(#boltGrad)" opacity="0.85" />
                    <path d={secondaryFlamePath} fill="url(#coreGrad)" opacity="0.45" />
                </svg>
            </motion.div>

            {/* ── Layer 4 — Bright pulse flash ──────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0, 0, 0, 0.9, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeOut',
                    times: [0, 0.85, 0.9, 0.93, 1],
                }}
            >
                <svg
                    viewBox="0 0 440 500"
                    className="w-[55%] h-[55%] max-h-[440px]"
                    style={{
                        filter: 'blur(12px)',
                        mixBlendMode: 'screen',
                    }}
                >
                    <path d={lightningPath} fill="#e0e7ff" opacity="0.9" />
                    <path d={flamePath} fill="#c4b5fd" opacity="0.5" />
                </svg>
            </motion.div>

            {/* ── Mobile-only subtle glow (shown below md) ──────────── */}
            {/* This is handled via the vignette/radial gradient in page.tsx */}
        </div>
    );
}
