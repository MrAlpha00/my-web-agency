import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';

export async function generateStaticParams() {
    const posts = await getAllPosts('blog');
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug('blog', slug);

    if (!post || !post.meta) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.meta.title,
        description: post.meta.description,
        openGraph: {
            title: post.meta.title,
            description: post.meta.description,
            type: 'article',
            publishedTime: post.meta.date,
            images: [
                {
                    url: post.meta.image || '/images/og/default.png',
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
    a: (props: any) => <Link href={props.href || '#'} {...props} className="text-indigo-600 hover:text-indigo-500 no-underline hover:underline" />,
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { meta, content } = await getPostBySlug('blog', slug);

    if (!meta || !meta.title || meta.title === 'Error' || meta.title === 'Not Found') {
        notFound();
    }

    const { title, date, tags, description, image } = meta;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        datePublished: date,
        author: {
            '@type': 'Organization',
            name: 'Pureons',
        },
        image: image ? `https://pureons.com${image}` : `https://pureons.com/images/og/default.png`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="bg-white min-h-screen pt-24 pb-16">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-x-4 text-xs mb-6">
                            <time dateTime={date} className="text-gray-500">
                                {date}
                            </time>
                            {tags && tags.map((tag: string) => (
                                <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-500 leading-8">
                            {description}
                        </p>
                    </div>

                    {image && (
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 shadow-xl ring-1 ring-gray-900/10">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg prose-indigo mx-auto text-gray-700">
                        <MDXRemote source={content} components={components} />
                    </div>
                </div>
            </article>
        </>
    );
}
