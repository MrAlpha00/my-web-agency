import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ConversionArchitectureServices() {
    return (
        <main className="bg-[#0B0F1A] min-h-screen text-white pt-32 pb-24 selection:bg-[#FF6A00]/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-12">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-[-1px] text-white mb-6">
                        Conversion Architecture
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
                        High-performance funnels engineered to convert traffic into predictable income. Maximize every visitor's potential value.
                    </p>

                    <div className="p-8 md:p-12 rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#0B0F1A] shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FF6A00]/20 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:from-[#FF6A00]/30 transition-colors duration-500" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Scaling Faster</h2>
                            <p className="text-zinc-400 mb-8 max-w-lg">
                                Book a strategy call to discover how our conversion architecture can transform your revenue operations.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-[8px] px-6 py-3 text-base font-semibold text-white transition-all hover:brightness-110 shadow-[0_4px_14px_0_rgba(255,106,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.23)] border-none bg-[linear-gradient(90deg,#FF6A00_0%,#FF2E00_100%)]">
                                Book Strategy Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
