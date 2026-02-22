import Link from 'next/link';
import { Metadata } from 'next';
import { services } from '@/lib/services';
import ServiceFlipCard from '@/components/ServiceFlipCard';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';

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
    alternates: {
        canonical: '/services',
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
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Object.values(services).map((service) => (
                            <ServiceFlipCard key={service.slug} service={service} />
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
