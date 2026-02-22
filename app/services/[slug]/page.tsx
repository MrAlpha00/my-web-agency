
import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceContent from '@/components/ServiceContent';

// Generate valid slugs for static export
export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

// Generate SEO tags
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.meta.title,
        description: service.meta.description,
        alternates: {
            canonical: `/services/${slug}`,
        },
    };
}

// Page Component
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: 'PUREONS',
            url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
        },
        serviceType: service.subtitle,
        areaServed: 'Global',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Deliverables',
            itemListElement: service.deliverables.map((item, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: item
                },
                position: index + 1
            }))
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceContent service={service} />
        </>
    );
}
