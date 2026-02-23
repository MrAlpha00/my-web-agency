import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 selection:bg-indigo-500/30 flex flex-col">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col">

                {/* Top Section */}
                <div className="border-b border-white/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase">
                            404 Not Found
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-medium text-zinc-300">
                            Sorry, this page doesn't exist. Please check the URL.
                        </h2>
                    </div>
                    <div className="flex-shrink-0 mb-2">
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105"
                        >
                            <ArrowRightIcon className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                            BACK TO THE HOME PAGE
                        </Link>
                    </div>
                </div>

                {/* 3 Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[450px]">

                    {/* Card 1: Mission */}
                    <div className="relative rounded-2xl overflow-hidden group bg-zinc-900 border border-white/10 hover:border-indigo-500/50 transition-colors flex flex-col min-h-[300px]">
                        <div className="absolute inset-0 bg-[#aed581]/10 opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
                        <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-[#aed581]/20 rounded-full scale-150" />
                        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-[#aed581]/20 rounded-full scale-150" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">Our Mission</h3>
                            <div>
                                <Link href="/about" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold uppercase transition-transform hover:scale-105">
                                    <ArrowRightIcon className="w-3 h-3 mr-2" /> MORE ABOUT OUR MISSION
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Services */}
                    <div className="relative rounded-2xl overflow-hidden group bg-zinc-900 border border-white/10 hover:border-yellow-500/50 transition-colors flex flex-col min-h-[300px]">
                        <div className="absolute inset-0 bg-[#fbc02d]/10 opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
                        {/* Magnetic Field pattern imitation using CSS border radius tricks */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-[#fbc02d]/20 rounded-[100%_0_100%_0/100%_0_100%_0]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[1px] border-[#fbc02d]/20 rounded-[100%_0_100%_0/100%_0_100%_0]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">Our Services</h3>
                            <div>
                                <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold uppercase transition-transform hover:scale-105">
                                    <ArrowRightIcon className="w-3 h-3 mr-2" /> LEARN MORE
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Case Studies */}
                    <div className="relative rounded-2xl overflow-hidden group bg-zinc-900 border border-white/10 hover:border-blue-500/50 transition-colors flex flex-col min-h-[300px]">
                        <div className="absolute inset-0 bg-[#29b6f6]/10 opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
                        <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-500/20 blur-[60px] rounded-full" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">Case Studies</h3>
                            <div>
                                <Link href="/case-studies" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold uppercase transition-transform hover:scale-105">
                                    <ArrowRightIcon className="w-3 h-3 mr-2" /> READ MORE
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
