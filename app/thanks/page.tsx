import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Thanks() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 lg:px-8">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-lg w-full text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 mb-8">
                    <CheckCircleIcon className="h-10 w-10 text-green-500" aria-hidden="true" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                    Your Automation Audit Is Confirmed
                </h1>

                <p className="text-lg text-zinc-400 mb-10">
                    We’ve received your booking. You’ll receive a confirmation email and pre-audit checklist shortly.
                </p>

                <Link
                    href="/"
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                >
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
}
