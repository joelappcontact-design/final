import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FixedCallButton from '@/components/FixedCallButton';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FixedCallButton />
      <CookieBanner />
    </div>
  );
}