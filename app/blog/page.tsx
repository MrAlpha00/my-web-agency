import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
    title: 'Blog | PUREONS',
    description: 'Insights on web infrastructure, automation, and scaling digital businesses.',
    openGraph: {
        title: 'Blog | PUREONS',
        description: 'Insights on web infrastructure, automation, and scaling digital businesses.',
        url: 'https://pureons.com/blog',
        siteName: 'PUREONS',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default async function BlogIndex() {
    const posts = await getAllPosts('blog');

    // Sort posts by date descending
    const sortedPosts = posts.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Technical deep dives into automation, infrastructure, and growth.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {sortedPosts.map((post: any) => (
                        <article key={post.slug} className="flex flex-col items-start justify-between group">
                            <div className="relative w-full">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden sm:aspect-[2/1] lg:aspect-[3/2]">
                                        {/* Fallback to a placeholder if no image, or use the image field. 
                                             Assuming all posts have images based on our verification. 
                                             For now, using a simple colored placeholder if image fails or is missing, 
                                             but the code assumes post.image exists. 
                                             Ideally we'd have a real placeholder image. 
                                         */}
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                                        )}
                                        <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl" />
                                    </div>
                                </Link>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.date} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    {post.tags && post.tags.map((tag: string) => (
                                        <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
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
