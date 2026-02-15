'use client';

import { motion } from 'framer-motion';
import CalendlyPopupButton from './CalendlyPopupButton';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'; // Assuming heroicons is installed

export default function FloatingCTA() {
    return (
        <div className="fixed bottom-8 right-8 z-50 hidden md:block">
            <CalendlyPopupButton
                url="https://calendly.com/sm4686771/automation-systems-audit"
                className="group relative flex items-center gap-3 bg-indigo-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-indigo-500 transition-all hover:-translate-y-1 hover:shadow-indigo-500/30"
            >
                <span className="absolute inset-0 rounded-full border border-white/20" />

                {/* Pulse Effect */}
                <span className="absolute -inset-1 rounded-full bg-indigo-500 opacity-30 animate-ping" />

                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                <span>Get Your Growth Architecture Review</span>
            </CalendlyPopupButton>
        </div>
    );
}
