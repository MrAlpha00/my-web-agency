
import { Metadata } from 'next';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import { CheckIcon } from '@heroicons/react/20/solid';

export const metadata: Metadata = {
    title: 'Pricing & Engagement | PUREONS',
    description: 'Transparent investment models for scaling your digital infrastructure.',
    openGraph: {
        title: 'Pricing | PUREONS',
        description: 'Investment models for web infrastructure and automation.',
        url: 'https://pureons.com/pricing',
        siteName: 'PUREONS',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/pricing',
    },
};

const tiers = [
    {
        name: 'Website & Business Strategy Audit',
        id: 'tier-audit',
        href: '#',
        pricePrefix: 'Starting at',
        price: '$2,000',
        billingTerm: 'One-time investment',
        description: 'Deep-dive analysis of your current infrastructure, identifying bottlenecks and growth opportunities.',
        features: [
            'Full Technical Stack Audit',
            'Automation Opportunity Map',
            'SEO & Performance Breakdown',
            'Security Vulnerability Scan',
            'Migration/Upgrade Roadmap',
        ],
        cta: 'Start with Strategy Call',
        mostPopular: false,
    },
    {
        name: 'High-Performance Website System',
        id: 'tier-build',
        href: '#',
        pricePrefix: '',
        price: 'Custom',
        billingTerm: 'Project-based',
        description: 'We design and build a website that loads fast, ranks on Google, and converts visitors into clients.',
        features: [
            'Next.js / Headless CMS Build',
            'Fast global performance',
            'Custom CI/CD Pipelines',
            'Optimized for Google ranking',
            'Analytics & Tracking Setup',
            'Launch Support & Training',
        ],
        cta: 'Get My Custom Proposal',
        mostPopular: true,
    },
    {
        name: 'Ongoing Growth & Automation Support',
        id: 'tier-partner',
        href: '#',
        pricePrefix: '',
        price: 'Retainer',
        billingTerm: 'Monthly engagement',
        description: 'Ongoing engineering and automation support to scale your revenue operations continuously.',
        features: [
            'Dedicated Engineering Team',
            'Monthly Feature Sprints',
            '24/7 Uptime Monitoring',
            'Conversion Rate Optimization',
            'New Automation Workflows',
            'Priority Support',
        ],
        cta: 'Schedule Growth Call',
        mostPopular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="bg-black min-h-screen py-24 sm:py-32 text-white selection:bg-indigo-500/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Investment Models</h2>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Strategic Engineering for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            High-Growth Companies
                        </span>
                    </h1>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-400">
                    We don't sell hours. We sell outcome-based infrastructure that assets your business owns forever.
                </p>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-white/10 xl:p-10 transition-all ${tier.mostPopular ? 'bg-zinc-900/50 ring-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]' : 'bg-zinc-900/20'
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={`text-lg font-semibold leading-8 ${tier.mostPopular ? 'text-indigo-400' : 'text-white'
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                                            Most Popular
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p>
                                <div className="mt-6 flex flex-col gap-y-1">
                                    <div className="flex items-baseline gap-x-2">
                                        {tier.pricePrefix && <span className="text-lg font-semibold text-zinc-400">{tier.pricePrefix}</span>}
                                        <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                                    </div>
                                    {tier.billingTerm && <span className="text-sm font-medium text-zinc-500">{tier.billingTerm}</span>}
                                </div>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-300">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-500" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <CalendlyPopupButton
                                    url="https://calendly.com/sm4686771/automation-systems-audit"
                                    className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 ${tier.mostPopular
                                        ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus-visible:outline-indigo-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-white'
                                        }`}
                                >
                                    {tier.cta}
                                </CalendlyPopupButton>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-20 mx-auto max-w-3xl text-center">
                    <p className="text-xl font-medium text-white/90 tracking-wide bg-zinc-900/50 py-4 px-8 rounded-2xl border border-white/10 shadow-xl">
                        No hourly billing. No hidden fees. Clear scope. Clear outcomes.
                    </p>
                </div>

                <div className="mt-24 mx-auto max-w-5xl md:mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Which Plan Is Right For You?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="bg-zinc-900/40 rounded-2xl p-8 border border-white/5 transition hover:border-indigo-500/30 hover:bg-zinc-900/60">
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
                                Audit
                            </h3>
                            <p className="text-base text-zinc-400 leading-relaxed">
                                Best for founders who want clarity before investing.
                            </p>
                        </div>
                        <div className="bg-zinc-900/40 rounded-2xl p-8 border border-white/5 transition hover:border-indigo-500/30 hover:bg-zinc-900/60 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 relative z-10">
                                <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                                Website System
                            </h3>
                            <p className="text-base text-zinc-400 leading-relaxed relative z-10">
                                Best for companies ready to build or rebuild their website properly.
                            </p>
                        </div>
                        <div className="bg-zinc-900/40 rounded-2xl p-8 border border-white/5 transition hover:border-indigo-500/30 hover:bg-zinc-900/60">
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                                Growth Support
                            </h3>
                            <p className="text-base text-zinc-400 leading-relaxed">
                                Best for businesses scaling monthly and needing continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
