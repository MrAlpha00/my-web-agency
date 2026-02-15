'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CoreSolutions from '@/components/CoreSolutions';
import RevenueProcess from '@/components/RevenueProcess';
import EngineeredResults from '@/components/EngineeredResults';
import FinalCTA from '@/components/FinalCTA';
import LeadMagnet from '@/components/LeadMagnet';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import WhoWeServe from '@/components/WhoWeServe';

export default function Home() {
  return (
    <main className="bg-black selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">Accepting New Enterprise Clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 pb-2">
              We Build Revenue Systems
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">That Work 24/7.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-zinc-400 max-w-3xl mx-auto">
              Leverage AI, intelligent automation, and next-gen web infrastructure to scale your business operations without scaling headcount.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CalendlyPopupButton
                url="https://calendly.com/sm4686771/automation-systems-audit"
                className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="relative z-10">Get Your Growth Architecture Review</span>
                <div className="absolute inset-0 -z-10 rounded-full bg-white blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
              </CalendlyPopupButton>
              <Link
                href="/services"
                className="text-base font-semibold leading-6 text-white hover:text-indigo-400 transition-colors flex items-center gap-2 group"
              >
                See Services
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      </section>

      <TrustBadges />
      <Testimonials />
      <CoreSolutions />
      <WhoWeServe />
      <LeadMagnet />
      <RevenueProcess />
      <CaseStudyPreview />
      <EngineeredResults />
      <FinalCTA />
    </main>
  );
}
