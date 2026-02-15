
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
};

const tiers = [
    {
        name: 'Audit & Strategy',
        id: 'tier-audit',
        href: '#',
        price: { monthly: '$2,500', annually: '$2,500' },
        description: 'Deep-dive analysis of your current infrastructure, identifying bottlenecks and growth opportunities.',
        features: [
            'Full Technical Stack Audit',
            'Automation Opportunity Map',
            'SEO & Performance Breakdown',
            'Security Vulnerability Scan',
            'Migration/Upgrade Roadmap',
        ],
        cta: 'Book Audit Call',
        mostPopular: false,
    },
    {
        name: 'Infrastructure Build',
        id: 'tier-build',
        href: '#',
        price: { monthly: 'Custom', annually: 'Custom' },
        description: 'End-to-end engineering of your high-performance web system. We build the engine; you drive the growth.',
        features: [
            'Next.js / Headless CMS Build',
            'Global Edge Network Setup',
            'Custom CI/CD Pipelines',
            'Core Web Vitals Optimization',
            'Analytics & Tracking Setup',
            'Launch Support & Training',
        ],
        cta: 'Get a Proposal',
        mostPopular: true,
    },
    {
        name: 'Growth Partner',
        id: 'tier-partner',
        href: '#',
        price: { monthly: 'Retainer', annually: 'Retainer' },
        description: 'Ongoing engineering and automation support to scale your revenue operations continuously.',
        features: [
            'Dedicated Engineering Team',
            'Monthly Feature Sprints',
            '24/7 Uptime Monitoring',
            'Conversion Rate Optimization',
            'New Automation Workflows',
            'Priority Support',
        ],
        cta: 'Discuss Partnership',
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
                            className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-white/10 xl:p-10 ${tier.mostPopular ? 'bg-zinc-900/50 ring-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]' : 'bg-zinc-900/20'
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
                                <div className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">{tier.price.monthly}</span>
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
                                    className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.mostPopular
                                            ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                            : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                                        }`}
                                >
                                    {tier.cta}
                                </CalendlyPopupButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
