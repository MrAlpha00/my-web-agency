
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
        title: service.seoTitle || `${service.title} | PUREONS`,
        description: service.metaDescription,
        openGraph: {
            title: service.seoTitle || service.title,
            description: service.metaDescription,
            url: `/services/${service.slug}`,
        },
        alternates: {
            canonical: `/services/${service.slug}`,
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
        provider: {
            '@type': 'Organization',
            name: 'PUREONS',
            url: 'https://pureons.com'
        },
        description: service.metaDescription
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
