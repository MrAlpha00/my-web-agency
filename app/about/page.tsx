import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
    title: 'About Pureons | Engineering Revenue Growth',
    description: 'We design automation-first web systems that scale revenue without scaling headcount. Built by engineers, driven by outcomes.',
    openGraph: {
        title: 'About Pureons | Engineering Revenue Growth',
        description: 'We design automation-first web systems that scale revenue without scaling headcount.',
        url: '/about',
        siteName: 'Pureons',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Pureons | Engineering Revenue Growth',
        description: 'We design automation-first web systems that scale revenue without scaling headcount.',
    },
};

export default function AboutPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
            '@type': 'Organization',
            name: 'Pureons',
            description: 'Engineering Growth Infrastructure for Modern Businesses.',
            url: 'https://pureons.com', // Replace with actual URL if known, else usage placeholder logic or env var
            sameAs: [
                'https://twitter.com/pureons',
                'https://linkedin.com/company/pureons'
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutPageContent />
        </>
    );
}
