import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "Pureons - AI Agents & Web Infrastructure",
    template: "%s | Pureons",
  },
  description: "Empowering businesses with next-gen web infrastructure, AI automation, and growth systems.",
  openGraph: {
    title: "Pureons - AI Agents & Web Infrastructure",
    description: "Empowering businesses with next-gen web infrastructure, AI automation, and growth systems.",
    url: '/',
    siteName: 'Pureons',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pureons - AI Agents & Web Infrastructure",
    description: "Empowering businesses with next-gen web infrastructure, AI automation, and growth systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PUREONS',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    logo: 'http://localhost:3000/logo.png', // Placeholder, expecting user to add actual logo later
    description: "Empowering businesses with next-gen web infrastructure, AI automation, and growth systems.",
    sameAs: []
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-indigo-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
