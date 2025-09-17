import React from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import Partners from '@/components/ui/Partners';
import Process from '@/components/ui/Process';
import TeamLeader from '@/components/ui/TeamLeader';
import Professional from '@/components/ui/Professional';
import Testimonials from '@/components/ui/Testimonials';
import FAQ from '@/components/ui/FAQ';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Process />
      <TeamLeader />
      <Professional />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}