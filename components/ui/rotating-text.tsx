"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence, TargetAndTransition, VariantLabels } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

type AnimationMode = "slide" | "fade" | "blur" | "flip" | "drop";

type MotionState = TargetAndTransition | VariantLabels | boolean | undefined | any;

interface RotatingTextProps {
    words: string[];
    interval?: number;
    mode?: AnimationMode;
    className?: string;
    style?: React.CSSProperties;
}

const animations: Record<
    AnimationMode,
    { initial: MotionState; animate: MotionState; exit: MotionState }
> = {
    slide: {
        initial: { y: "100%", opacity: 0 },
        animate: { y: "0%", opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    blur: {
        initial: { opacity: 0, filter: "blur(12px)" },
        animate: { opacity: 1, filter: "blur(0px)" },
        exit: { opacity: 0, filter: "blur(12px)" },
    },
    flip: {
        initial: { rotateX: 90, opacity: 0 },
        animate: { rotateX: 0, opacity: 1 },
        exit: { rotateX: -90, opacity: 0 },
    },
    drop: {
        initial: { y: "-80%", opacity: 0, scale: 0.8 },
        animate: { y: "0%", opacity: 1, scale: 1 },
        exit: { y: "80%", opacity: 0, scale: 0.8 },
    },
};

export function RotatingText({
    words,
    interval = 2500,
    mode = "slide",
    className,
    style,
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((i) => (i + 1) % words.length);
    }, [words.length]);

    useEffect(() => {
        const id = setInterval(next, interval);
        return () => clearInterval(id);
    }, [next, interval]);

    const { initial, animate, exit } = animations[mode] as { initial: MotionState; animate: MotionState; exit: MotionState };

    return (
        <span
            className={cn(
                "relative inline-flex overflow-hidden justify-items-start whitespace-nowrap",
                className
            )}
            style={{ perspective: mode === "flip" ? 600 : undefined, ...style }}
        >
            {/* invisible placeholder for width */}
            <span className="invisible px-1">
                {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
            </span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    className="absolute inset-0 flex items-center justify-start lg:justify-start px-1"
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                        duration: 0.5,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
