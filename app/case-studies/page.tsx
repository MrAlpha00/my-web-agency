import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
    title: 'Case Studies | PUREONS',
    description: 'Real-world examples of how we help businesses scale with automation and better infrastructure.',
};

export default async function CaseStudiesIndex() {
    const cases = await getAllPosts('case-studies');

    // Sort cases by date descending
    const sortedCases = cases.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

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
                    {sortedCases.map((post: any) => (
                        <article key={post.slug} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] relative overflow-hidden">
                                    <Image
                                        src={post.image || '/images/og/default-case.png'}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    {post.stat && <span className="text-indigo-600 font-semibold">{post.stat}</span>}
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
