'use client';

import { useEffect } from 'react';
import { Clock, Shield, Star, CheckCircle, MapPin, Phone, MessageCircle } from 'lucide-react';
import CallCTA from '@/components/CallCTA';
import CityGrid from '@/components/CityGrid';
import FAQ from '@/components/FAQ';
import TestimonialCard from '@/components/TestimonialCard';
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            {config.content.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-shadow">
            {config.content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallCTA variant="primary" size="lg" showWhatsApp={true} />
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <CheckCircle size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Intervention rapide</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Clock size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Intervention {config.slaMinutes}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Shield size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Artisans vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Pourquoi nous choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Intervention rapide</h3>
              <p className="text-white/80 text-sm">
                Arrivée en {config.slaMinutes} en moyenne
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Artisans vérifiés</h3>
              <p className="text-white/80 text-sm">
                {config.content.trust.certified}
              </p>
            </div>
            
            <div className="card text-center bg-yellow-400 border border-yellow-300">
              <div className="px-6 py-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Ouverture de porte</h3>
                <p className="text-3xl md:text-4xl font-black text-gray-900">à partir de 39€</p>
              </div>
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

      {/* Nos partenaires */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Nos partenaires
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-lg font-semibold">Heracles</span>
            <span className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-lg font-semibold">Vachette</span>
            <span className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-lg font-semibold">Bricard</span>
          </div>
        </div>
      </section>

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
            <CallCTA variant="primary" size="lg" showWhatsApp={true} />
          </div>
        </div>
      </section>

      {/* Sticky CTA Mobile */}
      <div className="sticky-cta">
        <CallCTA variant="sticky" size="md" />
      </div>
    </div>
  );
}
