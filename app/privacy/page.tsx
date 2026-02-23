import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy and data handling practices for PUREONS.',
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24 selection:bg-indigo-500/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
                    <p className="text-zinc-400">Last Updated: February 2026</p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                        At PUREONS, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you visit our website or engage our services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
                    <p className="text-zinc-400 mb-6">
                        We collect information that you voluntarily provide to us when you express an interest in obtaining
                        information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2 mb-8">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you fill out consultation forms.</li>
                        <li><strong>Automatically Collected Data:</strong> IP address, browser type, operating system, and interaction metrics gathered via Google Analytics.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
                    <p className="text-zinc-400 mb-6">We use personal information collected via our Website for a variety of business purposes described below:</p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2 mb-8">
                        <li>To facilitate the delivery of our automation and web systems services.</li>
                        <li>To respond to your inquiries and offer strategic consultations.</li>
                        <li>To send you marketing and promotional communications (if opted-in).</li>
                        <li>To analyze website performance and improve user experience.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Security</h2>
                    <p className="text-zinc-400 mb-8">
                        We have implemented appropriate technical and organizational security measures engineered to protect the security of any personal information we process.
                        However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Third-Party Integrations</h2>
                    <p className="text-zinc-400 mb-8">
                        We may share your data with trusted third-party vendors, service providers, contractors, or agents who perform services
                        for us or on our behalf and require access to such information to do that work (e.g., Slack, Calendly, Google Analytics, database providers).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h2>
                    <p className="text-zinc-400 mb-8">
                        If you have questions or comments about this notice, you may email us at <a href="mailto:contact@pureons.com" className="text-indigo-400 hover:underline">contact@pureons.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
