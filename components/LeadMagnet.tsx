'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(data.message);
                // Trigger download
                if (data.downloadUrl) {
                    const link = document.createElement('a');
                    link.href = data.downloadUrl;
                    link.download = 'Web-Infrastructure-Checklist.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to submit. Please try again.');
        }
    };

    return (
        <section className="py-24 bg-zinc-900 border-y border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600/5 noise-bg opacity-50 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        Is Your Infrastructure Holding You Back?
                    </h2>
                    <p className="text-lg leading-8 text-zinc-400 mb-8">
                        Download our free <strong>2026 Web Infrastructure Optimization Checklist</strong> to identify bottlenecks and scale faster.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:text-zinc-500"
                            placeholder="Enter your work email"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="flex-none rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                        >
                            {status === 'loading' ? 'Sending...' : 'Get Checklist'}
                        </button>

                        {/* Success/Error Message */}

                    </form>
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-green-400 text-sm font-medium"
                        >
                            {message} Check your downloads folder!
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-red-400 text-sm font-medium"
                        >
                            {message}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
