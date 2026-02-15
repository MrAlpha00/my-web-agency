import Link from 'next/link';

export const metadata = {
    title: 'Blog | PUREONS',
    description: 'Insights on web infrastructure, automation, and scaling digital businesses.',
};

const posts = [
    {
        title: 'High-Conversion Websites: How to Design Web Infrastructure That Actually Sells',
        slug: 'high-conversion-websites-infrastructure',
        description: 'A practical, technical guide to building web infrastructure that increases conversions, reduces cost, and scales with your business.',
        date: '2026-02-15',
        tags: ['Web Infrastructure', 'Conversion']
    },
    {
        title: 'The ROI of Headless CMS: Why Brands Are Ditching WordPress',
        slug: 'headless-cms-roi',
        description: 'A calculated breakdown of why moving to a headless CMS like Sanity or Contentful saves money, increases security, and boosts conversions.',
        date: '2026-02-15',
        tags: ['Headless CMS', 'ROI']
    },
    {
        title: 'AI Customer Support Agents: The End of "Please Hold"',
        slug: 'ai-customer-support-agents',
        description: 'How to deploy autonomous AI agents that handle 80% of your support tickets instantly, 24/7.',
        date: '2026-02-15',
        tags: ['AI Agents', 'Automation']
    },
    {
        title: 'Programmatic SEO with Next.js: Scaling from 10 to 10,000 Pages',
        slug: 'programmatic-seo-nextjs',
        description: 'A technical guide to capturing long-tail search traffic by generating thousands of high-value landing pages dynamically.',
        date: '2026-02-15',
        tags: ['SEO', 'Next.js']
    },
    {
        title: 'n8n vs Zapier for Lead Flows: Which Scales Better?',
        slug: 'n8n-vs-zapier-scale',
        description: 'A pragmatic comparison of n8n and Zapier for scaling lead flows and business automation.',
        date: '2026-02-15',
        tags: ['Automation', 'Comparison']
    }
];

export default function BlogIndex() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Technical deep dives into automation, infrastructure, and growth.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-gray-500">
                                    {post.date}
                                </time>
                                {post.tags.map(tag => (
                                    <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
