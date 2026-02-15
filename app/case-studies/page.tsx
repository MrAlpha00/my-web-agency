import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Case Studies | PUREONS',
    description: 'Real-world examples of how we help businesses scale with automation and better infrastructure.',
};

const cases = [
    {
        title: 'ExamGuardPro: Migrating to Production-Grade Web Infrastructure',
        slug: 'examguardpro',
        description: 'Migration from Replit to Render, Neon integration, Vite build fix and production CI pipeline.',
        image: '/images/og/case-examguardpro.svg',
        stat: '40% Traffic Increase'
    },
    {
        title: 'Scaling a High-Ticket Coach to $50k/mo with Automation',
        slug: 'coach-automation',
        description: 'How we automated lead qualification and booking for a business coach, saving 20+ hours per week.',
        image: '/images/og/case-coach-automation.svg',
        stat: '$50k/mo Revenue'
    },
    {
        title: 'Recovering $120k/yr in Lost Carts for a Shopify Brand',
        slug: 'ecomm-automation',
        description: 'How we used advanced Klaviyo flows and SMS automation to increase customer LTV.',
        image: '/images/og/case-ecomm-automation.svg',
        stat: '$120k/yr Recovered'
    }
];

export default function CaseStudiesIndex() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Success Stories</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        See how we move the needle for our partners.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {cases.map((post) => (
                        <article key={post.slug} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <span className="text-indigo-600 font-semibold">{post.stat}</span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link href={`/case-studies/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
