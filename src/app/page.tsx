import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnersBanner from '@/components/PartnersBanner';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnersBanner />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}