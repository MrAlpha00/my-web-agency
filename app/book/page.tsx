'use client';

import { useEffect, useState } from 'react';

export default function Book() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-black pt-24 pb-12 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Book Your Automation Systems Audit
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Schedule a time to discuss how we can engineer a scalable, automation-first infrastructure for your business.
                </p>
            </div>

            <div className="w-full h-[700px] border border-white/5 rounded-2xl overflow-hidden bg-zinc-900/30 backdrop-blur-sm">
                {mounted && (
                    <iframe
                        src="https://calendly.com/sm4686771/automation-systems-audit?embed_domain=pureons.com&embed_type=Inline"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Calendly Scheduling Page"
                    ></iframe>
                )}
            </div>
        </div>
    );
}
