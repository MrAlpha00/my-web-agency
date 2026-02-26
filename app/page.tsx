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

export default function Home() {
  return (
    <main className="bg-black selection:bg-[#FF6A00]/30">
      {/* Static Image Hero Section - 2 Column Layout */}
      <section
        className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/backb.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 2-Column Grid Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-full items-center pt-32 pb-24 lg:pt-0 lg:pb-0">

          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 max-w-[600px] w-full mx-auto lg:mx-0 px-6 lg:px-0 lg:pl-[12%]"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6 lg:mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6A00] animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">Accepting New Enterprise Clients</span>
            </div>

            <h1 className="text-[52px] md:text-[64px] lg:text-[76px] xl:text-[88px] font-[800] tracking-[-0.5px] leading-[1.1] text-[#FFFFFF] drop-shadow-lg pb-2">
              We Build Revenue Systems
              <br className="hidden sm:block" />
              {' '}
              {/* Gradient only on specific words */}
              <span
                className="text-transparent bg-clip-text relative inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FF6A00 0%, #FF2E00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                That Work 24/7.
              </span>
            </h1>

            <p className="mt-[24px] lg:mt-[32px] text-[16px] lg:text-[18px] leading-[1.6] font-normal text-[#A1A1AA] opacity-90 max-w-[600px] mx-auto lg:mx-0">
              Leverage AI, intelligent automation, and next-gen web infrastructure to scale your business operations without scaling headcount.
            </p>

            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
              {/* CTA Primary */}
              <CalendlyPopupButton
                url="https://calendly.com/sm4686771/automation-systems-audit"
                className="relative inline-flex items-center justify-center w-full sm:w-auto rounded-[8px] px-[28px] py-[14px] text-[16px] font-[600] text-[#FFFFFF] transition-all duration-300 hover:brightness-110 shadow-[0_4px_14px_0_rgba(255,106,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.23)] border-none bg-[linear-gradient(90deg,#FF6A00_0%,#FF2E00_100%)]"
              >
                Get Your Growth Architecture Review
              </CalendlyPopupButton>

              {/* CTA Secondary */}
              <Link
                href="/services"
                className="relative inline-flex items-center justify-center w-full sm:w-auto rounded-[8px] px-[28px] py-[14px] text-[16px] font-[600] text-[#E4E4E7] transition-all duration-300 ease-in-out backdrop-blur-[8px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
              >
                See Services
              </Link>
            </div>
          </motion.div>

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
