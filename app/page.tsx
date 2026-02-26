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
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 max-w-[620px] 2xl:max-w-[680px] w-full mx-auto lg:mx-0 px-6 lg:px-0 lg:pl-[10%] lg:pr-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6 lg:mb-8 mx-auto lg:mx-0 mt-[40px]">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6A00] animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">Accepting New Enterprise Clients</span>
            </div>

            <h1 className="w-full text-[38px] md:text-[48px] lg:text-[64px] 2xl:text-[72px] font-[800] tracking-[-1px] leading-[1.05] text-[#FFFFFF] drop-shadow-lg pb-2 max-w-[900px]">
              <span className="lg:whitespace-nowrap block">We Build Revenue Systems</span>
              {' '}
              {/* Gradient only on specific words */}
              <span
                className="text-transparent bg-clip-text relative inline-block lg:mt-2"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FF6A00 0%, #FF2E00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                That Work <RotatingText words={["Automatically.", "24/7.", "At Scale.", "Without Hiring.", "On Autopilot."]} mode="slide" className="text-white" />
              </span>
            </h1>

            <p className="mt-[24px] text-[16px] lg:text-[18px] leading-[1.6] font-normal text-[#A1A1AA] opacity-90 max-w-[520px] mx-auto lg:mx-0">
              Leverage AI, intelligent automation, and next-gen web infrastructure to scale your business operations without scaling headcount.
            </p>

            <div className="mt-[32px] flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-[16px] w-full sm:w-auto">
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
