import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = {
    quick: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Case Studies', href: '/case-studies' },
    ],
    services: [
        { name: 'AI Automation Systems', href: '/services' },
        { name: 'Web Infrastructure', href: '/services' },
        { name: 'Revenue Architecture', href: '/services' },
        { name: 'Custom Software', href: '/services' },
        { name: 'Performance Optimization', href: '/services' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/mralpha00',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter (X)',
            href: 'https://twitter.com/mralpha00',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/mralpha00',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Discord',
            href: 'https://discord.com/users/mralpha00',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
        }
    ],
};

const whatsappLink = "https://wa.me/919663866778?text=Hi%20PUREONS,%20I%20would%20like%20to%20discuss%20a%20project.";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                            <Image
                                src="/images/logo.jpg"
                                alt="Pureons Logo"
                                width={180}
                                height={48}
                                className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
                            />
                        </Link>
                        <p className="text-sm leading-6 text-zinc-400 max-w-sm">
                            PUREONS builds intelligent automation systems and scalable web infrastructure for modern businesses.
                        </p>
                        <div className="flex space-x-6 items-center">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-400 transition-all hover:scale-110"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.34 5.06L2.35 22l4.98-1.3C8.78 21.53 10.37 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.77 14.5c-.24.7-.63 1.25-1.33 1.25-.7 0-1.46-.35-2.73-1.62-1.27-1.27-1.62-2.03-1.62-2.73 0-.7.55-1.09 1.25-1.33.24-.09.39-.14.39-.14l-.94-2.27c-.05-.12-.13-.12-.22-.12-.14 0-.31.05-.44.11-1.22.6-2.06 1.87-2.06 3.14 0 .39.06.77.16 1.14.73 2.62 3.86 6.07 6.8 6.07 3.52 0 3.75-2.79 3.75-3.03 0-.24-.49-.75-1.46-1.18-.97-.43-1.18-.49-1.39-.42-.21.07-.35.31-.55.57-.2.26-.26.31-.48.24-.22-.07-.95-.35-1.81-1.11-.67-.59-1.12-1.33-1.25-1.74-.13-.41-.01-.61.19-.82.1-.1.21-.26.31-.39.1-.13.13-.22.19-.37.06-.15.03-.28-.01-.39l-1-2.39c-.39-.94-.8-1.01-1.07-1.01H8.5c-.27 0-.71.1-1.07.45-.36.35-1.39 1.36-1.39 3.31 0 1.95 1.03 3.83 2.62 5.42 1.59 1.59 3.47 2.62 5.42 2.62 1.95 0 2.96-1.03 3.31-1.39.35-.36.45-.8.45-1.07 0-.27-.08-.68-1.02-1.07z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.quick.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.services.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex gap-x-3">
                                    <MapPinIcon className="h-6 w-5 flex-none text-zinc-400" aria-hidden="true" />
                                    <span className="text-sm leading-6 text-zinc-400">
                                        PUREONS<br />
                                        Jayanagar 4th Block,<br />
                                        Near Cool Joint Circle,<br />
                                        Bengaluru, Karnataka 560011<br />
                                        India
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <PhoneIcon className="h-6 w-5 flex-none text-zinc-400" aria-hidden="true" />
                                    <a href="tel:+919663866778" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">+91 9663866778</a>
                                </li>
                                <li className="flex gap-x-3">
                                    <EnvelopeIcon className="h-6 w-5 flex-none text-zinc-400" aria-hidden="true" />
                                    <a href="mailto:contact@pureons.com" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">contact@pureons.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/5 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-zinc-500">
                        &copy; {new Date().getFullYear()} Pureons, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
