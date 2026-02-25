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
import InteractiveGlowSection from '@/components/InteractiveGlowSection';
import HomepageMetrics from '@/components/HomepageMetrics';
import HeroSculpture from '@/components/HeroSculpture';
import HeroFeatureStrip from '@/components/HeroFeatureStrip';

export default function Home() {
  return (
    <main className="bg-black selection:bg-indigo-500/30">
      {/* Hero Section */}
      <InteractiveGlowSection className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse delay-2000" />
        </div>

        {/* Animated Lightning / Flame Sculpture — right side */}
        <HeroSculpture />

        {/* Vignette overlay — darkens edges for contrast */}
        <div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 40% 50%, transparent 0%, rgba(0,0,0,0.55) 100%)',
            animation: 'vignetteBreath 12s ease-in-out infinite',
          }}
        />

        {/* Mobile-only subtle glow (replaces sculpture below md) */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 60% 40%, rgba(99,80,255,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-16">
          {/* Radial gradient behind headline for extra type contrast */}
          <div
            className="absolute inset-0 pointer-events-none -z-[1]"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 45%, var(--color-hero-pulse) 0%, transparent 60%)',
            }}
          />
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

            <h1
              className="text-[56px] sm:text-7xl lg:text-[96px] font-bold tracking-[-0.02em] leading-[1.1] text-transparent bg-clip-text pb-2 relative"
              style={{
                backgroundImage: 'linear-gradient(90deg, #8b6bff 0%, #a06bff 100%)',
                // Fallback blurred shadow for legibility over the sculpture
                textShadow: '0 4px 30px rgba(139, 107, 255, 0.4)'
              }}
            >
              We Build Revenue Systems
              <br />
              <span className="text-white drop-shadow-md">That Work 24/7.</span>
            </h1>

            <p className="mt-6 text-[20px] md:text-[24px] leading-[1.4] font-medium text-var(--color-hero-text-muted) max-w-3xl mx-auto">
              Leverage AI, intelligent automation, and next-gen web infrastructure to scale your business operations without scaling headcount.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <CalendlyPopupButton
                url="https://calendly.com/sm4686771/automation-systems-audit"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-white px-8 py-4 text-[16px] leading-[1.6] font-semibold text-black transition-all duration-300 hover:ring-2 hover:ring-[#8b6bff]/50 hover:shadow-[0_8px_20px_rgba(139,107,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="relative z-10">Get Your Growth Architecture Review</span>
                <div className="absolute inset-0 -z-10 rounded-full bg-white blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-[sculptureBloom_8s_ease-in-out_infinite] motion-reduce:animate-none" />
              </CalendlyPopupButton>

              <Link
                href="/services"
                className="relative text-[16px] leading-[1.6] font-semibold text-white transition-colors group py-2"
              >
                See Services
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
                {/* Horizontal scale underline anim on hover */}
                <span className="absolute left-0 bottom-1 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* The 4-column feature strip inspired by n8n.io */}
        <HeroFeatureStrip />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      </InteractiveGlowSection>

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
