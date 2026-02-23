import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service and engaging requirements with PUREONS.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsOfService() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24 selection:bg-indigo-500/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms of Service</h1>
                    <p className="text-zinc-400">Last Updated: February 2026</p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                        These Terms of Service constitute a legally binding agreement made between you and PUREONS
                        concerning your access to and use of our website and services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Our Services</h2>
                    <p className="text-zinc-400 mb-8">
                        PUREONS provides web infrastructure engineering, AI automation systems, and growth engineering services.
                        The specifics of our deliverables, timelines, and guarantees will be outlined in individual Statements of Work (SOW) or Master Service Agreements (MSA) signed during client onboarding.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-zinc-400 mb-8">
                        Unless otherwise indicated, the Site and its proprietary code, design, text, and graphics are our proprietary property.
                        Client specific infrastructure built during a contracted engagement will transfer ownership as outlined in the respective SOW upon full payment.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Representations</h2>
                    <p className="text-zinc-400 mb-6">By using the Site, you represent and warrant that:</p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2 mb-8">
                        <li>All registration/consultation information you submit will be true, accurate, current, and complete.</li>
                        <li>You have the legal capacity to agree to these Terms of Service.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Limitation of Liability</h2>
                    <p className="text-zinc-400 mb-8">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect,
                        consequential, exemplary, incidental, special, or punitive damages arising from your use of the website or our automated systems.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Modifications and Interruptions</h2>
                    <p className="text-zinc-400 mb-8">
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice.
                        We also reserve the right to modify or discontinue all or part of the Services without notice at any time.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact Us</h2>
                    <p className="text-zinc-400 mb-8">
                        To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:contact@pureons.com" className="text-indigo-400 hover:underline">contact@pureons.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
