'use client';

import { useRef, useEffect } from 'react';

interface InteractiveGlowSectionProps {
    children: React.ReactNode;
    className?: string;
}

export default function InteractiveGlowSection({ children, className = '' }: InteractiveGlowSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const overlay = overlayRef.current;
        if (!container || !overlay) return;

        // Only enable on desktop to avoid performance issues on mobile
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        if (!mediaQuery.matches) return;

        const updatePosition = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            overlay.style.setProperty('--x', `${x}px`);
            overlay.style.setProperty('--y', `${y}px`);
            overlay.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            overlay.style.opacity = '0';
        };

        container.addEventListener('mousemove', updatePosition);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', updatePosition);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden group ${className}`}>
            <div
                ref={overlayRef}
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 z-10 hidden lg:block"
                style={{
                    background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(120, 80, 255, 0.15), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
}
