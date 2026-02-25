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
import HomepageMetrics from '@/components/HomepageMetrics';
import HeroFeatureStrip from '@/components/HeroFeatureStrip';
import dynamic from 'next/dynamic';

const EnergyShardCanvas = dynamic(() => import('@/components/EnergyShardCanvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black selection:bg-indigo-500/30">
      {/* Cinematic Hero Section - 2 Column Layout */}
      <section className="relative min-h-[100vh] lg:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Layer 1: Deep black base (#06070B) is set on parent main or globals.css */}
        {/* Layer 3: Very light noise texture overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('/noise.png')" }} />

        {/* Grid pattern overlay (from original) lowered opacity to not compete with 3D */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none z-0" />

        {/* 2-Column Grid Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] h-full items-center pt-24 lg:pt-0">

          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center items-start text-left max-w-2xl xl:max-w-3xl pr-4 lg:pr-8 z-20"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6 lg:mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">Accepting New Enterprise Clients</span>
            </div>

            <h1 className="text-[56px] lg:text-[90px] xl:text-[110px] font-bold tracking-[-0.02em] leading-[1.05] text-white">
              We Build Revenue Systems
              <br />
              {/* Gradient only on specific words, with text shadow */}
              <span
                className="text-transparent bg-clip-text relative inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #8A6BFF 0%, #C084FC 100%)',
                  textShadow: '0 0 40px rgba(138, 107, 255, 0.4)'
                }}
              >
                That Work 24/7.
              </span>
            </h1>

            <p className="mt-[28px] lg:mt-[32px] text-[16px] lg:text-[18px] leading-[1.6] font-normal text-[#bdbdd3] max-w-[650px]">
              Leverage AI, intelligent automation, and next-gen web infrastructure to scale your business operations without scaling headcount.
            </p>

            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-8 w-full sm:w-auto">
              {/* CTA Primary */}
              <CalendlyPopupButton
                url="https://calendly.com/sm4686771/automation-systems-audit"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-white px-8 py-[18px] text-[16px] leading-[1.6] font-medium text-black transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="relative z-10">Get Your Growth Architecture Review</span>
                {/* Hover state outer glow */}
                <div className="absolute inset-[-2px] -z-10 rounded-full bg-gradient-to-r from-[#8A6BFF] to-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none" />
                {/* Ambient pulse effect (breathing) */}
                <div className="absolute inset-0 -z-20 rounded-full bg-white/20 blur-xl animate-[sculptureBloom_10s_ease-in-out_infinite] pointer-events-none" />
              </CalendlyPopupButton>

              {/* CTA Secondary */}
              <Link
                href="/services"
                className="relative text-[16px] leading-[1.6] font-semibold text-white transition-colors group py-2"
              >
                See Services
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
                <span className="absolute left-0 bottom-1 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3D Canvas Scene */}
          <div className="absolute inset-0 lg:relative lg:inset-auto w-full h-[60vh] lg:h-[120%] pointer-events-none flex items-center justify-center translate-x-[5%] z-0 lg:z-10 mt-12 lg:mt-0 opacity-40 lg:opacity-100">
            <EnergyShardCanvas />
          </div>

        </div>
      </section>

      {/* The 4-column feature strip inspired by n8n.io */}
      <div className="-mt-8 lg:-mt-16 mb-24 relative z-20 w-full">
        <HeroFeatureStrip />
      </div>

      <CoreSolutions />
      <HomepageMetrics />
      <WhoWeServe />
      <RevenueProcess />
      <TrustBadges />
      <CaseStudyPreview />
      <EngineeredResults />
      <Testimonials />
      <LeadMagnet />
      <FinalCTA />
    </main>
  );
}
