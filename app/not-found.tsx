import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center selection:bg-indigo-500/30 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center relative z-10 px-6">
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-white mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6">
                    System Not Found
                </h2>
                <p className="text-zinc-500 max-w-md mx-auto mb-10 text-lg">
                    The node you are trying to reach does not exist in our infrastructure. It may have been relocated or deactivated.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-zinc-200"
                >
                    Return to Core Infrastructure
                </Link>
            </div>
        </main>
    );
}
