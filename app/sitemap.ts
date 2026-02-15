
import { MetadataRoute } from 'next';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Static routes
    const routes = [
        '',
        '/contact',
        '/book',
        '/about',
        '/pricing',
        '/case-studies',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = Object.keys(services).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}
