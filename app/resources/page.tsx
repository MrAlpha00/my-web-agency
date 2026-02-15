import type { Metadata } from 'next';
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Resources | Pureons',
    description: 'Free engineering checklists, automation guides, and architectural patterns.',
};

export default function ResourcesPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Engineering Resources
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Tools, templates, and guides to help you build better web infrastructure.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Checklist Card */}
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <DocumentTextIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Web Infrastructure Checklist (2026)</h3>
                            <p className="text-zinc-400 mb-6 h-20">
                                The comprehensive 50-point audit we use for enterprise clients. Covers performance, security, and scalability.
                            </p>
                            <Link
                                href="/assets/checklist.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors"
                            >
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download PDF
                            </Link>
                        </div>

                        {/* More placeholders */}
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 opacity-50 cursor-not-allowed">
                            <div className="w-12 h-12 bg-white/5 text-zinc-500 rounded-lg flex items-center justify-center mb-6">
                                <DocumentTextIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-500 mb-2">Automation ROI Calculator</h3>
                            <p className="text-zinc-600 mb-6 h-20">
                                Calculate exactly how much money AI agents can save your operations.
                            </p>
                            <span className="inline-flex items-center gap-2 text-zinc-600 font-semibold text-sm uppercase tracking-wider">
                                Coming Soon
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
