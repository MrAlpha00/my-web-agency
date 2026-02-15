'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const businessModels = [
    'SaaS',
    'E-commerce',
    'Coaching',
    'Agency',
    'Other',
];

const revenueRanges = [
    'Pre-revenue',
    '$0 - $10k',
    '$10k - $50k',
    '$50k - $100k',
    '$100k - $500k',
    '$500k+',
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        businessModel: '',
        revenue_band: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                website: '',
                businessModel: '',
                revenue_band: '',
                message: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-black pt-24 pb-12 px-6 lg:px-8 flex items-center justify-center">
            {/* Background Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-zinc-400">
                        Tell us about your business, and we'll engineer the perfect automation solution.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl"
                >
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-6">
                                <CheckCircleIcon className="h-10 w-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                            <p className="text-zinc-400">
                                We'll be in touch shortly to discuss your automation needs.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                            >
                                Send another request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-white">
                                    Website URL
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="url"
                                        name="website"
                                        id="website"
                                        placeholder="https://example.com"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="businessModel" className="block text-sm font-medium leading-6 text-white">
                                        Business Model
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name="businessModel"
                                            id="businessModel"
                                            value={formData.businessModel}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 bg-white/5 py-3 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&>option]:bg-zinc-900 transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            {businessModels.map((model) => (
                                                <option key={model} value={model}>{model}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="revenue_band" className="block text-sm font-medium leading-6 text-white">
                                        Est. Monthly Revenue
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name="revenue_band"
                                            id="revenue_band"
                                            value={formData.revenue_band}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 bg-white/5 py-3 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&>option]:bg-zinc-900 transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            {revenueRanges.map((range) => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                                    Project Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-colors"
                                        placeholder="Briefly describe what you're looking to automate..."
                                    />
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="rounded-md bg-red-500/10 p-4 flex items-center gap-3">
                                    <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                                    <p className="text-sm text-red-400">{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {status === 'loading' ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Request Automation Consultation'
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
