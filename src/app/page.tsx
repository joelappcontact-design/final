import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnersBanner from '@/components/PartnersBanner';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FixedCallButton from '@/components/FixedCallButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnersBanner />
        <Services />
        <Contact />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FixedCallButton />
      <CookieBanner />
    </div>
  );
}