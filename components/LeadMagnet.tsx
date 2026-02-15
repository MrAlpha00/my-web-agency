'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { event } from '@/lib/analytics';

export default function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error('Something went wrong');

            setStatus('success');
            event({
                action: 'lead_magnet_submit',
                category: 'engagement',
                label: 'checklist_download',
            });

        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to join. Please try again.');
        }
    };

    return (
        <section className="bg-zinc-900 py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm">

                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/20">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                            <span>Free Resource</span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            The 2026 Web Infrastructure Checklist
                        </h2>

                        <p className="text-lg text-zinc-400">
                            Stop guessing why your site is slow. Download the exact 50-point checklist we use to audit high-growth startups before we write a single line of code.
                        </p>

                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
                                <span>Next.js Performance tuning secrets</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
                                <span>Database scaling strategies (Postgres/Redis)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
                                <span>Automated CI/CD pipeline setup</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircleIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Checklist Unlocked!</h3>
                                <p className="text-zinc-400 mb-6">We've sent a copy to your inbox (simulated).</p>
                                <a
                                    href="/assets/checklist.pdf"
                                    download
                                    className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-colors gap-2"
                                    onClick={() => event({ action: 'lead_magnet_download', category: 'engagement', label: 'pdf_click' })}
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                    Download PDF Now
                                </a>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                                        Work Email
                                    </label>
                                    <div className="relative">
                                        <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-zinc-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        'Get Free Checklist'
                                    )}
                                </button>

                                <p className="text-xs text-center text-zinc-600">
                                    No spam. Unsubscribe anytime. High-value engineering content only.
                                </p>
                                {status === 'error' && (
                                    <p className="text-sm text-red-400 text-center">{errorMessage}</p>
                                )}
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
