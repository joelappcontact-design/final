import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FixedCallButton from '@/components/FixedCallButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FixedCallButton />
    </div>
  );
}