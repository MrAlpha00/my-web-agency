import type { Metadata } from 'next';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
    title: 'Careers at Pureons | Join Our Team',
    description: 'Join Pureons and help us build the future of intelligent infrastructure. We are looking for engineers, designers, and systems thinkers.',
    openGraph: {
        title: 'Careers at Pureons | Join Our Team',
        description: 'Join Pureons and help us build the future of intelligent infrastructure.',
        url: '/careers',
        siteName: 'Pureons',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers at Pureons | Join Our Team',
        description: 'Join Pureons and help us build the future of intelligent infrastructure.',
    },
};

export default function CareersPage() {
    const jobPostings = [
        {
            "@type": "JobPosting",
            "title": "Full Stack Engineer",
            "description": "We are looking for a senior engineer to lead our core product development. You will be responsible for building scalable web applications using Next.js, managing databases, and integrating AI services.",
            "datePosted": "2024-01-01",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Pureons",
                "sameAs": "https://pureons.com"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Remote",
                    "addressLocality": "Remote",
                    "addressRegion": "Remote",
                    "postalCode": "Remote",
                    "addressCountry": "Remote"
                }
            },
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": {
                    "@type": "QuantitativeValue",
                    "value": 100000,
                    "unitText": "YEAR"
                }
            }
        },
        {
            "@type": "JobPosting",
            "title": "Automation Engineer",
            "description": "Design and implement complex automation workflows using n8n and Make.com. You will help clients eliminate manual tasks and optimize their business processes.",
            "datePosted": "2024-01-01",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Pureons",
                "sameAs": "https://pureons.com"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Remote",
                    "addressLocality": "Remote",
                    "addressRegion": "Remote",
                    "postalCode": "Remote",
                    "addressCountry": "Remote"
                }
            }
        }
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': jobPostings
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CareersPageContent />
        </>
    );
}
