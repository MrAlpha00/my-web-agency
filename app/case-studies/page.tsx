import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Assuming heroicons is installed

export const metadata = {
    title: 'Case Studies | PUREONS',
    description: 'Real-world examples of how we help businesses scale with automation and better infrastructure.',
    alternates: {
        canonical: '/case-studies',
    },
};

export default async function CaseStudiesIndex() {
    const cases = await getAllPosts('case-studies');

    // Sort cases by date descending
    const sortedCases = cases.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Hero Section */}
            <div className="relative isolate pt-24 pb-16 sm:pt-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),black)] opacity-20" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Engineered Growth Systems in Action
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We don't just build websites. We build infrastructure that prints money.
                            See the results for yourself.
                        </p>
                    </div>
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {sortedCases.map((post: any) => (
                        <article key={post.slug} className="flex flex-col items-start justify-between bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] group">

                            {/* Image Section */}
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <Image
                                    src={post.image || '/images/og/default-case.png'}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col h-full w-full">
                                {/* Metric Headline */}
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                                    {post.stat || "Success Story"}
                                </div>

                                <h3 className="text-xl font-semibold leading-6 text-white group-hover:text-indigo-300 transition-colors mb-4">
                                    <Link href={`/case-studies/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-sm leading-6 text-gray-400 mb-6 line-clamp-3 flex-grow">
                                    {post.description}
                                </p>

                                {/* Tech Stack Tags */}
                                {post.techStack && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {post.techStack.slice(0, 3).map((tech: string) => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                        {post.techStack.length > 3 && (
                                            <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10">
                                                +{post.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    <span className="text-indigo-400 text-sm font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                        View Case Study <ArrowRightIcon className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
