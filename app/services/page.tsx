import Link from 'next/link';
import { Metadata } from 'next';
import { services } from '@/lib/services';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'Services | PUREONS',
    description: 'High-performance web infrastructure, AI automation, and growth systems for scaling businesses.',
    openGraph: {
        title: 'Services | PUREONS',
        description: 'High-performance web infrastructure, AI automation, and growth systems.',
        url: 'https://pureons.com/services',
        siteName: 'PUREONS',
        locale: 'en_US',
        type: 'website',
    },
};

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-indigo-500/30">
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
                    </h1>
                    <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
                        We engineer digital ecosystems that drive revenue, efficiency, and scale.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative pb-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {Object.values(services).map((service) => (
                            <div
                                key={service.slug}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-8 transition-all hover:border-indigo-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.heroGradient} opacity-10 blur-[40px] group-hover:opacity-20 transition-opacity rounded-full -mr-10 -mt-10`} />

                                <div>
                                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.heroGradient} bg-opacity-10 text-white shadow-lg`}>
                                        {/* Icons could be mapped here if imports were dynamic, but keeping it simple for now or using generic shape */}
                                        <div className="h-6 w-6 rounded-full bg-white/20" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-sm font-medium text-indigo-400 mb-4 uppercase tracking-wider">{service.subtitle}</p>
                                    <p className="text-zinc-400 leading-relaxed mb-8">{service.description}</p>

                                    <ul className="mb-8 space-y-3">
                                        {service.solution.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-start text-zinc-300 text-sm">
                                                <span className="mr-3 text-indigo-500">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
                                >
                                    Explore Service
                                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden border-t border-white/10">
                <div className="absolute inset-0 bg-indigo-600/5" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        Not sure where to start?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400 mb-10">
                        Let's analyze your current infrastructure and identify the highest-leverage opportunities for growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CalendlyPopupButton
                            url="https://calendly.com/sm4686771/automation-systems-audit"
                            className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all hover:scale-105"
                        >
                            Book Free Audit
                        </CalendlyPopupButton>
                        <Link
                            href="/case-studies"
                            className="rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all border border-white/10"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
