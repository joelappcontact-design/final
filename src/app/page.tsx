'use client';
// Cache-bust: 2025-09-10-13:25 - Logos partenaires améliorés

import { useEffect } from 'react';
import { Clock, Shield, Star, CheckCircle, MapPin, Phone, MessageCircle } from 'lucide-react';
import CallButton from '@/components/CallButton';
import CityGrid from '@/components/CityGrid';
import FAQ from '@/components/FAQ';
import TestimonialCard from '@/components/TestimonialCard';
import PartnersMarquee from '@/components/PartnersMarquee';
import { config } from '@/lib/config';
import { initializeTracking, saveGclid } from '@/lib/tracking';
import { Testimonial, FAQ as FAQType } from '@/types';


// Témoignages clients
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Marie L.',
    rating: 5,
    comment: 'Intervention très rapide, en 30 minutes exactement. Prix respecté, aucun dégât. Je recommande vivement !',
    location: 'Paris 15',
    date: 'Il y a 2 jours',
  },
  {
    id: 'testimonial-2',
    name: 'Jean-Pierre M.',
    rating: 5,
    comment: 'Artisan très professionnel, intervention rapide et efficace. Plus de peur des arnaques avec ces serruriers !',
    location: 'Neuilly-sur-Seine',
    date: 'Il y a 1 semaine',
  },
  {
    id: 'testimonial-3',
    name: 'Sophie D.',
    rating: 5,
    comment: 'Intervention de nuit, très respectueux. Le prix était exactement celui annoncé. Service impeccable.',
    location: 'Boulogne-Billancourt',
    date: 'Il y a 3 jours',
  },
];

// FAQ
const faqData: FAQType[] = [
  {
    id: 'faq-1',
    question: 'En combien de temps intervenez-vous ?',
    answer: `Nous intervenons en moyenne en ${config.slaMinutes} selon le trafic. En cas d'urgence, nous nous efforçons d'arriver encore plus rapidement.`,
    category: 'service',
  },
  {
    id: 'faq-3',
    question: 'Puis-je payer par carte ?',
    answer: 'Oui, nous acceptons tous les modes de paiement : carte bancaire, espèces, virement. La facture est envoyée automatiquement par email.',
    category: 'pricing',
  },
  {
    id: 'faq-4',
    question: 'Intervention la nuit et jours fériés ?',
    answer: 'Oui, nous intervenons 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Les tarifs restent les mêmes.',
    category: 'emergency',
  },
  {
    id: 'faq-5',
    question: 'Artisans certifiés ?',
    answer: 'Tous nos artisans sont certifiés, vérifiés et assurés. Nous effectuons des vérifications régulières de leurs compétences.',
    category: 'general',
  },
  
];

export default function HomePage() {
  useEffect(() => {
    // Initialise le tracking
    initializeTracking();
    
    // Sauvegarde le GCLID si présent
    saveGclid();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-outline">
            🇫🇷 Serrurier d'urgence {config.primaryCity} 24h/24
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto text-outline">
            🛠️ Artisans français de confiance • Appelez {config.phoneDisplay} pour intervention immédiate • Prix fixes • Intervention en {config.slaMinutes}
          </p>
          
          {/* Annonce de prix mise en avant */}
          <div className="mb-8">
            <div className="inline-block price-highlight px-8 py-4 rounded-2xl text-2xl md:text-3xl font-bold animate-bounce-gentle">
              🔓 Ouverture de porte à partir de 39€
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallButton variant="primary" size="lg" />
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle size={20} className="text-yellow-400" />
              <span className="text-sm font-medium text-outline">Intervention rapide</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Clock size={20} className="text-yellow-400" />
              <span className="text-sm font-medium text-outline">Intervention {config.slaMinutes}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Shield size={20} className="text-yellow-400" />
              <span className="text-sm font-medium text-outline">Artisans vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-outline">
            Pourquoi nous choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="modern-card text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intervention rapide</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Arrivée en <span className="font-bold text-yellow-400">{config.slaMinutes}</span> en moyenne. 
                Nous comprenons l'urgence de votre situation et nous nous engageons à être à vos côtés rapidement.
              </p>
            </div>
            
            <div className="modern-card text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Artisans vérifiés</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {config.content.trust.certified}. Tous nos artisans sont certifiés, assurés et passent des vérifications de sécurité rigoureuses.
              </p>
            </div>
            
            <div className="modern-card text-center group lg:col-span-1 md:col-span-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dépannage serrurier disponible 24/7</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Porte bloquée, clé perdue ou serrure endommagée ? Nos artisans qualifiés interviennent rapidement, évaluent la situation sur place et vous proposent une solution adaptée. Intervention soignée, matériel fiable et assistance en continu pour sécuriser votre accès en toute sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Zones couvertes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Zones d'intervention
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg">
              Temps moyen d'intervention {config.slaMinutes} selon trafic
            </p>
          </div>
          
          <CityGrid maxItems={12} />
          
          <div className="text-center mt-8">
            <a 
              href="/zones" 
              className="btn-secondary px-8 py-3 inline-flex items-center gap-2"
            >
              <MapPin size={20} />
              Voir toutes les zones
            </a>
          </div>
        </div>
      </section>

      {/* Nos partenaires - Banderole défilante */}
      <PartnersMarquee 
        partners={config.partners}
        speed={25000}
        pauseOnHover={true}
        grayscale={true}
        gap={48}
        height={48}
        reduceMotionFallback={true}
      />

      {/* Témoignages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Ce que disent nos clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Star size={20} className="text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4,8/5</span>
              <span className="text-sm">moyenne sur 127 avis</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Questions fréquentes
          </h2>
          
          <FAQ faqs={faqData} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
              Besoin d'une intervention d'urgence ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Appelez-nous maintenant, nous intervenons en {config.slaMinutes}
            </p>
            <CallButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Sticky CTA Mobile - maintenant géré dans layout.tsx */}
    </div>
  );
}
