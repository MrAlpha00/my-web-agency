import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import TrackPageView from '@/components/TrackPageView';

export async function generateStaticParams() {
    const posts = await getAllPosts('case-studies');
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug('case-studies', slug);

    if (!post || !post.meta) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: post.meta.title,
        description: post.meta.description,
        alternates: {
            canonical: `/case-studies/${slug}`,
        },
        openGraph: {
            title: post.meta.title,
            description: post.meta.description,
            type: 'article',
            publishedTime: post.meta.date,
            images: [
                {
                    url: post.meta.image || '/images/og/default-case.png',
                    width: 1200,
                    height: 630,
                    alt: post.meta.title,
                },
            ],
        },
    };
}

const components = {
    Link,
    CalendlyPopupButton,
    a: (props: any) => <Link href={props.href || '#'} {...props} className="text-indigo-400 hover:text-indigo-300 no-underline border-b border-indigo-500/30 hover:border-indigo-500 transition-colors" />,
    h2: (props: any) => <h2 {...props} className="text-3xl font-bold text-white mt-16 mb-8" />,
    h3: (props: any) => <h3 {...props} className="text-2xl font-bold text-white mt-12 mb-6" />,
    p: (props: any) => <p {...props} className="text-zinc-400 leading-relaxed mb-6" />,
    ul: (props: any) => <ul {...props} className="text-zinc-400 mb-6 space-y-2 list-disc pl-5 marker:text-indigo-500" />,
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { meta, content } = await getPostBySlug('case-studies', slug);


    if (!meta || !meta.title || meta.title === 'Error' || meta.title === 'Not Found') {
        notFound();
    }

    const { title, date, client, industry, services, description } = meta;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        datePublished: date,
        author: {
            '@type': 'Organization',
            name: 'Pureons',
        },
        image: meta.image ? `https://pureons.com${meta.image}` : `https://pureons.com/images/og/default-case.png`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TrackPageView eventName="case_study_view" title={title} />
            <article className="bg-[#0A0A0A] min-h-screen pt-24 pb-16 text-white selection:bg-indigo-500/30">
                {/* Hero Header */}
                <div className="relative border-b border-white/10 pb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-20 pointer-events-none" />

                    <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
                        <div className="flex flex-wrap items-center gap-6 text-sm mb-8 text-zinc-400">
                            {client && (
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                    <span className="uppercase tracking-wider font-semibold text-white">{client}</span>
                                </div>
                            )}
                            {industry && (
                                <div className="px-3 py-1 rounded-full border border-white/10">{industry}</div>
                            )}
                            <div className="text-zinc-500">{date}</div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                            {title}
                        </h1>

                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        {services && (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {services.map((service: string) => (
                                    <span key={service} className="px-3 py-1 bg-white/5 rounded-md text-sm text-indigo-300 font-medium border border-white/5">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
                    <div className="prose prose-lg prose-invert mx-auto">
                        <MDXRemote source={content} components={components} />
                    </div>

                    {/* Fallback CTA if needed */}
                    <div className="mt-24 pt-12 border-t border-white/10">
                        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-12 rounded-3xl text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500" />
                            <h3 className="text-3xl font-bold mb-6 text-white relative z-10">Need similar results?</h3>
                            <CalendlyPopupButton
                                url="https://calendly.com/sm4686771/automation-systems-audit"
                                className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] inline-block relative z-10"
                            >
                                Book Strategy Call
                            </CalendlyPopupButton>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
